export const config = {
  runtime: "edge"
};

declare const process: {
  env: Record<string, string | undefined>;
};

type SpotifyTrack = {
  title: string;
  artist: string;
  albumArt: string;
  url: string;
  source: "now-playing" | "top-track" | "favorite";
};

type SpotifyApiTrack = {
  name?: string;
  external_urls?: { spotify?: string };
  artists?: Array<{ name?: string }>;
  album?: {
    images?: Array<{ url?: string }>;
  };
};

const SPOTIFY_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const SPOTIFY_NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const SPOTIFY_TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?limit=1&time_range=long_term";

const FAVORITE_FALLBACK: SpotifyTrack = {
  title: "Blinding Lights",
  artist: "The Weeknd",
  albumArt: "https://placehold.co/120x120/0f172a/edf2ff?text=%E2%99%AA",
  url: "https://open.spotify.com/",
  source: "favorite"
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function mapTrack(track: SpotifyApiTrack | undefined, source: SpotifyTrack["source"]): SpotifyTrack | null {
  if (!track?.name || !track.artists?.length) return null;
  const artist = track.artists.map((item) => item.name).filter(Boolean).join(", ") || "Unknown artist";
  const albumArt = track.album?.images?.[0]?.url || FAVORITE_FALLBACK.albumArt;
  const url = track.external_urls?.spotify || FAVORITE_FALLBACK.url;

  return {
    title: track.name,
    artist,
    albumArt,
    url,
    source
  };
}

async function getAccessToken(clientId: string, clientSecret: string, refreshToken: string): Promise<string | null> {
  const basicAuth = btoa(`${clientId}:${clientSecret}`);

  const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "content-type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken
    })
  });

  if (!response.ok) return null;

  const payload = await response.json();
  return payload?.access_token || null;
}

async function fetchNowPlaying(accessToken: string): Promise<SpotifyTrack | null> {
  const response = await fetch(SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (response.status === 204) return null;
  if (!response.ok) return null;

  const payload = await response.json();
  if (!payload?.is_playing) return null;

  return mapTrack(payload?.item, "now-playing");
}

async function fetchTopTrack(accessToken: string): Promise<SpotifyTrack | null> {
  const response = await fetch(SPOTIFY_TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok) return null;

  const payload = await response.json();
  const firstTrack = Array.isArray(payload?.items) ? payload.items[0] : undefined;
  return mapTrack(firstTrack, "top-track");
}

export default async function handler(): Promise<Response> {
  const clientId = process.env.SPOTIFY_CLIENT_ID || "";
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || "";
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN || "";

  if (!clientId || !clientSecret || !refreshToken) {
    return json({
      isConfigured: false,
      track: FAVORITE_FALLBACK
    });
  }

  try {
    const accessToken = await getAccessToken(clientId, clientSecret, refreshToken);
    if (!accessToken) {
      return json({
        isConfigured: true,
        track: FAVORITE_FALLBACK
      });
    }

    const nowPlaying = await fetchNowPlaying(accessToken);
    if (nowPlaying) {
      return json({
        isConfigured: true,
        track: nowPlaying
      });
    }

    const topTrack = await fetchTopTrack(accessToken);
    if (topTrack) {
      return json({
        isConfigured: true,
        track: topTrack
      });
    }

    return json({
      isConfigured: true,
      track: FAVORITE_FALLBACK
    });
  } catch {
    return json({
      isConfigured: true,
      track: FAVORITE_FALLBACK
    });
  }
}
