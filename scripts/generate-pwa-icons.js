/*
  SVG + Canvas PWA icon generator for SKB portfolio.
  Usage:
  1) Open portfolio in a browser.
  2) Open DevTools console.
  3) Paste this script and run generateSkbPwaIcons().
  4) PNG files (72-512) download automatically.
*/

async function generateSkbPwaIcons() {
  const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0B122D"/>
          <stop offset="100%" stop-color="#162B51"/>
        </linearGradient>
        <radialGradient id="glow" cx="0.2" cy="0.18" r="0.95">
          <stop offset="0%" stop-color="#F5A623" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#F5A623" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="512" height="512" rx="112" fill="url(#bgGrad)"/>
      <circle cx="136" cy="118" r="220" fill="url(#glow)"/>
      <rect x="26" y="26" width="460" height="460" rx="96" fill="none" stroke="#F5A623" stroke-opacity="0.5" stroke-width="8"/>
      <text x="256" y="308" text-anchor="middle" fill="#EDF2FF"
            font-family="'Clash Display', 'Satoshi', 'Segoe UI', sans-serif"
            font-weight="700" font-size="180" letter-spacing="8">SKB</text>
    </svg>
  `.trim();

  const svgBlob = new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);

  const sourceImage = await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = svgUrl;
  });

  for (const size of sizes) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Canvas 2D context unavailable");
    }

    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(sourceImage, 0, 0, size, size);

    const dataUrl = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = dataUrl;
    anchor.download = `icon-${size}x${size}.png`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }

  URL.revokeObjectURL(svgUrl);
  console.log("SKB icon generation complete. Move downloaded icons to assets/icons/");
}
