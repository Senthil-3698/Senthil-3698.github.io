        const menuBtn = document.getElementById("menuBtn");
        const mobileNav = document.getElementById("mobileNav");
        if (menuBtn && mobileNav) {
            menuBtn.addEventListener("click", () => {
                mobileNav.classList.toggle("open");
            });

            const mobileNavLinks = mobileNav.querySelectorAll("a");
            mobileNavLinks.forEach((link) => {
                link.addEventListener("click", () => {
                    mobileNav.classList.remove("open");
                });
            });
        }

        const progress = document.getElementById("scrollProgress");
        const header = document.querySelector(".site-header");
        const backToTop = document.getElementById("backToTop");
        const backToTopRing = document.getElementById("backToTopRing");
        const cvModeToggle = document.getElementById("cvModeToggle");
        const cvSidePanel = document.getElementById("cvSidePanel");
        const downloadPdfBtn = document.getElementById("downloadPdfBtn");
        const heroResumeBtn = document.getElementById("heroResumeBtn");
        const introOverlay = document.getElementById("introOverlay");
        const heroPhotoReveal = document.getElementById("heroPhotoReveal");
        const heroSub = document.querySelector(".hero-sub");
        const heroBlobWrap = document.querySelector(".hero-blob-wrap");
        const heroTickerCanvas = document.getElementById("heroTickerCanvas");
        const soundToggle = document.getElementById("soundToggle");
        const soundUnlockHint = document.getElementById("soundUnlockHint");
        const themeWipe = document.getElementById("themeWipe");
        const themeSwitcher = document.getElementById("themeSwitcher");
        const themeToggle = document.getElementById("themeToggle");
        const themeMenu = document.getElementById("themeMenu");
        const themeOptions = document.querySelectorAll("[data-theme-option]");
        const heroName = document.querySelector(".hero-name");
        const crtOverlay = document.getElementById("crtOverlay");
        const crtMessage = document.getElementById("crtMessage");
        const confettiCanvas = document.getElementById("confettiCanvas");
        const eggToast = document.getElementById("eggToast");
        const githubHeatmapCanvas = document.getElementById("githubHeatmapCanvas");
        const githubHeatmapSkeleton = document.getElementById("githubHeatmapSkeleton");
        const githubLanguageCanvas = document.getElementById("githubLanguageCanvas");
        const githubLanguageSkeleton = document.getElementById("githubLanguageSkeleton");
        const githubLanguageLegend = document.getElementById("githubLanguageLegend");
        const githubRepoGrid = document.getElementById("githubRepoGrid");
        const githubRepoSkeleton = document.getElementById("githubRepoSkeleton");
        const githubLastActive = document.getElementById("githubLastActive");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const ringCircumference = 138.23;
        const sections = document.querySelectorAll("main section[id]");
        const desktopLinks = document.querySelectorAll(".desktop-nav a");
        const mobileLinks = document.querySelectorAll(".mobile-nav a");
        const statsOverlay = document.getElementById("statsOverlay");
        const statsCloseBtn = document.getElementById("statsCloseBtn");
        const statsLockPanel = document.getElementById("statsLockPanel");
        const statsDashboard = document.getElementById("statsDashboard");
        const statsPasswordInput = document.getElementById("statsPasswordInput");
        const statsUnlockBtn = document.getElementById("statsUnlockBtn");
        const statsLockError = document.getElementById("statsLockError");
        const statsTotalVisits = document.getElementById("statsTotalVisits");
        const statsTodayVisits = document.getElementById("statsTodayVisits");
        const statsAvgTime = document.getElementById("statsAvgTime");
        const statsMostViewedSection = document.getElementById("statsMostViewedSection");
        const statsReferrerBars = document.getElementById("statsReferrerBars");
        const statsSectionBars = document.getElementById("statsSectionBars");
        const statsDeviceBars = document.getElementById("statsDeviceBars");
        const statsShareBtn = document.getElementById("statsShareBtn");
        const publicVisitBadge = document.getElementById("publicVisitBadge");
        const blogBento = document.getElementById("blogBento");
        const blogSkeletonGrid = document.getElementById("blogSkeletonGrid");
        const blogWriteCta = document.getElementById("blogWriteCta");
        const availabilityIstTime = document.getElementById("availabilityIstTime");
        const availabilityDot = document.getElementById("availabilityDot");
        const availabilityStatusLabel = document.getElementById("availabilityStatusLabel");
        const availabilityIstDate = document.getElementById("availabilityIstDate");
        const clockUtcHour = document.getElementById("clockUtcHour");
        const clockUtcMin = document.getElementById("clockUtcMin");
        const clockUtcSec = document.getElementById("clockUtcSec");
        const clockUtcText = document.getElementById("clockUtcText");
        const clockUseHour = document.getElementById("clockUseHour");
        const clockUseMin = document.getElementById("clockUseMin");
        const clockUseSec = document.getElementById("clockUseSec");
        const clockUseText = document.getElementById("clockUseText");
        const clockUkHour = document.getElementById("clockUkHour");
        const clockUkMin = document.getElementById("clockUkMin");
        const clockUkSec = document.getElementById("clockUkSec");
        const clockUkText = document.getElementById("clockUkText");
        const spotifyWidget = document.getElementById("spotifyWidget");
        const spotifyArt = document.getElementById("spotifyArt");
        const spotifyKicker = document.getElementById("spotifyKicker");
        const spotifyTrackName = document.getElementById("spotifyTrackName");
        const spotifyArtistName = document.getElementById("spotifyArtistName");
        const cpRefreshBtn = document.getElementById("cpRefreshBtn");
        const lcRingEasy = document.getElementById("lcRingEasy");
        const lcRingMedium = document.getElementById("lcRingMedium");
        const lcRingHard = document.getElementById("lcRingHard");
        const lcTotalSolved = document.getElementById("lcTotalSolved");
        const lcEasyText = document.getElementById("lcEasyText");
        const lcMediumText = document.getElementById("lcMediumText");
        const lcHardText = document.getElementById("lcHardText");
        const lcAcceptance = document.getElementById("lcAcceptance");
        const lcRanking = document.getElementById("lcRanking");
        const lcRingsSvg = document.getElementById("lcRingsSvg");
        const hrBadges = document.getElementById("hrBadges");
        const githubStreakImg = document.getElementById("githubStreakImg");
        const lcSkeleton = document.getElementById("lcSkeleton");
        const hrSkeleton = document.getElementById("hrSkeleton");
        const streakSkeleton = document.getElementById("streakSkeleton");
        const pwaInstallBanner = document.getElementById("pwaInstallBanner");
        const pwaInstallNow = document.getElementById("pwaInstallNow");
        const pwaInstallDismiss = document.getElementById("pwaInstallDismiss");
        const chatAssistantToggle = document.getElementById("chatAssistantToggle");
        const chatAssistantPanel = document.getElementById("chatAssistantPanel");
        const chatLog = document.getElementById("chatLog");
        const chatInput = document.getElementById("chatInput");
        const chatSendBtn = document.getElementById("chatSendBtn");
        const chatMinimizeBtn = document.getElementById("chatMinimizeBtn");
        const chatClearBtn = document.getElementById("chatClearBtn");
        const chatSuggestions = document.getElementById("chatSuggestions");

        let lastScrollY = window.scrollY;
        let latestScrollY = window.scrollY;
        let ticking = false;
        let activeSectionId = "home";

        let konamiIndex = 0;
        const konamiSequence = [
            "arrowup", "arrowup", "arrowdown", "arrowdown",
            "arrowleft", "arrowright", "arrowleft", "arrowright",
            "b", "a"
        ];
        let heroClickTimes = [];
        let typingBuffer = "";
        let lastHireMeTriggerAt = 0;
        let confettiRunning = false;
        const confettiParticles = [];
        const confettiColors = ["#F5A623", "#EDF2FF", "#C1440E", "#00FF41", "#90D6FF", "#BFB3FF"];
        let confettiLastTime = performance.now();

        const GITHUB_USER = "senthil-3698";
        const GITHUB_CACHE_KEY = "skbGithubLiveCacheV1";
        const GITHUB_CACHE_TTL = 10 * 60 * 1000;
        const EMAILJS_SERVICE_ID = "service_9ek5ic9";
        const EMAILJS_TEMPLATE_ID = "template_hwklar4";
        const EMAILJS_PUBLIC_KEY = "HN4xJL1XTRK0rvix-";
        const STATS_PASSWORD_HASH = "badf82b72c8b86691e9b946ea1c922b225197336d672c727979e209f034fa6a3";
        const ANALYTICS_VISITS_KEY = "skbAnalyticsVisitsV1";
        const ANALYTICS_TOTAL_KEY = "skbAnalyticsTotalVisitsV1";
        const SESSION_ID = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
        const DEVTO_USERNAME = "YOUR_USERNAME";
        const BLOG_CACHE_KEY = "skbBlogFeedCacheV1";
        const BLOG_CACHE_TTL = 60 * 60 * 1000;
        const BLOG_FALLBACK_URLS = [
            "https://blog.cloudflare.com/announcing-d1/",
            "https://vercel.com/blog/introducing-next-js-14",
            "https://stripe.com/blog/strong-customer-authentication"
        ];
        const BLOG_OG_PROXY = "https://api.allorigins.win/raw?url=";
        const SPOTIFY_PROXY_ENDPOINT = "/api/spotify-now-playing";
        const SPOTIFY_REFRESH_INTERVAL = 30 * 1000;
        const SPOTIFY_FALLBACK_TRACK = {
            title: "Blinding Lights",
            artist: "The Weeknd",
            albumArt: "https://placehold.co/120x120/0f172a/edf2ff?text=%E2%99%AA",
            url: "https://open.spotify.com/",
            source: "favorite"
        };
        const LEETCODE_USERNAME = "YOUR_LEETCODE_USERNAME";
        const HACKERRANK_USERNAME = "YOUR_HACKERRANK_USERNAME";
        const HACKERRANK_PROXY = "https://api.allorigins.win/raw?url=";
        const PWA_INSTALL_DISMISSED_KEY = "skbInstallBannerDismissedV1";
        const CONTACT_SYNC_TAG = "contact-form-sync";
        const CHAT_PROXY_ENDPOINT = "/api/chat";
        const RESUME_DOWNLOAD_URL = "assets/resume.pdf";

        let leetcodeRingsAnimated = false;
        let pendingRingTargets = null;
        let deferredInstallPrompt = null;
        let installPromptCanShow = false;
        let swRegistration = null;
        const chatState = {
            open: false,
            streaming: false,
            history: [],
            showTyping: false
        };

        const fallbackGithubData = {
            contributionDailyCounts: Array.from({ length: 364 }, (_, idx) => {
                const wave = Math.sin(idx / 16) * 2.2 + Math.cos(idx / 9) * 1.6;
                return Math.max(0, Math.round(3 + wave));
            }),
            languageBytes: {
                JavaScript: 420000,
                Python: 310000,
                HTML: 170000,
                CSS: 145000,
                Java: 130000
            },
            topStarredRepos: [
                {
                    name: "Intelligent-Liver-Disease-Prediction-Suite",
                    description: "ML pipeline for liver disease risk analysis and model benchmarking.",
                    stargazers_count: 12,
                    forks_count: 4,
                    language: "Python",
                    html_url: "https://github.com/senthil-3698"
                },
                {
                    name: "IoT-Health-Monitoring-System",
                    description: "Arduino and cloud telemetry based health monitoring prototype.",
                    stargazers_count: 9,
                    forks_count: 2,
                    language: "C++",
                    html_url: "https://github.com/senthil-3698"
                },
                {
                    name: "Portfolio-UI-System",
                    description: "Interactive portfolio UI with advanced motion and theme systems.",
                    stargazers_count: 8,
                    forks_count: 3,
                    language: "JavaScript",
                    html_url: "https://github.com/senthil-3698"
                }
            ],
            lastActiveAt: new Date().toISOString()
        };

        function logEgg(message) {
            console.log(`[Easter Egg] ${message}`);
        }

        function detectDeviceType() {
            const ua = navigator.userAgent.toLowerCase();
            if (/ipad|tablet|(android(?!.*mobile))|kindle|silk/i.test(ua)) return "tablet";
            if (/mobile|iphone|ipod|android|blackberry|phone/i.test(ua)) return "mobile";
            return "desktop";
        }

        function getTimePartsForZone(timeZone) {
            const formatter = new Intl.DateTimeFormat("en-GB", {
                timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
                year: "numeric",
                month: "long",
                day: "2-digit",
                weekday: "long"
            });

            const parts = formatter.formatToParts(new Date());
            const pick = (type) => parts.find((part) => part.type === type)?.value || "00";
            const hour = Number(pick("hour"));
            const minute = Number(pick("minute"));
            const second = Number(pick("second"));

            return {
                hour,
                minute,
                second,
                timeText: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`,
                shortTimeText: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
                dateText: `${pick("weekday")}, ${pick("day")} ${pick("month")} ${pick("year")}`
            };
        }

        function setAnalogClockHands(hourEl, minEl, secEl, hour, minute, second) {
            if (!hourEl || !minEl || !secEl) return;
            const hourAngle = ((hour % 12) + minute / 60 + second / 3600) * 30;
            const minuteAngle = (minute + second / 60) * 6;
            const secondAngle = second * 6;
            hourEl.style.transform = `rotate(${hourAngle}deg)`;
            minEl.style.transform = `rotate(${minuteAngle}deg)`;
            secEl.style.transform = `rotate(${secondAngle}deg)`;
        }

        function updateAvailabilityWidget() {
            if (!availabilityIstTime || !availabilityDot || !availabilityStatusLabel || !availabilityIstDate) return;

            const ist = getTimePartsForZone("Asia/Kolkata");
            availabilityIstTime.textContent = `${ist.timeText} IST`;
            availabilityIstDate.textContent = ist.dateText;

            let stateClass = "sleeping";
            let stateLabel = "Sleeping 😴";
            if (ist.hour >= 9 && ist.hour < 22) {
                stateClass = "available";
                stateLabel = "Available for work";
            } else if (ist.hour >= 22 && ist.hour < 24) {
                stateClass = "winding";
                stateLabel = "Winding down";
            }

            availabilityDot.className = `availability-dot ${stateClass}`;
            availabilityStatusLabel.textContent = stateLabel;

            const utc = getTimePartsForZone("UTC");
            const use = getTimePartsForZone("America/New_York");
            const uk = getTimePartsForZone("Europe/London");

            setAnalogClockHands(clockUtcHour, clockUtcMin, clockUtcSec, utc.hour, utc.minute, utc.second);
            setAnalogClockHands(clockUseHour, clockUseMin, clockUseSec, use.hour, use.minute, use.second);
            setAnalogClockHands(clockUkHour, clockUkMin, clockUkSec, uk.hour, uk.minute, uk.second);

            if (clockUtcText) clockUtcText.textContent = utc.shortTimeText;
            if (clockUseText) clockUseText.textContent = use.shortTimeText;
            if (clockUkText) clockUkText.textContent = uk.shortTimeText;
        }

        function initAvailabilityWidget() {
            if (!availabilityIstTime || !availabilityDot || !availabilityStatusLabel) return;
            updateAvailabilityWidget();
            window.setInterval(updateAvailabilityWidget, 1000);
        }

        function initLogoFallbacks() {
            const logoImages = document.querySelectorAll("img[data-logo-fallback]");

            logoImages.forEach((logoImage) => {
                const fallbackId = logoImage.getAttribute("data-logo-fallback");
                if (!fallbackId) return;

                const fallbackBadge = document.getElementById(fallbackId);
                if (!fallbackBadge) return;

                const showFallback = () => {
                    logoImage.classList.add("is-hidden");
                    fallbackBadge.classList.add("is-visible");
                    fallbackBadge.setAttribute("aria-hidden", "false");
                };

                if (logoImage.complete && logoImage.naturalWidth === 0) {
                    showFallback();
                    return;
                }

                logoImage.addEventListener("error", showFallback, { once: true });
            });
        }

        function applySpotifyMarqueeIfNeeded() {
            if (!spotifyTrackName) return;
            spotifyTrackName.classList.remove("marquee-scroll");
            requestAnimationFrame(() => {
                const parent = spotifyTrackName.parentElement;
                if (!parent) return;
                if (spotifyTrackName.scrollWidth > parent.clientWidth + 8) {
                    spotifyTrackName.classList.add("marquee-scroll");
                }
            });
        }

        function setSpotifyWidgetState(track) {
            if (!spotifyWidget || !spotifyArt || !spotifyKicker || !spotifyTrackName || !spotifyArtistName) return;

            const source = track?.source || "favorite";
            const isPlaying = source === "now-playing";

            spotifyKicker.textContent = isPlaying
                ? "Currently listening"
                : source === "top-track"
                    ? "Top track"
                    : "Favorite track";

            spotifyTrackName.textContent = track?.title || SPOTIFY_FALLBACK_TRACK.title;
            spotifyArtistName.textContent = track?.artist || SPOTIFY_FALLBACK_TRACK.artist;
            spotifyArt.src = track?.albumArt || SPOTIFY_FALLBACK_TRACK.albumArt;
            spotifyArt.alt = `${spotifyTrackName.textContent} album art`;
            spotifyWidget.href = track?.url || SPOTIFY_FALLBACK_TRACK.url;

            applySpotifyMarqueeIfNeeded();
        }

        async function fetchSpotifyTrack() {
            const response = await fetch(SPOTIFY_PROXY_ENDPOINT, {
                headers: {
                    Accept: "application/json"
                }
            });
            if (!response.ok) {
                throw new Error(`Spotify proxy failed (${response.status})`);
            }

            const payload = await response.json();
            const track = payload?.track;
            if (!track?.title || !track?.artist) {
                throw new Error("Spotify payload missing track");
            }
            return track;
        }

        async function refreshSpotifyWidget() {
            try {
                const track = await fetchSpotifyTrack();
                setSpotifyWidgetState(track);
            } catch (error) {
                console.warn("Spotify widget fallback active:", error?.message || error);
                setSpotifyWidgetState(SPOTIFY_FALLBACK_TRACK);
            }
        }

        function initSpotifyWidget() {
            if (!spotifyWidget || !spotifyArt || !spotifyKicker || !spotifyTrackName || !spotifyArtistName) return;
            setSpotifyWidgetState(SPOTIFY_FALLBACK_TRACK);
            refreshSpotifyWidget();
            window.setInterval(refreshSpotifyWidget, SPOTIFY_REFRESH_INTERVAL);
        }

        function setCpSkeletonState(loading) {
            [lcSkeleton, hrSkeleton, streakSkeleton].forEach((node) => {
                if (!node) return;
                node.classList.toggle("hidden", !loading);
            });
            if (cpRefreshBtn) {
                cpRefreshBtn.classList.toggle("loading", loading);
                cpRefreshBtn.disabled = loading;
            }
        }

        function initRingGeometry(circle) {
            if (!circle) return 0;
            const radius = Number(circle.getAttribute("r") || 0);
            const circumference = 2 * Math.PI * radius;
            circle.style.strokeDasharray = `${circumference}`;
            circle.style.strokeDashoffset = `${circumference}`;
            return circumference;
        }

        function animateLeetcodeRings(targets) {
            if (!targets || !lcRingEasy || !lcRingMedium || !lcRingHard) return;

            const apply = () => {
                const easyCirc = initRingGeometry(lcRingEasy);
                const mediumCirc = initRingGeometry(lcRingMedium);
                const hardCirc = initRingGeometry(lcRingHard);

                requestAnimationFrame(() => {
                    lcRingEasy.style.strokeDashoffset = `${easyCirc * (1 - targets.easyPct / 100)}`;
                    lcRingMedium.style.strokeDashoffset = `${mediumCirc * (1 - targets.mediumPct / 100)}`;
                    lcRingHard.style.strokeDashoffset = `${hardCirc * (1 - targets.hardPct / 100)}`;
                });
            };

            if (leetcodeRingsAnimated) {
                apply();
                return;
            }

            if (!lcRingsSvg) {
                apply();
                leetcodeRingsAnimated = true;
                return;
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    apply();
                    leetcodeRingsAnimated = true;
                    observer.disconnect();
                });
            }, { threshold: 0.38 });

            observer.observe(lcRingsSvg);
        }

        async function fetchLeetcodeStats() {
            if (!LEETCODE_USERNAME || /^YOUR_LEETCODE_USERNAME$/i.test(LEETCODE_USERNAME)) {
                throw new Error("LeetCode username not configured");
            }

            const query = `
                query userProfile($username: String!) {
                  allQuestionsCount {
                    difficulty
                    count
                  }
                  matchedUser(username: $username) {
                    profile {
                      ranking
                    }
                    submitStatsGlobal {
                      acSubmissionNum {
                        difficulty
                        count
                        submissions
                      }
                    }
                  }
                }
            `;

            const response = await fetch("https://leetcode.com/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query,
                    variables: {
                        username: LEETCODE_USERNAME
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`LeetCode fetch failed (${response.status})`);
            }

            const payload = await response.json();
            const matchedUser = payload?.data?.matchedUser;
            const allQuestionsCount = Array.isArray(payload?.data?.allQuestionsCount) ? payload.data.allQuestionsCount : [];
            const acSubmissionNum = Array.isArray(matchedUser?.submitStatsGlobal?.acSubmissionNum)
                ? matchedUser.submitStatsGlobal.acSubmissionNum
                : [];

            const getDifficultyCount = (collection, difficulty, field = "count") => {
                const item = collection.find((entry) => entry?.difficulty === difficulty);
                return Number(item?.[field] || 0);
            };

            const easySolved = getDifficultyCount(acSubmissionNum, "Easy");
            const mediumSolved = getDifficultyCount(acSubmissionNum, "Medium");
            const hardSolved = getDifficultyCount(acSubmissionNum, "Hard");
            const totalSolved = getDifficultyCount(acSubmissionNum, "All");
            const totalSubmissions = getDifficultyCount(acSubmissionNum, "All", "submissions");

            const easyTotal = getDifficultyCount(allQuestionsCount, "Easy");
            const mediumTotal = getDifficultyCount(allQuestionsCount, "Medium");
            const hardTotal = getDifficultyCount(allQuestionsCount, "Hard");

            const acceptanceRate = totalSubmissions > 0 ? (totalSolved / totalSubmissions) * 100 : 0;

            return {
                totalSolved,
                easySolved,
                mediumSolved,
                hardSolved,
                easyTotal,
                mediumTotal,
                hardTotal,
                easyPct: easyTotal > 0 ? (easySolved / easyTotal) * 100 : 0,
                mediumPct: mediumTotal > 0 ? (mediumSolved / mediumTotal) * 100 : 0,
                hardPct: hardTotal > 0 ? (hardSolved / hardTotal) * 100 : 0,
                acceptanceRate,
                ranking: Number(matchedUser?.profile?.ranking || 0)
            };
        }

        function renderLeetcodeStats(stats) {
            if (lcTotalSolved) lcTotalSolved.textContent = String(stats.totalSolved || 0);
            if (lcEasyText) lcEasyText.textContent = `${stats.easySolved}/${stats.easyTotal || "-"}`;
            if (lcMediumText) lcMediumText.textContent = `${stats.mediumSolved}/${stats.mediumTotal || "-"}`;
            if (lcHardText) lcHardText.textContent = `${stats.hardSolved}/${stats.hardTotal || "-"}`;
            if (lcAcceptance) lcAcceptance.textContent = `${stats.acceptanceRate.toFixed(1)}%`;
            if (lcRanking) lcRanking.textContent = stats.ranking > 0 ? `#${stats.ranking.toLocaleString()}` : "--";

            pendingRingTargets = {
                easyPct: Math.max(0, Math.min(100, stats.easyPct)),
                mediumPct: Math.max(0, Math.min(100, stats.mediumPct)),
                hardPct: Math.max(0, Math.min(100, stats.hardPct))
            };
            animateLeetcodeRings(pendingRingTargets);
        }

        function fallbackLeetcodeStats() {
            return {
                totalSolved: 0,
                easySolved: 0,
                mediumSolved: 0,
                hardSolved: 0,
                easyTotal: 0,
                mediumTotal: 0,
                hardTotal: 0,
                easyPct: 0,
                mediumPct: 0,
                hardPct: 0,
                acceptanceRate: 0,
                ranking: 0
            };
        }

        async function fetchHackerRankBadgeUrls() {
            const fallback = [
                "https://hrcdn.net/fcore/assets/badges/problem-solving.svg",
                "https://hrcdn.net/fcore/assets/badges/python.svg",
                "https://hrcdn.net/fcore/assets/badges/sql.svg"
            ];

            if (!HACKERRANK_USERNAME || /^YOUR_HACKERRANK_USERNAME$/i.test(HACKERRANK_USERNAME)) {
                return fallback;
            }

            try {
                const profileUrl = `https://www.hackerrank.com/${encodeURIComponent(HACKERRANK_USERNAME)}`;
                const response = await fetch(`${HACKERRANK_PROXY}${encodeURIComponent(profileUrl)}`);
                if (!response.ok) return fallback;

                const html = await response.text();
                const found = Array.from(new Set((html.match(/https:\/\/hrcdn\.net\/fcore\/assets\/badges\/[A-Za-z0-9_-]+\.(?:svg|png)/g) || [])));
                return found.length ? found.slice(0, 6) : fallback;
            } catch (error) {
                void error;
                return fallback;
            }
        }

        function renderHackerRankBadges(urls) {
            if (!hrBadges) return;
            hrBadges.innerHTML = "";

            urls.slice(0, 6).forEach((url) => {
                const badge = document.createElement("div");
                badge.className = "hr-badge";
                const img = document.createElement("img");
                img.src = url;
                img.alt = "HackerRank badge";
                img.loading = "lazy";
                img.addEventListener("error", () => {
                    badge.remove();
                });
                badge.appendChild(img);
                hrBadges.appendChild(badge);
            });
        }

        function setGitHubStreakImage() {
            if (!githubStreakImg) return;
            const url = `https://github-readme-streak-stats.herokuapp.com?user=${encodeURIComponent(GITHUB_USER)}&background=0D1226&ring=F5A623&fire=F5A623&currStreakLabel=EDF2FF&sideLabels=EDF2FF&currStreakNum=FFFFFF&sideNums=FFFFFF&dates=90D6FF&hide_border=true`;
            githubStreakImg.src = url;
        }

        async function refreshCompetitiveStats() {
            setCpSkeletonState(true);
            try {
                const [lcStats, hrUrls] = await Promise.all([
                    fetchLeetcodeStats().catch(() => fallbackLeetcodeStats()),
                    fetchHackerRankBadgeUrls().catch(() => [])
                ]);

                renderLeetcodeStats(lcStats);
                renderHackerRankBadges(hrUrls);
                setGitHubStreakImage();
            } finally {
                setCpSkeletonState(false);
            }
        }

        function initCompetitiveStats() {
            if (!cpRefreshBtn) return;
            initRingGeometry(lcRingEasy);
            initRingGeometry(lcRingMedium);
            initRingGeometry(lcRingHard);

            cpRefreshBtn.addEventListener("click", () => {
                refreshCompetitiveStats();
            });

            if (githubStreakImg) {
                githubStreakImg.addEventListener("load", () => {
                    streakSkeleton?.classList.add("hidden");
                });
                githubStreakImg.addEventListener("error", () => {
                    streakSkeleton?.classList.add("hidden");
                });
            }

            refreshCompetitiveStats();
        }

        function isEmailJsConfigured() {
            return (
                typeof window.emailjs !== "undefined" &&
                !EMAILJS_SERVICE_ID.startsWith("YOUR_") &&
                !EMAILJS_TEMPLATE_ID.startsWith("YOUR_") &&
                !EMAILJS_PUBLIC_KEY.startsWith("YOUR_")
            );
        }

        function canInstallAsPwa() {
            const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
            return !standalone;
        }

        function showInstallBanner() {
            if (!pwaInstallBanner || !deferredInstallPrompt || !installPromptCanShow || !canInstallAsPwa()) return;
            pwaInstallBanner.classList.add("show");
            pwaInstallBanner.setAttribute("aria-hidden", "false");
        }

        function hideInstallBanner(persistDismiss = false) {
            if (!pwaInstallBanner) return;
            pwaInstallBanner.classList.remove("show");
            pwaInstallBanner.setAttribute("aria-hidden", "true");
            if (persistDismiss) {
                try {
                    localStorage.setItem(PWA_INSTALL_DISMISSED_KEY, "1");
                } catch (error) {
                    void error;
                }
            }
        }

        function queueContactPayloadForSync(payload) {
            const message = {
                type: "QUEUE_CONTACT_MESSAGE",
                payload: {
                    ...payload,
                    serviceId: EMAILJS_SERVICE_ID,
                    templateId: EMAILJS_TEMPLATE_ID,
                    publicKey: EMAILJS_PUBLIC_KEY
                }
            };

            const postToWorker = (registration) => {
                const target = navigator.serviceWorker.controller || registration?.active || registration?.waiting;
                if (target) {
                    target.postMessage(message);
                }
            };

            if (swRegistration) {
                postToWorker(swRegistration);
                if (swRegistration.sync) {
                    swRegistration.sync.register(CONTACT_SYNC_TAG).catch(() => {
                        void 0;
                    });
                }
                return;
            }

            navigator.serviceWorker.ready
                .then((registration) => {
                    swRegistration = registration;
                    postToWorker(registration);
                    if (registration.sync) {
                        return registration.sync.register(CONTACT_SYNC_TAG);
                    }
                    return Promise.resolve();
                })
                .catch(() => {
                    void 0;
                });
        }

        function scheduleInstallWelcomeNotification() {
            if (!("Notification" in window)) return;

            const showUsingSw = () => {
                const registrationPromise = swRegistration
                    ? Promise.resolve(swRegistration)
                    : navigator.serviceWorker.ready;

                registrationPromise
                    .then((registration) => {
                        swRegistration = registration;
                        if (registration?.active) {
                            registration.active.postMessage({
                                type: "SHOW_WELCOME_NOTIFICATION",
                                title: "Portfolio Installed",
                                body: "Thanks for installing Senthil's portfolio! \ud83d\udc4b"
                            });
                        }
                    })
                    .catch(() => {
                        void 0;
                    });
            };

            setTimeout(() => {
                if (Notification.permission === "granted") {
                    showUsingSw();
                    return;
                }

                if (Notification.permission === "default") {
                    Notification.requestPermission().then((permission) => {
                        if (permission === "granted") {
                            showUsingSw();
                        }
                    });
                }
            }, 5000);
        }

        function initCustomInstallPrompt() {
            if (!pwaInstallBanner || !pwaInstallNow || !pwaInstallDismiss) return;

            let dismissed = false;
            try {
                dismissed = localStorage.getItem(PWA_INSTALL_DISMISSED_KEY) === "1";
            } catch (error) {
                void error;
            }

            if (dismissed || !canInstallAsPwa()) {
                hideInstallBanner(false);
                return;
            }

            const maybeUnlockInstallPrompt = () => {
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
                if (ratio >= 0.6) {
                    installPromptCanShow = true;
                    showInstallBanner();
                    window.removeEventListener("scroll", maybeUnlockInstallPrompt);
                }
            };

            window.addEventListener("beforeinstallprompt", (event) => {
                event.preventDefault();
                deferredInstallPrompt = event;
                showInstallBanner();
            });

            window.addEventListener("appinstalled", () => {
                deferredInstallPrompt = null;
                hideInstallBanner(true);
                scheduleInstallWelcomeNotification();
            });

            window.addEventListener("scroll", maybeUnlockInstallPrompt, { passive: true });
            maybeUnlockInstallPrompt();

            pwaInstallNow.addEventListener("click", async () => {
                if (!deferredInstallPrompt) return;
                deferredInstallPrompt.prompt();
                try {
                    await deferredInstallPrompt.userChoice;
                } catch (error) {
                    void error;
                }
                deferredInstallPrompt = null;
                hideInstallBanner(true);
            });

            pwaInstallDismiss.addEventListener("click", () => {
                hideInstallBanner(true);
            });
        }

        function setChatOpen(nextOpen) {
            if (!chatAssistantPanel || !chatAssistantToggle) return;
            chatState.open = nextOpen;
            chatAssistantPanel.classList.toggle("open", nextOpen);
            chatAssistantPanel.setAttribute("aria-hidden", nextOpen ? "false" : "true");
            chatAssistantToggle.setAttribute("aria-expanded", nextOpen ? "true" : "false");
            if (nextOpen) {
                setTimeout(() => {
                    chatInput?.focus();
                }, 40);
            }
        }

        function renderChatSuggestions() {
            if (!chatSuggestions) return;
            const shouldShow = chatState.history.length === 0;
            chatSuggestions.style.display = shouldShow ? "flex" : "none";
        }

        function appendTypingIndicator(container) {
            const row = document.createElement("div");
            row.className = "chat-row assistant";
            const bubble = document.createElement("div");
            bubble.className = "chat-bubble";

            const dots = document.createElement("span");
            dots.className = "chat-typing";
            for (let i = 0; i < 3; i += 1) {
                const dot = document.createElement("span");
                dot.className = "chat-typing-dot";
                dots.appendChild(dot);
            }

            bubble.appendChild(dots);
            row.appendChild(bubble);
            container.appendChild(row);
        }

        function renderChatLog() {
            if (!chatLog) return;
            chatLog.innerHTML = "";

            chatState.history.forEach((message) => {
                const row = document.createElement("div");
                row.className = `chat-row ${message.role === "user" ? "user" : "assistant"}`;
                const bubble = document.createElement("div");
                bubble.className = "chat-bubble";
                bubble.textContent = message.content;
                row.appendChild(bubble);
                chatLog.appendChild(row);
            });

            if (chatState.showTyping) {
                appendTypingIndicator(chatLog);
            }

            chatLog.scrollTop = chatLog.scrollHeight;
            renderChatSuggestions();
        }

        function getChatContextMessages() {
            return chatState.history
                .filter((message) => message.role === "user" || message.role === "assistant")
                .slice(-12)
                .map((message) => ({
                    role: message.role,
                    content: message.content
                }));
        }

        async function streamAssistantReply() {
            if (chatState.streaming) return;
            const text = chatInput?.value?.trim() || "";
            if (!text) return;

            chatState.history.push({ role: "user", content: text });
            if (chatInput) chatInput.value = "";
            chatState.streaming = true;
            chatState.showTyping = true;
            renderChatLog();

            const assistantMessage = { role: "assistant", content: "" };
            chatState.history.push(assistantMessage);

            try {
                const response = await fetch(CHAT_PROXY_ENDPOINT, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        messages: getChatContextMessages()
                    })
                });

                if (!response.ok || !response.body) {
                    throw new Error(`Chat request failed (${response.status})`);
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let buffer = "";

                while (true) {
                    const { value, done } = await reader.read();
                    if (done) break;

                    buffer += decoder.decode(value, { stream: true });
                    const lines = buffer.split("\n");
                    buffer = lines.pop() || "";

                    for (const rawLine of lines) {
                        const line = rawLine.trim();
                        if (!line.startsWith("data:")) continue;

                        const payload = line.slice(5).trim();
                        if (!payload || payload === "[DONE]") continue;

                        let packet;
                        try {
                            packet = JSON.parse(payload);
                        } catch (error) {
                            void error;
                            continue;
                        }

                        if (packet.type === "content_block_delta" && packet.delta?.text) {
                            assistantMessage.content += packet.delta.text;
                            chatState.showTyping = true;
                            renderChatLog();
                        }

                        if (packet.type === "error") {
                            throw new Error(packet.error?.message || "Claude streaming error");
                        }
                    }
                }

                if (!assistantMessage.content.trim()) {
                    assistantMessage.content = "I can help with Senthil's portfolio details, but I could not generate a response right now.";
                }
            } catch (error) {
                void error;
                assistantMessage.content = "I ran into a temporary issue. Please try again in a moment.";
            } finally {
                chatState.streaming = false;
                chatState.showTyping = false;
                renderChatLog();
            }
        }

        function initChatAssistant() {
            if (!chatAssistantToggle || !chatAssistantPanel || !chatSendBtn || !chatInput || !chatLog) return;

            renderChatLog();

            chatAssistantToggle.addEventListener("click", () => {
                setChatOpen(!chatState.open);
            });

            chatMinimizeBtn?.addEventListener("click", () => {
                setChatOpen(false);
            });

            chatClearBtn?.addEventListener("click", () => {
                if (chatState.streaming) return;
                chatState.history = [];
                chatState.showTyping = false;
                renderChatLog();
                chatInput.focus();
            });

            chatSendBtn.addEventListener("click", () => {
                streamAssistantReply();
            });

            chatInput.addEventListener("keydown", (event) => {
                if (event.key !== "Enter") return;
                event.preventDefault();
                streamAssistantReply();
            });

            if (chatSuggestions) {
                chatSuggestions.addEventListener("click", (event) => {
                    const chip = event.target.closest("[data-chat-chip]");
                    if (!chip || chatState.streaming) return;
                    const question = chip.getAttribute("data-chat-chip") || "";
                    if (!question) return;
                    chatInput.value = question;
                    streamAssistantReply();
                });
            }
        }

        function getReferrerSource(referrer) {
            if (!referrer) return "direct";
            try {
                const url = new URL(referrer);
                return url.hostname.replace(/^www\./, "") || "direct";
            } catch (error) {
                void error;
                return "unknown";
            }
        }

        function loadAnalyticsVisits() {
            try {
                const raw = localStorage.getItem(ANALYTICS_VISITS_KEY);
                if (!raw) return [];
                const parsed = JSON.parse(raw);
                if (!Array.isArray(parsed)) return [];
                return parsed;
            } catch (error) {
                void error;
                return [];
            }
        }

        function saveAnalyticsVisits(visits) {
            try {
                localStorage.setItem(ANALYTICS_VISITS_KEY, JSON.stringify(visits.slice(-1000)));
            } catch (error) {
                void error;
            }
        }

        function incrementTotalVisitCounter() {
            let next = 1;
            try {
                const current = Number(localStorage.getItem(ANALYTICS_TOTAL_KEY) || "0");
                next = Number.isFinite(current) ? current + 1 : 1;
                localStorage.setItem(ANALYTICS_TOTAL_KEY, String(next));
            } catch (error) {
                void error;
            }
            return next;
        }

        function getTotalVisitCounter() {
            try {
                const value = Number(localStorage.getItem(ANALYTICS_TOTAL_KEY) || "0");
                return Number.isFinite(value) ? value : 0;
            } catch (error) {
                void error;
                return 0;
            }
        }

        function getTodayKey(date = new Date()) {
            return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
        }

        function prettySectionName(sectionId) {
            return String(sectionId || "unknown")
                .replace(/[-_]/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase());
        }

        function toHex(buffer) {
            return Array.from(new Uint8Array(buffer)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
        }

        async function sha256Hex(input) {
            const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
            return toHex(digest);
        }

        function addOrUpdateVisitRecord(basePayload) {
            const visits = loadAnalyticsVisits();
            const existingIndex = visits.findIndex((visit) => visit.sessionId === basePayload.sessionId);
            if (existingIndex >= 0) {
                visits[existingIndex] = { ...visits[existingIndex], ...basePayload };
            } else {
                visits.push(basePayload);
            }
            saveAnalyticsVisits(visits);
        }

        function getBlogCache() {
            try {
                const raw = localStorage.getItem(BLOG_CACHE_KEY);
                if (!raw) return null;
                const parsed = JSON.parse(raw);
                if (!parsed || !parsed.timestamp || !Array.isArray(parsed.items)) return null;
                if (Date.now() - parsed.timestamp > BLOG_CACHE_TTL) return null;
                return parsed.items;
            } catch (error) {
                void error;
                return null;
            }
        }

        function setBlogCache(items) {
            try {
                localStorage.setItem(BLOG_CACHE_KEY, JSON.stringify({
                    timestamp: Date.now(),
                    items
                }));
            } catch (error) {
                void error;
            }
        }

        function formatBlogDate(value) {
            if (!value) return "Date unavailable";
            const parsed = new Date(value);
            if (Number.isNaN(parsed.getTime())) return "Date unavailable";
            return parsed.toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric"
            });
        }

        function extractTwoSentences(text) {
            const normalized = String(text || "").replace(/\s+/g, " ").trim();
            if (!normalized) return "More details available in the full article.";
            const sentences = normalized.split(/(?<=[.!?])\s+/).filter(Boolean);
            if (sentences.length >= 2) return `${sentences[0]} ${sentences[1]}`;
            return sentences[0];
        }

        function normalizeDevtoArticle(article) {
            const tags = Array.isArray(article?.tag_list)
                ? article.tag_list
                : String(article?.tag_list || "").split(",").map((tag) => tag.trim()).filter(Boolean);

            return {
                title: article?.title || "Untitled article",
                url: article?.url || "#",
                image: article?.cover_image || "https://placehold.co/1200x700/0f172a/edf2ff?text=Article",
                excerpt: extractTwoSentences(article?.description || ""),
                dateLabel: formatBlogDate(article?.published_timestamp || article?.published_at),
                readingTimeLabel: `${Math.max(1, Number(article?.reading_time_minutes) || 3)} min read`,
                reactionLabel: `${Math.max(0, Number(article?.positive_reactions_count) || 0)} reactions`,
                tags: tags.slice(0, 4)
            };
        }

        async function fetchDevtoArticles() {
            const endpoint = `https://dev.to/api/articles?username=${encodeURIComponent(DEVTO_USERNAME)}&per_page=3`;
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`Dev.to API failed (${response.status})`);
            }

            const payload = await response.json();
            if (!Array.isArray(payload) || !payload.length) {
                throw new Error("Dev.to API returned no articles");
            }

            return payload.slice(0, 3).map(normalizeDevtoArticle);
        }

        async function fetchOgMetadataForUrl(url) {
            const response = await fetch(`${BLOG_OG_PROXY}${encodeURIComponent(url)}`);
            if (!response.ok) {
                throw new Error(`OG fetch failed (${response.status})`);
            }

            const html = await response.text();
            const doc = new DOMParser().parseFromString(html, "text/html");

            const metaContent = (selector) => doc.querySelector(selector)?.getAttribute("content")?.trim() || "";
            const title = metaContent('meta[property="og:title"]') || doc.querySelector("title")?.textContent?.trim() || "External article";
            const image = metaContent('meta[property="og:image"]') || "https://placehold.co/1200x700/0f172a/edf2ff?text=External+Article";
            const description = metaContent('meta[property="og:description"]') || metaContent('meta[name="description"]') || "Read this article for more details.";

            return {
                title,
                url,
                image,
                excerpt: extractTwoSentences(description),
                dateLabel: "Curated pick",
                readingTimeLabel: "3 min read",
                reactionLabel: "External",
                tags: ["article", "curated"]
            };
        }

        async function fetchFallbackArticles() {
            const items = await Promise.all(BLOG_FALLBACK_URLS.slice(0, 3).map((url) => fetchOgMetadataForUrl(url)));
            return items;
        }

        function setBlogSkeletonVisible(visible) {
            if (blogSkeletonGrid) {
                blogSkeletonGrid.classList.toggle("show", visible);
            }
            if (blogBento) {
                blogBento.hidden = visible;
            }
        }

        function createBlogCard(article, index) {
            const card = document.createElement("article");
            card.className = `project-card blog-card ${index === 0 ? "project-main" : "project-mini"}`;

            const coverWrap = document.createElement("div");
            coverWrap.className = "blog-cover-wrap";
            const cover = document.createElement("img");
            cover.src = article.image;
            cover.alt = `${article.title} cover image`;
            cover.loading = "lazy";
            coverWrap.appendChild(cover);

            const date = document.createElement("p");
            date.className = "blog-date";
            date.textContent = article.dateLabel;

            const heading = document.createElement("h3");
            const headingLink = document.createElement("a");
            headingLink.href = article.url;
            headingLink.target = "_blank";
            headingLink.rel = "noopener noreferrer";
            headingLink.textContent = article.title;
            heading.appendChild(headingLink);

            const meta = document.createElement("div");
            meta.className = "blog-meta";
            [article.readingTimeLabel, article.reactionLabel].forEach((text) => {
                const chip = document.createElement("span");
                chip.textContent = text;
                meta.appendChild(chip);
            });

            const tags = document.createElement("div");
            tags.className = "blog-tags";
            article.tags.slice(0, 4).forEach((tag) => {
                const chip = document.createElement("span");
                chip.className = "blog-tag-chip";
                chip.textContent = `#${tag}`;
                tags.appendChild(chip);
            });

            const readLink = document.createElement("a");
            readLink.className = "blog-read-link";
            readLink.href = article.url;
            readLink.target = "_blank";
            readLink.rel = "noopener noreferrer";
            readLink.textContent = "Read article ->";

            const hoverExcerpt = document.createElement("p");
            hoverExcerpt.className = "blog-hover-excerpt";
            hoverExcerpt.textContent = article.excerpt;

            card.appendChild(coverWrap);
            card.appendChild(date);
            card.appendChild(heading);
            card.appendChild(meta);
            card.appendChild(tags);
            card.appendChild(readLink);
            card.appendChild(hoverExcerpt);

            return card;
        }

        function renderBlogCards(items) {
            if (!blogBento) return;
            blogBento.innerHTML = "";
            items.slice(0, 3).forEach((item, index) => {
                blogBento.appendChild(createBlogCard(item, index));
            });
            setBlogSkeletonVisible(false);
        }

        async function initBlogFeed() {
            if (!blogBento) return;

            const hasDevtoUser = DEVTO_USERNAME && !/^YOUR_USERNAME$/i.test(DEVTO_USERNAME);
            if (blogWriteCta) {
                blogWriteCta.href = hasDevtoUser ? `https://dev.to/${DEVTO_USERNAME}` : "https://dev.to/";
            }

            const cached = getBlogCache();
            if (cached?.length) {
                renderBlogCards(cached);
                return;
            }

            try {
                let items;
                if (hasDevtoUser) {
                    items = await fetchDevtoArticles();
                } else {
                    items = await fetchFallbackArticles();
                }
                setBlogCache(items);
                renderBlogCards(items);
            } catch (error) {
                console.warn("Blog feed unavailable:", error?.message || error);
                setBlogSkeletonVisible(true);
            }
        }

        const analyticsTime = {
            currentSectionId: "home",
            currentSectionStartedAt: performance.now(),
            sectionDurationsMs: {},
            sectionVisibilityMap: new Map(),
            initialized: false
        };

        function flushCurrentSectionTime(now = performance.now()) {
            const sectionId = analyticsTime.currentSectionId || "home";
            const elapsed = Math.max(0, now - analyticsTime.currentSectionStartedAt);
            analyticsTime.sectionDurationsMs[sectionId] = (analyticsTime.sectionDurationsMs[sectionId] || 0) + elapsed;
            analyticsTime.currentSectionStartedAt = now;
        }

        function resolveMostVisibleSectionId() {
            let bestId = analyticsTime.currentSectionId;
            let bestRatio = -1;
            analyticsTime.sectionVisibilityMap.forEach((ratio, id) => {
                if (ratio > bestRatio) {
                    bestRatio = ratio;
                    bestId = id;
                }
            });
            return bestId || "home";
        }

        function initSectionTimeTracking() {
            if (analyticsTime.initialized || !sections.length) return;
            analyticsTime.initialized = true;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (!id) return;
                    if (entry.isIntersecting) {
                        analyticsTime.sectionVisibilityMap.set(id, entry.intersectionRatio);
                    } else {
                        analyticsTime.sectionVisibilityMap.delete(id);
                    }
                });

                const nextSectionId = resolveMostVisibleSectionId();
                if (nextSectionId !== analyticsTime.currentSectionId) {
                    flushCurrentSectionTime(performance.now());
                    analyticsTime.currentSectionId = nextSectionId;
                }
            }, { threshold: [0.15, 0.35, 0.6, 0.8] });

            sections.forEach((section) => observer.observe(section));
        }

        function getMostViewedSectionFromDurations(sectionDurationsMs) {
            const entries = Object.entries(sectionDurationsMs || {});
            if (!entries.length) return "home";
            entries.sort((a, b) => b[1] - a[1]);
            return entries[0][0];
        }

        function getAnalyticsSummary() {
            const visits = loadAnalyticsVisits();
            const totalVisits = getTotalVisitCounter();
            const todayKey = getTodayKey();
            const todayVisits = visits.filter((visit) => visit.dayKey === todayKey).length;

            const referrerCounts = {};
            const deviceCounts = { mobile: 0, tablet: 0, desktop: 0 };
            const sectionCounts = {};
            let totalDurationSec = 0;
            let durationSamples = 0;

            visits.forEach((visit) => {
                const ref = visit.referrerSource || "direct";
                referrerCounts[ref] = (referrerCounts[ref] || 0) + 1;

                const device = visit.deviceType || "desktop";
                deviceCounts[device] = (deviceCounts[device] || 0) + 1;

                const section = visit.mostViewedSection || "home";
                sectionCounts[section] = (sectionCounts[section] || 0) + 1;

                if (Number.isFinite(visit.durationSec) && visit.durationSec > 0) {
                    totalDurationSec += visit.durationSec;
                    durationSamples += 1;
                }
            });

            const referrerSorted = Object.entries(referrerCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
            const sectionSorted = Object.entries(sectionCounts).sort((a, b) => b[1] - a[1]);
            const mostViewedSection = sectionSorted[0]?.[0] || "home";
            const avgTimeSec = durationSamples ? Math.round(totalDurationSec / durationSamples) : 0;

            return {
                totalVisits,
                todayVisits,
                avgTimeSec,
                mostViewedSection,
                referrerSorted,
                sectionSorted: sectionSorted.slice(0, 6),
                deviceSorted: Object.entries(deviceCounts).sort((a, b) => b[1] - a[1])
            };
        }

        function renderStatsBarRows(container, rows, formatter = (value) => String(value)) {
            if (!container) return;
            container.innerHTML = "";
            if (!rows.length) {
                const empty = document.createElement("p");
                empty.className = "stats-sub";
                empty.textContent = "No data yet.";
                container.appendChild(empty);
                return;
            }

            const maxValue = Math.max(1, ...rows.map(([, value]) => value));
            rows.forEach(([name, value], index) => {
                const row = document.createElement("div");
                row.className = "stats-bar-row";

                const nameNode = document.createElement("span");
                nameNode.className = "name";
                nameNode.textContent = name;

                const track = document.createElement("div");
                track.className = "stats-bar-track";
                const fill = document.createElement("div");
                fill.className = "stats-bar-fill";
                track.appendChild(fill);

                const valueNode = document.createElement("span");
                valueNode.className = "value";
                valueNode.textContent = formatter(value);

                row.appendChild(nameNode);
                row.appendChild(track);
                row.appendChild(valueNode);
                container.appendChild(row);

                const widthPct = Math.max(4, Math.round((value / maxValue) * 100));
                setTimeout(() => {
                    fill.style.width = `${widthPct}%`;
                }, 40 + index * 55);
            });
        }

        function renderStatsDashboard() {
            const summary = getAnalyticsSummary();
            if (statsTotalVisits) statsTotalVisits.textContent = String(summary.totalVisits);
            if (statsTodayVisits) statsTodayVisits.textContent = String(summary.todayVisits);
            if (statsAvgTime) statsAvgTime.textContent = `${summary.avgTimeSec}s`;
            if (statsMostViewedSection) statsMostViewedSection.textContent = prettySectionName(summary.mostViewedSection);

            renderStatsBarRows(statsReferrerBars, summary.referrerSorted, (value) => `${value}`);
            renderStatsBarRows(
                statsSectionBars,
                summary.sectionSorted.map(([name, value]) => [prettySectionName(name), value]),
                (value) => `${value}`
            );
            renderStatsBarRows(
                statsDeviceBars,
                summary.deviceSorted.map(([name, value]) => [prettySectionName(name), value]),
                (value) => `${value}`
            );
        }

        function updatePublicVisitBadge() {
            if (!publicVisitBadge) return;
            if (window.location.hostname && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
                publicVisitBadge.src = "https://hits.sh/senthil-3698.github.io/portfolio.html.svg?style=flat-square&label=visits&color=F5A623";
            } else {
                publicVisitBadge.src = "https://hits.sh/local-preview-portfolio.svg?style=flat-square&label=visits&color=F5A623";
            }
        }

        function drawStatsSnapshotPng() {
            const summary = getAnalyticsSummary();
            const canvas = document.createElement("canvas");
            const width = 1200;
            const height = 760;
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            ctx.fillStyle = "#050A18";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#F5A623";
            ctx.font = "bold 46px Arial";
            ctx.fillText("SKB Visitor Analytics", 60, 78);

            ctx.fillStyle = "#EDF2FF";
            ctx.font = "24px Arial";
            ctx.fillText(`Total Visits: ${summary.totalVisits}`, 60, 134);
            ctx.fillText(`Today's Visits: ${summary.todayVisits}`, 60, 172);
            ctx.fillText(`Avg Time On Page: ${summary.avgTimeSec}s`, 60, 210);
            ctx.fillText(`Most Viewed Section: ${prettySectionName(summary.mostViewedSection)}`, 60, 248);

            const groups = [
                {
                    title: "Top Referrers",
                    rows: summary.referrerSorted
                },
                {
                    title: "Most Viewed Sections",
                    rows: summary.sectionSorted.map(([name, value]) => [prettySectionName(name), value])
                },
                {
                    title: "Device Breakdown",
                    rows: summary.deviceSorted.map(([name, value]) => [prettySectionName(name), value])
                }
            ];

            let y = 305;
            groups.forEach((group) => {
                ctx.fillStyle = "#EDF2FF";
                ctx.font = "bold 24px Arial";
                ctx.fillText(group.title, 60, y);
                y += 18;

                const maxValue = Math.max(1, ...group.rows.map(([, value]) => value || 0));
                group.rows.slice(0, 5).forEach(([name, value]) => {
                    y += 34;
                    const barWidth = Math.round((Math.max(0, value) / maxValue) * 620);

                    ctx.fillStyle = "#9fb0d0";
                    ctx.font = "18px Arial";
                    ctx.fillText(String(name), 60, y);

                    ctx.fillStyle = "rgba(237, 242, 255, 0.15)";
                    ctx.fillRect(360, y - 16, 620, 14);

                    ctx.fillStyle = "#F5A623";
                    ctx.fillRect(360, y - 16, barWidth, 14);

                    ctx.fillStyle = "#EDF2FF";
                    ctx.fillText(String(value), 1000, y);
                });

                y += 24;
            });

            const anchor = document.createElement("a");
            anchor.href = canvas.toDataURL("image/png");
            anchor.download = `skb-analytics-${Date.now()}.png`;
            anchor.click();
        }

        function closeStatsOverlay() {
            if (!statsOverlay) return;
            statsOverlay.classList.remove("open");
            statsOverlay.setAttribute("aria-hidden", "true");
            if (window.location.hash === "#stats") {
                history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
            }
        }

        function openStatsOverlay() {
            if (!statsOverlay || !statsLockPanel || !statsDashboard) return;
            statsOverlay.classList.add("open");
            statsOverlay.setAttribute("aria-hidden", "false");
            statsLockPanel.hidden = false;
            statsDashboard.hidden = true;
            if (statsPasswordInput) statsPasswordInput.value = "";
            if (statsLockError) statsLockError.textContent = "";
            statsPasswordInput?.focus();
        }

        function initStatsRouteHandlers() {
            if (!statsOverlay) return;

            const syncRoute = () => {
                if (window.location.hash === "#stats") {
                    openStatsOverlay();
                } else {
                    closeStatsOverlay();
                }
            };

            window.addEventListener("hashchange", syncRoute);
            syncRoute();

            statsCloseBtn?.addEventListener("click", closeStatsOverlay);
            statsOverlay.addEventListener("click", (event) => {
                if (event.target === statsOverlay) closeStatsOverlay();
            });

            statsUnlockBtn?.addEventListener("click", async () => {
                if (!statsPasswordInput || !statsLockPanel || !statsDashboard || !statsLockError) return;
                const value = statsPasswordInput.value.trim();
                if (!value) {
                    statsLockError.textContent = "Password required.";
                    return;
                }

                try {
                    const hash = await sha256Hex(value);
                    if (hash !== STATS_PASSWORD_HASH) {
                        statsLockError.textContent = "Incorrect password.";
                        return;
                    }
                } catch (error) {
                    void error;
                    statsLockError.textContent = "Hash verification failed.";
                    return;
                }

                statsLockError.textContent = "";
                statsLockPanel.hidden = true;
                statsDashboard.hidden = false;
                renderStatsDashboard();
            });

            statsPasswordInput?.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    statsUnlockBtn?.click();
                }
            });

            statsShareBtn?.addEventListener("click", drawStatsSnapshotPng);
        }

        function initAnalyticsSession() {
            const startedAt = Date.now();
            let finalized = false;
            const baseVisit = {
                sessionId: SESSION_ID,
                timestamp: new Date(startedAt).toISOString(),
                dayKey: getTodayKey(new Date(startedAt)),
                referrer: document.referrer || "",
                referrerSource: getReferrerSource(document.referrer || ""),
                userAgent: navigator.userAgent,
                deviceType: detectDeviceType(),
                mostViewedSection: "home",
                sectionDurationsSec: {},
                durationSec: 0
            };

            incrementTotalVisitCounter();
            addOrUpdateVisitRecord(baseVisit);
            updatePublicVisitBadge();
            initSectionTimeTracking();

            const finalizeVisit = () => {
                if (finalized) return;
                finalized = true;
                flushCurrentSectionTime(performance.now());
                const durationsMs = analyticsTime.sectionDurationsMs;
                const sectionDurationsSec = Object.fromEntries(
                    Object.entries(durationsMs).map(([section, ms]) => [section, Math.round(ms / 1000)])
                );
                const mostViewedSection = getMostViewedSectionFromDurations(durationsMs);
                const durationSec = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

                addOrUpdateVisitRecord({
                    ...baseVisit,
                    durationSec,
                    mostViewedSection,
                    sectionDurationsSec
                });
            };

            window.addEventListener("pagehide", finalizeVisit, { once: true });
            window.addEventListener("beforeunload", finalizeVisit, { once: true });
        }

        function getGithubCache() {
            try {
                const raw = sessionStorage.getItem(GITHUB_CACHE_KEY);
                if (!raw) return null;
                const parsed = JSON.parse(raw);
                if (!parsed || !parsed.timestamp || !parsed.data) return null;
                if (Date.now() - parsed.timestamp > GITHUB_CACHE_TTL) return null;
                return parsed.data;
            } catch (error) {
                void error;
                return null;
            }
        }

        function setGithubCache(data) {
            try {
                sessionStorage.setItem(GITHUB_CACHE_KEY, JSON.stringify({
                    timestamp: Date.now(),
                    data
                }));
            } catch (error) {
                void error;
            }
        }

        async function fetchGithubJson(url) {
            const response = await fetch(url, {
                headers: {
                    Accept: "application/vnd.github+json"
                }
            });

            if (!response.ok) {
                let message = `GitHub request failed (${response.status})`;
                try {
                    const errorBody = await response.json();
                    if (errorBody?.message) message = errorBody.message;
                } catch (error) {
                    void error;
                }

                const requestError = new Error(message);
                requestError.status = response.status;
                requestError.rateLimited = response.status === 403 && (
                    response.headers.get("x-ratelimit-remaining") === "0" ||
                    /rate limit/i.test(message)
                );
                throw requestError;
            }

            return response.json();
        }

        function buildContributionSeries(events) {
            const map = new Map();
            const now = new Date();
            const start = new Date(now);
            start.setDate(now.getDate() - 363);

            events
                .filter((event) => event.type === "PushEvent")
                .forEach((event) => {
                    const dateKey = new Date(event.created_at).toISOString().slice(0, 10);
                    const commits = Number(event.payload?.size) || 1;
                    map.set(dateKey, (map.get(dateKey) || 0) + commits);
                });

            const daily = [];
            for (let i = 0; i < 364; i += 1) {
                const day = new Date(start);
                day.setDate(start.getDate() + i);
                const key = day.toISOString().slice(0, 10);
                daily.push(map.get(key) || 0);
            }
            return daily;
        }

        function drawContributionHeatmap(dailyCounts) {
            if (!githubHeatmapCanvas) return;
            const ctx = githubHeatmapCanvas.getContext("2d");
            if (!ctx) return;

            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const width = githubHeatmapCanvas.clientWidth || 780;
            const height = 140;
            githubHeatmapCanvas.width = Math.floor(width * dpr);
            githubHeatmapCanvas.height = Math.floor(height * dpr);
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            ctx.clearRect(0, 0, width, height);

            const cell = Math.max(6, Math.floor((width - 40) / 53) - 1);
            const gap = 2;
            const maxCount = Math.max(1, ...dailyCounts);

            for (let i = 0; i < dailyCounts.length; i += 1) {
                const week = Math.floor(i / 7);
                const day = i % 7;
                const x = 20 + week * (cell + gap);
                const y = 10 + day * (cell + gap);

                const value = dailyCounts[i];
                const intensity = value / maxCount;
                let color = "rgba(245, 166, 35, 0.08)";
                if (intensity > 0.75) color = "rgba(245, 166, 35, 0.92)";
                else if (intensity > 0.5) color = "rgba(245, 166, 35, 0.72)";
                else if (intensity > 0.25) color = "rgba(245, 166, 35, 0.48)";
                else if (intensity > 0.05) color = "rgba(245, 166, 35, 0.26)";

                ctx.fillStyle = color;
                ctx.fillRect(x, y, cell, cell);
            }
        }

        function drawLanguageDonut(languageBytes) {
            if (!githubLanguageCanvas) return;
            const ctx = githubLanguageCanvas.getContext("2d");
            if (!ctx) return;

            const entries = Object.entries(languageBytes)
                .filter(([, value]) => Number(value) > 0)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 6);

            const total = entries.reduce((sum, [, value]) => sum + value, 0) || 1;

            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const width = githubLanguageCanvas.clientWidth || 460;
            const height = 260;
            githubLanguageCanvas.width = Math.floor(width * dpr);
            githubLanguageCanvas.height = Math.floor(height * dpr);
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            ctx.clearRect(0, 0, width, height);

            const cx = width * 0.34;
            const cy = height * 0.52;
            const radius = Math.min(width, height) * 0.28;
            const inner = radius * 0.58;
            const palette = ["#F5A623", "#C97A10", "#90D6FF", "#BFB3FF", "#44D79F", "#EDF2FF"];

            let startAngle = -Math.PI / 2;
            entries.forEach(([, value], index) => {
                const slice = (value / total) * Math.PI * 2;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.arc(cx, cy, radius, startAngle, startAngle + slice);
                ctx.closePath();
                ctx.fillStyle = palette[index % palette.length];
                ctx.fill();
                startAngle += slice;
            });

            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(cx, cy, inner, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalCompositeOperation = "source-over";

            if (githubLanguageLegend) {
                githubLanguageLegend.innerHTML = "";
                entries.forEach(([name, value], index) => {
                    const li = document.createElement("li");
                    const pct = ((value / total) * 100).toFixed(1);
                    li.innerHTML = `<span class="legend-dot" style="background:${palette[index % palette.length]};"></span>${name} (${pct}%)`;
                    githubLanguageLegend.appendChild(li);
                });
            }
        }

        function renderTopRepos(repos) {
            if (!githubRepoGrid) return;
            githubRepoGrid.innerHTML = "";

            repos.slice(0, 3).forEach((repo) => {
                const card = document.createElement("article");
                card.className = "live-repo-card";
                card.innerHTML = `
                    <h5><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h5>
                    <p>${repo.description || "No description available."}</p>
                    <div class="repo-meta">
                        <span>Stars: ${repo.stargazers_count}</span>
                        <span>Forks: ${repo.forks_count}</span>
                        <span class="repo-lang-chip">${repo.language || "Unknown"}</span>
                    </div>
                `;
                githubRepoGrid.appendChild(card);
            });
        }

        function renderLastActive(isoTime) {
            if (!githubLastActive) return;
            if (!isoTime) {
                githubLastActive.textContent = "Unavailable";
                return;
            }

            const parsed = new Date(isoTime);
            if (Number.isNaN(parsed.getTime())) {
                githubLastActive.textContent = "Unavailable";
                return;
            }
            githubLastActive.textContent = parsed.toLocaleString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            });
        }

        function toggleGithubSkeletons(show) {
            githubHeatmapSkeleton?.classList.toggle("hidden", !show);
            githubLanguageSkeleton?.classList.toggle("hidden", !show);
            githubRepoSkeleton?.classList.toggle("hidden", !show);
        }

        async function fetchGithubLiveData() {
            const base = `https://api.github.com/users/${GITHUB_USER}`;

            const [user, repos, eventsPages] = await Promise.all([
                fetchGithubJson(base),
                fetchGithubJson(`${base}/repos?per_page=100&sort=updated`),
                Promise.all([1, 2, 3].map((page) => fetchGithubJson(`${base}/events/public?per_page=100&page=${page}`)))
            ]);

            const events = eventsPages.flat();
            const pushEvents = events
                .filter((event) => event.type === "PushEvent")
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

            const languageFetchTargets = repos.slice(0, 30);
            const languagePayloads = await Promise.all(
                languageFetchTargets.map((repo) => fetchGithubJson(repo.languages_url).catch(() => ({})))
            );

            const languageBytes = {};
            languagePayloads.forEach((payload) => {
                Object.entries(payload).forEach(([name, value]) => {
                    languageBytes[name] = (languageBytes[name] || 0) + Number(value || 0);
                });
            });

            const topStarredRepos = [...repos]
                .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (b.forks_count - a.forks_count))
                .slice(0, 3);

            return {
                contributionDailyCounts: buildContributionSeries(events),
                languageBytes,
                topStarredRepos,
                lastActiveAt: pushEvents[0]?.created_at || user.updated_at
            };
        }

        async function initGithubLiveActivity() {
            if (!githubHeatmapCanvas || !githubLanguageCanvas || !githubRepoGrid) return;

            const cached = getGithubCache();
            if (cached) {
                drawContributionHeatmap(cached.contributionDailyCounts || fallbackGithubData.contributionDailyCounts);
                drawLanguageDonut(cached.languageBytes || fallbackGithubData.languageBytes);
                renderTopRepos(cached.topStarredRepos || fallbackGithubData.topStarredRepos);
                renderLastActive(cached.lastActiveAt || fallbackGithubData.lastActiveAt);
                toggleGithubSkeletons(false);
                return;
            }

            toggleGithubSkeletons(true);
            try {
                const data = await fetchGithubLiveData();
                setGithubCache(data);
                drawContributionHeatmap(data.contributionDailyCounts);
                drawLanguageDonut(data.languageBytes);
                renderTopRepos(data.topStarredRepos);
                renderLastActive(data.lastActiveAt);
            } catch (error) {
                console.warn("GitHub live data fallback active:", error?.message || error);
                const data = fallbackGithubData;
                drawContributionHeatmap(data.contributionDailyCounts);
                drawLanguageDonut(data.languageBytes);
                renderTopRepos(data.topStarredRepos);
                renderLastActive(data.lastActiveAt);
            } finally {
                toggleGithubSkeletons(false);
            }
        }

        function triggerCrtEgg() {
            if (!crtOverlay || !crtMessage || document.body.classList.contains("crt-mode")) return;
            document.body.classList.add("crt-mode");
            crtOverlay.classList.add("active");
            crtMessage.classList.add("active");
            logEgg("Konami code accepted. Retro CRT mode activated.");

            setTimeout(() => {
                crtOverlay.classList.remove("active");
                crtMessage.classList.remove("active");
                document.body.classList.remove("crt-mode");
            }, 3000);
        }

        function buildHeroNameLetters() {
            if (!heroName || heroName.dataset.eggLettersBuilt === "true") return;

            const fragment = document.createDocumentFragment();

            const wrapNode = (node, isAccent = false) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const chars = (node.textContent || "").split("");
                    chars.forEach((char) => {
                        const span = document.createElement("span");
                        span.className = `name-letter${char === " " ? " space" : ""}${isAccent ? " accent" : ""}`;
                        span.textContent = char === " " ? "\u00A0" : char;
                        fragment.appendChild(span);
                    });
                    return;
                }

                if (node.nodeType === Node.ELEMENT_NODE) {
                    const isAccentNode = isAccent || node.classList?.contains("accent");
                    node.childNodes.forEach((child) => wrapNode(child, isAccentNode));
                }
            };

            heroName.childNodes.forEach((node) => wrapNode(node));
            heroName.textContent = "";
            heroName.appendChild(fragment);
            heroName.dataset.eggLettersBuilt = "true";
        }

        function triggerNameShatterEgg() {
            if (!heroName) return;
            buildHeroNameLetters();

            const letters = heroName.querySelectorAll(".name-letter");
            letters.forEach((letter, index) => {
                const angle = Math.random() * Math.PI * 2;
                const distance = 60 + Math.random() * 180;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance - 20;
                const rot = (Math.random() * 220 - 110).toFixed(1);
                letter.style.setProperty("--sx", `${tx.toFixed(1)}px`);
                letter.style.setProperty("--sy", `${ty.toFixed(1)}px`);
                letter.style.setProperty("--sr", `${rot}deg`);
                letter.style.transitionDelay = `${Math.min(index * 8, 120)}ms`;
            });

            heroName.classList.remove("reassemble");
            heroName.classList.add("shatter-active");
            logEgg("Five-click signature unlocked. Name shatter sequence launched.");

            setTimeout(() => {
                heroName.classList.remove("shatter-active");
                heroName.classList.add("reassemble");
                letters.forEach((letter) => {
                    letter.style.transitionDelay = "0ms";
                });
            }, 680);

            setTimeout(() => {
                heroName.classList.remove("reassemble");
            }, 1900);
        }

        function resizeConfettiCanvas() {
            if (!confettiCanvas) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const w = window.innerWidth;
            const h = window.innerHeight;
            confettiCanvas.width = Math.floor(w * dpr);
            confettiCanvas.height = Math.floor(h * dpr);
            confettiCanvas.style.width = `${w}px`;
            confettiCanvas.style.height = `${h}px`;
            const ctx = confettiCanvas.getContext("2d");
            if (!ctx) return;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        }

        function burstConfetti(count = 120, xSpread = 0.85, yStart = -15) {
            if (!confettiCanvas) return;
            resizeConfettiCanvas();

            const width = window.innerWidth;
            const originX = width * 0.5;
            for (let i = 0; i < count; i += 1) {
                confettiParticles.push({
                    x: originX + (Math.random() - 0.5) * width * (1 - xSpread),
                    y: yStart - Math.random() * 24,
                    vx: (Math.random() - 0.5) * 220,
                    vy: 40 + Math.random() * 210,
                    r: 2 + Math.random() * 3.6,
                    life: 2.1 + Math.random() * 0.9,
                    color: confettiColors[Math.floor(Math.random() * confettiColors.length)]
                });
            }

            if (!confettiRunning) {
                confettiRunning = true;
                confettiLastTime = performance.now();
                requestAnimationFrame(animateConfetti);
            }
        }

        function triggerHireMeEgg() {
            const now = performance.now();
            if (now - lastHireMeTriggerAt < 2500) return;
            lastHireMeTriggerAt = now;

            if (!confettiCanvas || !eggToast) return;
            burstConfetti(170, 0, -12);

            eggToast.classList.add("show");
            logEgg("Keyword 'hire me' detected. Confetti + recruiter toast delivered.");

            setTimeout(() => {
                eggToast.classList.remove("show");
            }, 4200);
        }

        function animateConfetti(now) {
            if (!confettiCanvas) {
                confettiRunning = false;
                return;
            }

            const ctx = confettiCanvas.getContext("2d");
            if (!ctx) {
                confettiRunning = false;
                return;
            }

            const dt = Math.min((now - confettiLastTime) / 1000, 0.033);
            confettiLastTime = now;

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (let i = confettiParticles.length - 1; i >= 0; i -= 1) {
                const p = confettiParticles[i];
                p.life -= dt;
                p.vy += 280 * dt;
                p.vx *= Math.pow(0.985, dt * 60);
                p.vy *= Math.pow(0.992, dt * 60);
                p.x += p.vx * dt;
                p.y += p.vy * dt;

                if (p.life <= 0 || p.y > window.innerHeight + 30) {
                    confettiParticles.splice(i, 1);
                    continue;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            }

            if (confettiParticles.length > 0) {
                requestAnimationFrame(animateConfetti);
            } else {
                confettiRunning = false;
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            }
        }

        window.addEventListener("resize", resizeConfettiCanvas);

        document.addEventListener("keydown", (event) => {
            const key = event.key.toLowerCase();

            const expected = konamiSequence[konamiIndex];
            if (key === expected) {
                konamiIndex += 1;
                if (konamiIndex === konamiSequence.length) {
                    konamiIndex = 0;
                    triggerCrtEgg();
                }
            } else {
                konamiIndex = key === konamiSequence[0] ? 1 : 0;
            }

            if (!event.ctrlKey && !event.metaKey && !event.altKey) {
                if (key === "backspace") {
                    typingBuffer = typingBuffer.slice(0, -1);
                } else if (key.length === 1 || key === " ") {
                    typingBuffer = `${typingBuffer}${key === " " ? " " : key}`.slice(-24);
                }

                if (typingBuffer.includes("hire me")) {
                    typingBuffer = "";
                    triggerHireMeEgg();
                }
            }
        });

        initGithubLiveActivity();
        initBlogFeed();
        initAnalyticsSession();
        initStatsRouteHandlers();
        initAvailabilityWidget();
        initLogoFallbacks();
        initSpotifyWidget();
        initCompetitiveStats();
        initCustomInstallPrompt();
        initChatAssistant();

        if (heroName) {
            buildHeroNameLetters();
            heroName.addEventListener("click", () => {
                const now = performance.now();
                heroClickTimes = heroClickTimes.filter((time) => now - time <= 3000);
                heroClickTimes.push(now);
                if (heroClickTimes.length >= 5 && now - heroClickTimes[0] <= 3000) {
                    heroClickTimes = [];
                    triggerNameShatterEgg();
                }
            });
        }

        const validThemes = ["midnight", "terminal", "paper"];

        function setActiveThemeOption(themeName) {
            themeOptions.forEach((option) => {
                const isActive = option.getAttribute("data-theme-option") === themeName;
                option.classList.toggle("active", isActive);
                option.setAttribute("aria-checked", isActive ? "true" : "false");
            });
            if (themeToggle) {
                const display = themeName.charAt(0).toUpperCase() + themeName.slice(1);
                themeToggle.textContent = display;
            }
        }

        function applyTheme(themeName) {
            const normalizedTheme = validThemes.includes(themeName) ? themeName : "midnight";
            document.documentElement.setAttribute("data-theme", normalizedTheme);
            setActiveThemeOption(normalizedTheme);
            try {
                localStorage.setItem("skbTheme", normalizedTheme);
            } catch (error) {
                void error;
            }
        }

        function runThemeWipe(themeName, x, y) {
            if (!themeWipe || reduceMotion) {
                applyTheme(themeName);
                return;
            }

            const wipeColors = {
                midnight: "#050A18",
                terminal: "#000000",
                paper: "#F5F0E8"
            };

            themeWipe.style.setProperty("--wipe-color", wipeColors[themeName] || wipeColors.midnight);
            themeWipe.style.setProperty("--wipe-x", `${x}px`);
            themeWipe.style.setProperty("--wipe-y", `${y}px`);
            themeWipe.classList.remove("active");

            void themeWipe.offsetWidth;
            themeWipe.classList.add("active");
            applyTheme(themeName);

            setTimeout(() => {
                themeWipe.classList.remove("active");
            }, 420);
        }

        if (themeToggle && themeSwitcher && themeMenu) {
            themeToggle.addEventListener("click", () => {
                const openState = themeSwitcher.classList.toggle("open");
                themeToggle.setAttribute("aria-expanded", openState ? "true" : "false");
            });

            document.addEventListener("click", (event) => {
                if (!themeSwitcher.contains(event.target)) {
                    themeSwitcher.classList.remove("open");
                    themeToggle.setAttribute("aria-expanded", "false");
                }
            });

            themeOptions.forEach((option) => {
                option.addEventListener("click", (event) => {
                    const selectedTheme = option.getAttribute("data-theme-option") || "midnight";
                    runThemeWipe(selectedTheme, event.clientX, event.clientY);
                    themeSwitcher.classList.remove("open");
                    themeToggle.setAttribute("aria-expanded", "false");
                });
            });
        }

        try {
            applyTheme(localStorage.getItem("skbTheme") || "midnight");
        } catch (error) {
            void error;
            applyTheme("midnight");
        }

        if ("serviceWorker" in navigator && window.isSecureContext) {
            window.addEventListener("load", () => {
                navigator.serviceWorker
                    .register("service-worker.js")
                    .then((registration) => {
                        swRegistration = registration;
                    })
                    .catch((error) => {
                        console.warn("Service worker registration skipped:", error);
                    });
            });
        }

        function applyActiveNav(id) {
            const allNavLinks = [...desktopLinks, ...mobileLinks];
            allNavLinks.forEach((link) => {
                const isActive = link.getAttribute("href") === `#${id}`;
                link.classList.toggle("active", isActive);
                if (isActive) {
                    link.setAttribute("aria-current", "page");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        }

        [...desktopLinks, ...mobileLinks].forEach((link) => {
            link.addEventListener("mouseenter", playNavTick);
            link.addEventListener("focus", playNavTick);
        });

        function updateOnScrollFrame() {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const ratio = maxScroll > 0 ? latestScrollY / maxScroll : 0;
            if (progress && !document.body.classList.contains("cv-mode")) {
                progress.style.transform = `scaleX(${ratio})`;
            }

            if (backToTop && backToTopRing) {
                backToTop.classList.toggle("show", latestScrollY > 400);
                backToTopRing.style.strokeDashoffset = String(ringCircumference * (1 - ratio));
            }

            if (document.body.classList.contains("cv-mode")) {
                header.style.transform = "translateY(0)";
            } else if (latestScrollY > lastScrollY && latestScrollY > 90) {
                header.style.transform = "translateY(-100%)";
            } else {
                header.style.transform = "translateY(0)";
            }

            applyActiveNav(activeSectionId);
            lastScrollY = latestScrollY;
            ticking = false;
        }

        function onScroll() {
            latestScrollY = window.scrollY;
            if (!ticking) {
                requestAnimationFrame(updateOnScrollFrame);
                ticking = true;
            }
        }

        function wrapWords(element, startDelay = 0, step = 70) {
            if (!element) return;
            const text = element.textContent?.trim();
            if (!text || element.dataset.wordsWrapped === "true") return;

            const words = text.split(/\s+/);
            element.textContent = "";
            words.forEach((word, index) => {
                const span = document.createElement("span");
                span.className = "hero-word";
                span.style.setProperty("--wdelay", String(startDelay + index * step));
                span.textContent = word;
                element.appendChild(span);
                if (index < words.length - 1) {
                    element.appendChild(document.createTextNode(" "));
                }
            });
            element.dataset.wordsWrapped = "true";
        }

        wrapWords(document.querySelector(".hero-copy"), 130, 52);

        function setCvMode(isOn) {
            document.body.classList.toggle("cv-mode", isOn);
            cvModeToggle?.classList.toggle("active", isOn);
            cvModeToggle?.setAttribute("aria-pressed", isOn ? "true" : "false");
            cvSidePanel?.setAttribute("aria-hidden", isOn ? "false" : "true");

            try {
                sessionStorage.setItem("skbCvMode", isOn ? "1" : "0");
            } catch (error) {
                void error;
            }

            onScroll();
        }

        if (cvModeToggle) {
            cvModeToggle.addEventListener("click", () => {
                const nextState = !document.body.classList.contains("cv-mode");
                setCvMode(nextState);
            });
        }

        if (downloadPdfBtn) {
            downloadPdfBtn.addEventListener("click", () => {
                window.print();
            });
        }

        if (heroResumeBtn && heroResumeBtn.tagName === "BUTTON" && !heroResumeBtn.classList.contains("view-pdf-button")) {
            heroResumeBtn.addEventListener("click", () => {
                const anchor = document.createElement("a");
                anchor.href = RESUME_DOWNLOAD_URL;
                anchor.download = "Senthil-Kumaran-Balakrishnan-Resume.pdf";
                anchor.rel = "noopener noreferrer";
                document.body.appendChild(anchor);
                anchor.click();
                anchor.remove();
            });
        }

        try {
            if (sessionStorage.getItem("skbCvMode") === "1") {
                setCvMode(true);
            }
        } catch (error) {
            void error;
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        if (backToTop) {
            backToTop.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        const revealElements = document.querySelectorAll(".reveal");
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        revealElements.forEach((el) => revealObserver.observe(el));

        const contactSocialRow = document.getElementById("contactSocialRow");
        if (contactSocialRow) {
            if (reduceMotion) {
                contactSocialRow.classList.add("in-view");
            } else {
                const socialRowObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    });
                }, { threshold: 0.2 });

                socialRowObserver.observe(contactSocialRow);
            }
        }

        const sectionVisibility = new Map();
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.id;
                if (!id) return;
                if (entry.isIntersecting) {
                    sectionVisibility.set(id, entry.intersectionRatio);
                } else {
                    sectionVisibility.delete(id);
                }
            });

            let bestId = activeSectionId;
            let bestRatio = 0;
            sectionVisibility.forEach((ratio, id) => {
                if (ratio > bestRatio) {
                    bestRatio = ratio;
                    bestId = id;
                }
            });

            if (bestId && bestId !== lastObservedSectionForSound) {
                if (lastObservedSectionForSound) {
                    playSectionThud();
                }
                lastObservedSectionForSound = bestId;
            }
            activeSectionId = bestId;
            onScroll();
        }, { threshold: [0.2, 0.4, 0.6, 0.8] });
        sections.forEach((section) => navObserver.observe(section));

        const constellationCanvas = document.getElementById("heroConstellation");

        if (constellationCanvas && !reduceMotion) {
            const ctx = constellationCanvas.getContext("2d", { alpha: true });
            const particlePalette = [
                "rgba(245, 166, 35, 0.78)",
                "rgba(144, 214, 255, 0.75)",
                "rgba(191, 179, 255, 0.7)"
            ];
            const baseParticleCount = 80;
            const maxParticles = 240;
            const connectDistance = 100;
            const interactionDistance = 120;
            const edgeDamping = 0.8;
            const touchCapable = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;

            let viewportWidth = window.innerWidth;
            let viewportHeight = window.innerHeight;
            let dpr = Math.min(window.devicePixelRatio || 1, 2);
            let lastFrameTime = performance.now();
            const particles = [];

            const pointer = {
                x: viewportWidth / 2,
                y: viewportHeight / 2,
                active: false,
                mode: touchCapable ? "attract" : "repel"
            };

            function createParticle(x = Math.random() * viewportWidth, y = Math.random() * viewportHeight, burst = false) {
                const theta = Math.random() * Math.PI * 2;
                const speed = burst ? 120 + Math.random() * 220 : 12 + Math.random() * 38;
                return {
                    x,
                    y,
                    vx: Math.cos(theta) * speed,
                    vy: Math.sin(theta) * speed,
                    r: 2 + Math.random() * 3,
                    color: particlePalette[Math.floor(Math.random() * particlePalette.length)],
                    burstLife: burst ? 3 : 0,
                    bornAt: performance.now()
                };
            }

            function resizeParticleCanvas() {
                viewportWidth = window.innerWidth;
                viewportHeight = window.innerHeight;
                dpr = Math.min(window.devicePixelRatio || 1, 2);

                constellationCanvas.width = Math.floor(viewportWidth * dpr);
                constellationCanvas.height = Math.floor(viewportHeight * dpr);
                constellationCanvas.style.width = `${viewportWidth}px`;
                constellationCanvas.style.height = `${viewportHeight}px`;

                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.scale(dpr, dpr);
            }

            function spawnBurst(x, y) {
                for (let i = 0; i < 15; i += 1) {
                    particles.push(createParticle(x, y, true));
                }

                while (particles.length > maxParticles) {
                    let removeIndex = particles.findIndex((p) => p.burstLife <= 0);
                    if (removeIndex < 0) removeIndex = 0;
                    particles.splice(removeIndex, 1);
                }
            }

            function applyInteractionForce(particle, dt) {
                if (!pointer.active) return;

                const dx = particle.x - pointer.x;
                const dy = particle.y - pointer.y;
                const dist = Math.hypot(dx, dy);
                if (dist <= 0.001 || dist > interactionDistance) return;

                const invDist = 1 / dist;
                const nx = dx * invDist;
                const ny = dy * invDist;

                if (pointer.mode === "repel") {
                    const force = (220 / dist) * ((interactionDistance - dist) / interactionDistance);
                    particle.vx += nx * force * dt;
                    particle.vy += ny * force * dt;
                } else {
                    const force = (65 / dist) * ((interactionDistance - dist) / interactionDistance);
                    particle.vx -= nx * force * dt;
                    particle.vy -= ny * force * dt;
                }
            }

            function updateParticle(particle, dt) {
                applyInteractionForce(particle, dt);

                if (particle.burstLife > 0) {
                    particle.burstLife = Math.max(0, particle.burstLife - dt);
                    const burstDecay = Math.pow(0.9, dt * 60);
                    particle.vx *= burstDecay;
                    particle.vy *= burstDecay;
                }

                const driftDamping = Math.pow(0.995, dt * 60);
                particle.vx *= driftDamping;
                particle.vy *= driftDamping;

                particle.x += particle.vx * dt;
                particle.y += particle.vy * dt;

                if (particle.x <= particle.r) {
                    particle.x = particle.r;
                    particle.vx = Math.abs(particle.vx) * edgeDamping;
                } else if (particle.x >= viewportWidth - particle.r) {
                    particle.x = viewportWidth - particle.r;
                    particle.vx = -Math.abs(particle.vx) * edgeDamping;
                }

                if (particle.y <= particle.r) {
                    particle.y = particle.r;
                    particle.vy = Math.abs(particle.vy) * edgeDamping;
                } else if (particle.y >= viewportHeight - particle.r) {
                    particle.y = viewportHeight - particle.r;
                    particle.vy = -Math.abs(particle.vy) * edgeDamping;
                }
            }

            function renderParticles() {
                for (let i = 0; i < particles.length; i += 1) {
                    const p = particles[i];
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                }
            }

            function renderConnections() {
                for (let i = 0; i < particles.length; i += 1) {
                    const a = particles[i];
                    for (let j = i + 1; j < particles.length; j += 1) {
                        const b = particles[j];
                        const dx = a.x - b.x;
                        const dy = a.y - b.y;
                        const dist = Math.hypot(dx, dy);

                        if (dist > connectDistance) continue;
                        const alpha = (1 - dist / connectDistance) * 0.32;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(237, 242, 255, ${alpha.toFixed(4)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            function animatePhysics(now) {
                const dt = Math.min((now - lastFrameTime) / 1000, 0.035);
                lastFrameTime = now;

                ctx.clearRect(0, 0, viewportWidth, viewportHeight);

                for (let i = 0; i < particles.length; i += 1) {
                    updateParticle(particles[i], dt);
                }

                renderConnections();
                renderParticles();
                requestAnimationFrame(animatePhysics);
            }

            for (let i = 0; i < baseParticleCount; i += 1) {
                particles.push(createParticle());
            }

            window.addEventListener("mousemove", (event) => {
                if (touchCapable) return;
                pointer.x = event.clientX;
                pointer.y = event.clientY;
                pointer.active = true;
                pointer.mode = "repel";
            }, { passive: true });

            window.addEventListener("mouseleave", () => {
                if (touchCapable) return;
                pointer.active = false;
            }, { passive: true });

            window.addEventListener("click", (event) => {
                spawnBurst(event.clientX, event.clientY);
            }, { passive: true });

            window.addEventListener("touchstart", (event) => {
                const touch = event.touches[0];
                if (!touch) return;
                pointer.x = touch.clientX;
                pointer.y = touch.clientY;
                pointer.active = true;
                pointer.mode = "attract";
                spawnBurst(touch.clientX, touch.clientY);
            }, { passive: true });

            window.addEventListener("touchmove", (event) => {
                const touch = event.touches[0];
                if (!touch) return;
                pointer.x = touch.clientX;
                pointer.y = touch.clientY;
                pointer.active = true;
                pointer.mode = "attract";
            }, { passive: true });

            window.addEventListener("touchend", () => {
                pointer.mode = "attract";
                pointer.active = true;
            }, { passive: true });

            window.addEventListener("resize", resizeParticleCanvas);
            resizeParticleCanvas();
            requestAnimationFrame((time) => {
                lastFrameTime = time;
                animatePhysics(time);
            });
        }

        const typingText = document.getElementById("typingText");
        const heroRoleTextNode = typingText?.querySelector(".hero-role-text");
        const typingPhrases = [
            "Full-Stack Engineer",
            "Cloud & DevOps Engineer",
            "AI/ML Engineer",
            "Fintech Developer"
        ];
        let phraseIndex = 0;
        let roleIntervalId = null;

        function runTypingLoop() {
            if (!heroRoleTextNode) return;

            if (reduceMotion) {
                heroRoleTextNode.textContent = typingPhrases[0];
                return;
            }

            const nextIndex = (phraseIndex + 1) % typingPhrases.length;
            heroRoleTextNode.classList.add("slide-out");

            setTimeout(() => {
                heroRoleTextNode.classList.remove("slide-out");
                heroRoleTextNode.classList.add("slide-in");
                heroRoleTextNode.textContent = typingPhrases[nextIndex];

                requestAnimationFrame(() => {
                    heroRoleTextNode.classList.remove("slide-in");
                });
                phraseIndex = nextIndex;
            }, 320);
        }

        function initHeroTicker() {
            if (!heroTickerCanvas) return;

            const tickerWords = ["AWS", "Spring Boot", "React", "Terraform", "PostgreSQL", "Claude AI", "Kubernetes"];
            const tickerText = `${tickerWords.join("  ·  ")}  ·  `;

            const setupCanvas = () => {
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                const width = Math.max(1, Math.floor(heroTickerCanvas.clientWidth));
                const height = Math.max(1, Math.floor(heroTickerCanvas.clientHeight));
                heroTickerCanvas.width = Math.floor(width * dpr);
                heroTickerCanvas.height = Math.floor(height * dpr);
                const ctx = heroTickerCanvas.getContext("2d");
                if (!ctx) return null;
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                return { ctx, width, height };
            };

            let tickerOffset = 0;
            let lastTick = performance.now();

            const renderTicker = (time) => {
                const canvasState = setupCanvas();
                if (!canvasState) return;
                const { ctx, width, height } = canvasState;

                const dt = Math.min((time - lastTick) / 1000, 0.035);
                lastTick = time;

                ctx.clearRect(0, 0, width, height);
                ctx.fillStyle = "rgba(4, 9, 20, 0.82)";
                ctx.fillRect(0, 0, width, height);

                ctx.font = "600 14px Satoshi, sans-serif";
                ctx.fillStyle = "rgba(237, 242, 255, 0.75)";
                const textWidth = ctx.measureText(tickerText).width;

                tickerOffset -= dt * 52;
                if (tickerOffset <= -textWidth) tickerOffset += textWidth;

                for (let x = tickerOffset; x < width + textWidth; x += textWidth) {
                    ctx.fillText(tickerText, x, height * 0.66);
                }

                if (!reduceMotion) {
                    requestAnimationFrame(renderTicker);
                }
            };

            if (reduceMotion) {
                const canvasState = setupCanvas();
                if (!canvasState) return;
                const { ctx, width, height } = canvasState;
                ctx.clearRect(0, 0, width, height);
                ctx.fillStyle = "rgba(4, 9, 20, 0.82)";
                ctx.fillRect(0, 0, width, height);
                ctx.font = "600 14px Satoshi, sans-serif";
                ctx.fillStyle = "rgba(237, 242, 255, 0.75)";
                ctx.fillText(tickerText, 12, height * 0.66);
                return;
            }

            requestAnimationFrame((time) => {
                lastTick = time;
                renderTicker(time);
            });
        }

        initHeroTicker();

        let typingStarted = false;
        function startTypingLoop() {
            if (typingStarted) return;
            typingStarted = true;
            if (heroRoleTextNode) {
                heroRoleTextNode.textContent = typingPhrases[0];
            }
            runTypingLoop();
            roleIntervalId = window.setInterval(runTypingLoop, 2000);
        }

        let audioContext = null;
        let soundEnabled = true;
        let audioUnlocked = false;
        let lastNavTickAt = 0;
        let lastSectionThudAt = 0;
        let lastSkillSoundAt = 0;
        let lastObservedSectionForSound = "";
        let introComplete = false;

        function updateSoundToggle() {
            if (!soundToggle) return;
            soundToggle.classList.toggle("on", soundEnabled);
            soundToggle.classList.toggle("muted", !soundEnabled);
            soundToggle.setAttribute("aria-pressed", soundEnabled ? "true" : "false");
            soundToggle.setAttribute("aria-label", soundEnabled ? "Mute sound" : "Unmute sound");
            soundToggle.setAttribute("title", soundEnabled ? "Sound On" : "Sound Off");
        }

        function ensureAudioContext() {
            if (!audioContext) {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (!AudioContextClass) return null;
                audioContext = new AudioContextClass();
            }
            return audioContext;
        }

        async function unlockAudio() {
            const ctx = ensureAudioContext();
            if (!ctx) return false;

            try {
                if (ctx.state === "suspended") {
                    await ctx.resume();
                }
                audioUnlocked = true;
                soundUnlockHint?.classList.add("hidden");
                localStorage.setItem("skbAudioUnlocked", "1");
                return true;
            } catch (error) {
                void error;
                return false;
            }
        }

        function canPlaySound() {
            return soundEnabled && audioUnlocked && !!audioContext;
        }

        function playTone({ frequency = 440, type = "sine", attack = 0.005, hold = 0.02, release = 0.08, gainValue = 0.015, detune = 0 }) {
            if (!canPlaySound()) return;
            const ctx = audioContext;
            if (!ctx) return;

            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(frequency, now);
            if (detune !== 0) osc.detune.setValueAtTime(detune, now);

            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.exponentialRampToValueAtTime(gainValue, now + attack);
            gain.gain.setValueAtTime(gainValue, now + attack + hold);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + attack + hold + release);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + attack + hold + release + 0.01);
        }

        function playNavTick() {
            const now = performance.now();
            if (now - lastNavTickAt < 80) return;
            lastNavTickAt = now;
            playTone({ frequency: 440, type: "sine", attack: 0.002, hold: 0.02, release: 0.03, gainValue: 0.008 });
        }

        function playCtaChord() {
            if (!canPlaySound()) return;
            const ctx = audioContext;
            if (!ctx) return;

            const now = ctx.currentTime;
            const frequencies = [329.63, 440.0];

            frequencies.forEach((frequency, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(frequency * 0.92, now);
                osc.frequency.exponentialRampToValueAtTime(frequency, now + 0.16 + idx * 0.02);

                gain.gain.setValueAtTime(0.0001, now);
                gain.gain.exponentialRampToValueAtTime(0.015 / (idx + 1), now + 0.03);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);

                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.34);
            });
        }

        function playSectionThud() {
            const nowMs = performance.now();
            if (nowMs - lastSectionThudAt < 240) return;
            lastSectionThudAt = nowMs;

            if (!canPlaySound()) return;
            const ctx = audioContext;
            if (!ctx) return;

            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(72, now);
            osc.frequency.exponentialRampToValueAtTime(52, now + 0.19);

            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.exponentialRampToValueAtTime(0.012, now + 0.015);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.23);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.25);
        }

        function playSkillArpeggio(index) {
            const nowMs = performance.now();
            if (nowMs - lastSkillSoundAt < 95) return;
            lastSkillSoundAt = nowMs;

            if (!canPlaySound()) return;
            const base = 220 + index * 16;
            [1, 1.26, 1.5].forEach((ratio, step) => {
                setTimeout(() => {
                    playTone({
                        frequency: base * ratio,
                        type: "sine",
                        attack: 0.002,
                        hold: 0.03,
                        release: 0.045,
                        gainValue: 0.007
                    });
                }, step * 45);
            });
        }

        function playAmbientChord() {
            if (!canPlaySound()) return;
            const ctx = audioContext;
            if (!ctx) return;

            const now = ctx.currentTime;
            const frequencies = [174.61, 220, 261.63, 329.63];

            frequencies.forEach((frequency, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = idx % 2 === 0 ? "sine" : "triangle";
                osc.frequency.value = frequency;

                gain.gain.setValueAtTime(0.0001, now);
                gain.gain.exponentialRampToValueAtTime(0.013 / (idx + 1), now + 0.2);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 1.45);
            });
        }

        (async () => {
            try {
                soundEnabled = localStorage.getItem("skbSoundEnabled") !== "0";
                audioUnlocked = localStorage.getItem("skbAudioUnlocked") === "1";
            } catch (error) {
                void error;
            }

            updateSoundToggle();

            if (audioUnlocked) {
                await unlockAudio();
            } else {
                soundUnlockHint?.classList.remove("hidden");

                const unlockOnce = async () => {
                    const unlocked = await unlockAudio();
                    if (unlocked) {
                        document.removeEventListener("pointerdown", unlockOnce, true);
                        document.removeEventListener("keydown", unlockOnce, true);
                    }
                };

                document.addEventListener("pointerdown", unlockOnce, true);
                document.addEventListener("keydown", unlockOnce, true);
            }
        })();

        if (soundToggle) {
            soundToggle.addEventListener("click", async (event) => {
                event.stopPropagation();
                await unlockAudio();
                soundEnabled = !soundEnabled;
                try {
                    localStorage.setItem("skbSoundEnabled", soundEnabled ? "1" : "0");
                } catch (error) {
                    void error;
                }
                updateSoundToggle();
                if (soundEnabled && introComplete) {
                    playAmbientChord();
                }
            });
        }

        function runHeroCascadeReveal() {
            constellationCanvas?.classList.add("particles-in");
            heroBlobWrap?.classList.add("blob-in");

            setTimeout(() => {
                header.classList.add("intro-nav-in");
            }, 120);

            setTimeout(() => {
                document.querySelectorAll(".hero-kicker, .hero-copy").forEach((el) => {
                    el.classList.add("hero-words-in");
                });
                heroSub?.classList.add("text-in");
            }, 270);

            setTimeout(() => {
                heroPhotoReveal?.classList.add("reveal-photo");
            }, 560);
        }

        function finishIntro() {
            document.body.classList.remove("preload");
            runHeroCascadeReveal();
            startTypingLoop();
            introComplete = true;
            if (soundEnabled) {
                playAmbientChord();
            }
        }

        function runIntroSequence() {
            let introAlreadySeen = false;
            try {
                introAlreadySeen = sessionStorage.getItem("skbIntroPlayed") === "1";
            } catch (error) {
                void error;
            }

            if (reduceMotion) {
                if (introOverlay) introOverlay.remove();
                finishIntro();
                return;
            }

            if (!introOverlay) {
                finishIntro();
                return;
            }

            if (introAlreadySeen) {
                introOverlay.classList.add("quick");
                requestAnimationFrame(() => {
                    introOverlay.classList.add("hide-fast");
                });
                setTimeout(() => {
                    introOverlay.remove();
                    finishIntro();
                }, 310);
                return;
            }

            setTimeout(() => {
                introOverlay.classList.add("split");
            }, 1200);

            setTimeout(() => {
                introOverlay.remove();
                finishIntro();
                try {
                    sessionStorage.setItem("skbIntroPlayed", "1");
                } catch (error) {
                    void error;
                }
            }, 1940);
        }

        runIntroSequence();

        const cursorCore = document.getElementById("cursorCore");
        const cursorRing = document.getElementById("cursorRing");
        const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

        if (!coarsePointer && cursorCore && cursorRing) {
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let coreX = mouseX;
            let coreY = mouseY;
            let ringX = mouseX;
            let ringY = mouseY;

            window.addEventListener("mousemove", (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            }, { passive: true });

            const hoverTargets = document.querySelectorAll("a, button");
            hoverTargets.forEach((target) => {
                target.addEventListener("mouseenter", () => cursorRing.classList.add("hover"));
                target.addEventListener("mouseleave", () => cursorRing.classList.remove("hover"));
            });

            function animateCursor() {
                coreX += (mouseX - coreX) * 0.1;
                coreY += (mouseY - coreY) * 0.1;
                ringX += (mouseX - ringX) * 0.1;
                ringY += (mouseY - ringY) * 0.1;

                cursorCore.style.transform = `translate(${coreX}px, ${coreY}px) translate(-50%, -50%)`;
                cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
                requestAnimationFrame(animateCursor);
            }
            animateCursor();
        }

        const magneticCta = document.getElementById("magneticCta");
        if (magneticCta && !coarsePointer) {
            magneticCta.addEventListener("click", playCtaChord);

            window.addEventListener("mousemove", (e) => {
                const rect = magneticCta.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = e.clientX - cx;
                const dy = e.clientY - cy;
                const dist = Math.hypot(dx, dy);

                if (dist < 80) {
                    const strength = (80 - dist) / 80;
                    const tx = dx * 0.2 * strength;
                    const ty = dy * 0.2 * strength;
                    magneticCta.classList.add("is-magnetic-active");
                    magneticCta.style.transform = `translate(${tx}px, ${ty}px)`;
                } else {
                    magneticCta.style.transform = "translate(0, 0)";
                    magneticCta.classList.remove("is-magnetic-active");
                }
            }, { passive: true });

            magneticCta.addEventListener("mouseleave", () => {
                magneticCta.style.transform = "translate(0, 0)";
                magneticCta.classList.remove("is-magnetic-active");
            });
        } else if (magneticCta) {
            magneticCta.addEventListener("click", playCtaChord);
        }

        function initSkillIconFallbacks() {
            const skillLogoWraps = document.querySelectorAll(".skill-logo-wrap");

            skillLogoWraps.forEach((wrap) => {
                const logoImage = wrap.querySelector(".skill-logo-img");
                if (!logoImage) return;

                const showFallback = () => {
                    wrap.classList.add("is-fallback");
                };

                if (logoImage.complete && logoImage.naturalWidth === 0) {
                    showFallback();
                    return;
                }

                logoImage.addEventListener("error", showFallback, { once: true });
            });
        }

        initSkillIconFallbacks();

        const skillNodes = document.querySelectorAll(".skill-terminal");
        skillNodes.forEach((node, idx) => {
            const level = Math.max(1, Math.min(5, Number(node.getAttribute("data-level") || 3)));
            const skillNameNode = node.querySelector(".skill-name");
            const skillName = (skillNameNode?.textContent || node.textContent || "Skill").trim();
            node.setAttribute("aria-label", `${skillName} proficiency ${level} out of 5`);

            const dotsWrap = node.querySelector(".skill-dots");
            if (dotsWrap && !dotsWrap.hasChildNodes()) {
                for (let i = 1; i <= 5; i += 1) {
                    const dot = document.createElement("span");
                    dot.className = `skill-dot${i <= level ? " active" : ""}`;
                    dotsWrap.appendChild(dot);
                }
            }

            node.addEventListener("mouseenter", () => playSkillArpeggio(idx));
            node.addEventListener("focus", () => playSkillArpeggio(idx));
        });

        const certBadgeCards = Array.from(document.querySelectorAll("[data-cert-badge]"));
        const aboutCounterNodes = Array.from(document.querySelectorAll(".about-metric-value[data-count-target]"));

        function bindCertificationTilt(card) {
            card.addEventListener("mousemove", (event) => {
                if (reduceMotion) return;

                const rect = card.getBoundingClientRect();
                const px = (event.clientX - rect.left) / rect.width;
                const py = (event.clientY - rect.top) / rect.height;
                const rotateY = (px - 0.5) * 8;
                const rotateX = (0.5 - py) * 8;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
            });
        }

        if (certBadgeCards.length) {
            certBadgeCards.forEach((card) => {
                if (!reduceMotion) {
                    card.classList.add("drop-ready");
                }
                bindCertificationTilt(card);
            });

            if (reduceMotion) {
                certBadgeCards.forEach((card) => card.classList.add("is-dropped"));
            } else {
                const certObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;

                        const badge = entry.target;
                        const badgeIndex = certBadgeCards.indexOf(badge);
                        const delay = Math.max(0, badgeIndex) * 140;

                        setTimeout(() => {
                            badge.classList.add("is-dropped");
                            badge.classList.remove("drop-ready");
                        }, delay);

                        observer.unobserve(badge);
                    });
                }, { threshold: 0.2 });

                certBadgeCards.forEach((card) => certObserver.observe(card));
            }
        }

        function animateAboutCounters() {
            if (!aboutCounterNodes.length) return;

            const duration = 1300;
            const startedAt = performance.now();

            const tick = (time) => {
                const progress = Math.min((time - startedAt) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);

                aboutCounterNodes.forEach((node) => {
                    const target = Number(node.dataset.countTarget || 0);
                    const decimals = Number(node.dataset.countDecimals || 0);
                    const suffix = node.dataset.countSuffix || "";
                    const value = target * eased;
                    const formatted = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
                    node.textContent = `${formatted}${suffix}`;
                });

                if (progress < 1) {
                    requestAnimationFrame(tick);
                }
            };

            requestAnimationFrame(tick);
        }

        if (aboutCounterNodes.length) {
            if (reduceMotion) {
                aboutCounterNodes.forEach((node) => {
                    const target = Number(node.dataset.countTarget || 0);
                    const decimals = Number(node.dataset.countDecimals || 0);
                    const suffix = node.dataset.countSuffix || "";
                    node.textContent = `${decimals > 0 ? target.toFixed(decimals) : Math.round(target)}${suffix}`;
                });
            } else {
                const counterObserver = new IntersectionObserver((entries, observer) => {
                    const hasVisible = entries.some((entry) => entry.isIntersecting);
                    if (!hasVisible) return;
                    animateAboutCounters();
                    observer.disconnect();
                }, { threshold: 0.2 });

                const anchor = aboutCounterNodes[0].closest(".about-metrics-wrap") || aboutCounterNodes[0];
                if (anchor) {
                    counterObserver.observe(anchor);
                }
            }
        }

        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        const nativeLazy = "loading" in HTMLImageElement.prototype;
        if (!nativeLazy && lazyImages.length) {
            const placeholder =
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

            const lazyObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const img = entry.target;
                    const dataSrc = img.getAttribute("data-src");
                    if (dataSrc) {
                        img.src = dataSrc;
                        img.removeAttribute("data-src");
                    }
                    observer.unobserve(img);
                });
            }, { rootMargin: "200px 0px" });

            lazyImages.forEach((img) => {
                if (!img.dataset.src) {
                    img.dataset.src = img.src;
                    img.src = placeholder;
                }
                lazyObserver.observe(img);
            });
        }

        const aboutSection = document.getElementById("about");
        const aboutStory = document.getElementById("aboutStory");
        const aboutTimelineViewport = document.getElementById("aboutTimelineViewport");
        const aboutTimelineTrack = document.getElementById("aboutTimelineTrack");
        const aboutMilestones = Array.from(document.querySelectorAll(".about-milestone"));
        const aboutPhoto = document.getElementById("aboutStoryPhoto");
        const aboutQuote = document.getElementById("aboutQuote");
        const aboutFacts = Array.from(document.querySelectorAll(".fact-item"));
        const aboutFactSentinels = Array.from(document.querySelectorAll(".fact-sentinel"));
        const supportsScrollTimelineApi = typeof CSS !== "undefined" && CSS.supports("animation-timeline: view()");
        let lastAboutMilestoneIndex = -1;

        function buildAboutQuoteChars() {
            if (!aboutQuote || aboutQuote.dataset.charsBuilt === "true") return;
            const sourceText = aboutQuote.dataset.quote || aboutQuote.textContent || "";
            aboutQuote.textContent = "";

            sourceText.split("").forEach((char, index) => {
                const span = document.createElement("span");
                span.className = "quote-char";
                span.style.setProperty("--char-index", String(index));
                span.textContent = char;
                aboutQuote.appendChild(span);
            });

            aboutQuote.dataset.charsBuilt = "true";
        }

        function setActiveAboutFact(index) {
            aboutFacts.forEach((fact, factIndex) => {
                fact.classList.toggle("is-active", factIndex === index);
            });
        }

        function clamp(value, min, max) {
            return Math.min(max, Math.max(min, value));
        }

        function updateAboutNarrativeFromScroll() {
            if (!aboutSection || !aboutStory) return;

            const rect = aboutSection.getBoundingClientRect();
            const progressRaw = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            const progress = clamp(progressRaw, 0, 1);
            aboutStory.style.setProperty("--about-progress", progress.toFixed(4));
            aboutStory.style.setProperty("--about-blob-hue", `${Math.round(progress * 140)}deg`);
            aboutStory.style.setProperty("--about-blob-shift-y", `${Math.round(progress * 24)}px`);

            const activeMilestoneIndex = Math.round(progress * Math.max(aboutMilestones.length - 1, 0));
            aboutMilestones.forEach((milestone, idx) => {
                milestone.classList.toggle("is-active", idx === activeMilestoneIndex);
            });

            if (activeMilestoneIndex !== lastAboutMilestoneIndex && aboutMilestones[activeMilestoneIndex]) {
                lastAboutMilestoneIndex = activeMilestoneIndex;
                if (supportsScrollTimelineApi && aboutTimelineViewport) {
                    aboutMilestones[activeMilestoneIndex].scrollIntoView({
                        behavior: "smooth",
                        inline: "center",
                        block: "nearest"
                    });
                }
            }

            if (aboutTimelineTrack && aboutTimelineViewport) {
                const maxTravel = Math.max(0, aboutTimelineTrack.scrollWidth - aboutTimelineViewport.clientWidth);
                if (!supportsScrollTimelineApi) {
                    aboutTimelineViewport.scrollLeft = maxTravel * progress;
                }
            }

            if (aboutPhoto) {
                aboutPhoto.classList.toggle("state-top", progress < 0.34);
                aboutPhoto.classList.toggle("state-mid", progress >= 0.34 && progress < 0.67);
                aboutPhoto.classList.toggle("state-bottom", progress >= 0.67);

                if (!supportsScrollTimelineApi) {
                    const grayscale = clamp(1 - progress * 1.5, 0, 1);
                    const saturation = 0.75 + progress * 0.45;
                    aboutPhoto.style.filter = `grayscale(${grayscale}) saturate(${saturation})`;
                    aboutPhoto.style.boxShadow = progress >= 0.67
                        ? "0 0 0 1px rgba(245, 166, 35, 0.5), 0 0 26px rgba(245, 166, 35, 0.25)"
                        : "none";
                }
            }

            if (aboutQuote) {
                aboutQuote.classList.toggle("quote-reveal", progress > 0.4);
            }
        }

        if (aboutSection && aboutStory) {
            buildAboutQuoteChars();
            setActiveAboutFact(0);

            let aboutTicking = false;
            const onAboutScroll = () => {
                if (aboutTicking) return;
                aboutTicking = true;
                requestAnimationFrame(() => {
                    updateAboutNarrativeFromScroll();
                    aboutTicking = false;
                });
            };

            window.addEventListener("scroll", onAboutScroll, { passive: true });
            window.addEventListener("resize", onAboutScroll);
            onAboutScroll();

            if (aboutFactSentinels.length) {
                const factObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;
                        const factIndex = Number(entry.target.getAttribute("data-fact-index"));
                        if (Number.isNaN(factIndex)) return;
                        setActiveAboutFact(factIndex);
                    });
                }, { threshold: 0.6 });

                aboutFactSentinels.forEach((sentinel) => factObserver.observe(sentinel));
            }
        }

        const projectCards = document.querySelectorAll("[data-tilt]");
        projectCards.forEach((card) => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const px = (e.clientX - rect.left) / rect.width;
                const py = (e.clientY - rect.top) / rect.height;
                const rotateY = (px - 0.5) * 10;
                const rotateX = (0.5 - py) * 10;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
            });
        });

        const filterButtons = document.querySelectorAll(".filter-btn");
        const filterCards = document.querySelectorAll(".project-card[data-category]");

        function applyProjectFilter(filterValue) {
            filterCards.forEach((card) => {
                const category = card.getAttribute("data-category");
                const shouldShow = filterValue === "all" || category === filterValue;

                if (shouldShow) {
                    if (card.classList.contains("filter-hidden")) {
                        card.classList.remove("filter-hidden");
                        card.classList.add("filter-enter");
                        requestAnimationFrame(() => {
                            card.classList.remove("filter-enter");
                        });
                    }
                } else {
                    card.classList.add("filter-leave");
                    setTimeout(() => {
                        card.classList.add("filter-hidden");
                        card.classList.remove("filter-leave");
                    }, 260);
                }
            });
        }

        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                filterButtons.forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");
                applyProjectFilter(button.dataset.filter || "all");
            });
        });

        const riskSentinelCard = document.getElementById("riskSentinelCard");
        const riskGaugeValue = document.getElementById("riskGaugeValue");
        const riskGaugeProgress = document.getElementById("riskGaugeProgress");
        const riskLineChartCanvas = document.getElementById("riskLineChartCanvas");
        const riskMetricValues = document.querySelectorAll(".risk-metric-value[data-risk-target]");
        const riskArchDots = document.querySelectorAll("#riskArchitectureSvg .risk-arch-dot");

        const riskChartPoints = [54, 70, 62, 84, 98, 92, 106, 118, 111, 129, 142, 136];
        const riskGaugeTarget = 847;
        const riskGaugeMax = 1000;
        const riskGaugeDuration = 1700;
        let riskAnimationPlayed = false;
        let riskArchitectureAnimationFrame = null;

        function drawRiskLineChart(progress = 1) {
            if (!riskLineChartCanvas) return;

            const ctx = riskLineChartCanvas.getContext("2d");
            if (!ctx) return;

            const width = riskLineChartCanvas.width;
            const height = riskLineChartCanvas.height;
            const padX = 20;
            const padY = 18;

            ctx.clearRect(0, 0, width, height);

            ctx.strokeStyle = "rgba(237, 242, 255, 0.14)";
            ctx.lineWidth = 1;
            for (let i = 0; i <= 4; i += 1) {
                const y = padY + ((height - padY * 2) * i) / 4;
                ctx.beginPath();
                ctx.moveTo(padX, y);
                ctx.lineTo(width - padX, y);
                ctx.stroke();
            }

            const usableWidth = width - padX * 2;
            const usableHeight = height - padY * 2;
            const maxValue = Math.max(...riskChartPoints);
            const minValue = Math.min(...riskChartPoints);

            const points = riskChartPoints.map((value, idx) => {
                const x = padX + (usableWidth * idx) / (riskChartPoints.length - 1);
                const normalized = (value - minValue) / Math.max(1, maxValue - minValue);
                const y = height - padY - normalized * usableHeight;
                return { x, y };
            });

            const visibleSegments = (points.length - 1) * progress;
            const fullSegments = Math.floor(visibleSegments);
            const partialSegment = visibleSegments - fullSegments;

            const gradient = ctx.createLinearGradient(0, padY, 0, height - padY);
            gradient.addColorStop(0, "rgba(245, 166, 35, 0.95)");
            gradient.addColorStop(1, "rgba(95, 210, 255, 0.9)");

            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);

            for (let i = 1; i <= fullSegments && i < points.length; i += 1) {
                ctx.lineTo(points[i].x, points[i].y);
            }

            if (fullSegments < points.length - 1) {
                const p0 = points[fullSegments];
                const p1 = points[fullSegments + 1];
                const x = p0.x + (p1.x - p0.x) * partialSegment;
                const y = p0.y + (p1.y - p0.y) * partialSegment;
                ctx.lineTo(x, y);
            }

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2.4;
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.stroke();

            const pointCount = Math.max(1, Math.floor(points.length * progress));
            ctx.fillStyle = "#f5a623";
            for (let i = 0; i < pointCount && i < points.length; i += 1) {
                ctx.beginPath();
                ctx.arc(points[i].x, points[i].y, 2.3, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function animateRiskGaugeAndChart() {
            if (!riskGaugeValue || !riskGaugeProgress) return;

            const radius = 52;
            const circumference = 2 * Math.PI * radius;
            let start = null;

            riskGaugeProgress.style.strokeDasharray = `${circumference}`;
            riskGaugeProgress.style.strokeDashoffset = `${circumference}`;

            const animateFrame = (timestamp) => {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / riskGaugeDuration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.round(riskGaugeTarget * eased);
                const ratio = value / riskGaugeMax;

                riskGaugeValue.textContent = String(value);
                riskGaugeProgress.style.strokeDashoffset = String(circumference * (1 - ratio));
                drawRiskLineChart(eased);

                if (progress < 1) {
                    requestAnimationFrame(animateFrame);
                }
            };

            requestAnimationFrame(animateFrame);
        }

        function animateRiskMetrics() {
            if (!riskMetricValues.length) return;

            const duration = 1250;
            const startAt = performance.now();

            const tick = (time) => {
                const progress = Math.min((time - startAt) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);

                riskMetricValues.forEach((el) => {
                    const target = Number(el.dataset.riskTarget || 0);
                    const decimals = Number(el.dataset.riskDecimals || 0);
                    const suffix = el.dataset.riskSuffix || "";
                    const value = target * eased;
                    const shown = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
                    el.textContent = `${shown}${suffix}`;
                });

                if (progress < 1) {
                    requestAnimationFrame(tick);
                }
            };

            requestAnimationFrame(tick);
        }

        function startRiskArchitectureDots() {
            if (!riskArchDots.length || reduceMotion) return;

            const startedAt = performance.now();
            const updateDots = (time) => {
                const elapsed = (time - startedAt) / 1000;

                riskArchDots.forEach((dot) => {
                    const pathId = dot.getAttribute("data-path-id");
                    if (!pathId) return;
                    const path = document.getElementById(pathId);
                    if (!(path instanceof SVGPathElement)) return;

                    const pathLength = path.getTotalLength();
                    const speed = Number(dot.getAttribute("data-speed") || 0.2);
                    const offset = Number(dot.getAttribute("data-offset") || 0);
                    const t = (offset + elapsed * speed) % 1;
                    const point = path.getPointAtLength(pathLength * t);
                    dot.setAttribute("cx", String(point.x));
                    dot.setAttribute("cy", String(point.y));
                });

                riskArchitectureAnimationFrame = requestAnimationFrame(updateDots);
            };

            riskArchitectureAnimationFrame = requestAnimationFrame(updateDots);
        }

        if (riskSentinelCard) {
            const riskObserver = new IntersectionObserver((entries, observer) => {
                const isVisible = entries.some((entry) => entry.isIntersecting);
                if (!isVisible || riskAnimationPlayed) return;

                riskAnimationPlayed = true;
                animateRiskGaugeAndChart();
                animateRiskMetrics();
                startRiskArchitectureDots();
                observer.disconnect();
            }, { threshold: 0.2 });

            riskObserver.observe(riskSentinelCard);
        }

        const securityRemediationCard = document.getElementById("securityRemediationCard");
        const securityTerminalBody = document.getElementById("securityTerminalBody");
        const securityGridCanvas = document.getElementById("securityGridCanvas");

        const securityTerminalLines = [
            { text: "[SCAN] Analyzing cloud infrastructure...", tone: "" },
            { text: "[DETECT] CVE-2024-1234 found in S3 bucket policy", tone: "detect" },
            { text: "[AI] Claude agent analyzing vulnerability...", tone: "ai" },
            { text: "[PATCH] Remediation applied in 4.2s", tone: "patch" },
            { text: "[STATUS] ✓ Compliant with CIS benchmark", tone: "status" }
        ];

        let securityTerminalStarted = false;
        let securityTerminalTimer = null;
        let securityTerminalLoopTimer = null;
        let securityGridAnimationFrame = null;
        let securityGridRunning = false;
        let securityGridCols = [];
        let securityGridLastTs = 0;

        function clearSecurityTerminalTimers() {
            if (securityTerminalTimer) {
                clearTimeout(securityTerminalTimer);
                securityTerminalTimer = null;
            }
            if (securityTerminalLoopTimer) {
                clearTimeout(securityTerminalLoopTimer);
                securityTerminalLoopTimer = null;
            }
        }

        function runSecurityTerminalCycle() {
            if (!securityTerminalBody) return;
            clearSecurityTerminalTimers();
            securityTerminalBody.innerHTML = "";
            const cycleStartedAt = performance.now();

            let lineIndex = 0;
            const pushLine = () => {
                if (!securityTerminalBody) return;

                if (lineIndex >= securityTerminalLines.length) {
                    const elapsed = performance.now() - cycleStartedAt;
                    const wait = Math.max(0, 8000 - elapsed);
                    securityTerminalLoopTimer = setTimeout(runSecurityTerminalCycle, wait);
                    return;
                }

                const line = securityTerminalLines[lineIndex];
                const p = document.createElement("p");
                p.className = `security-terminal-line${line.tone ? ` ${line.tone}` : ""}`;
                p.textContent = line.text;
                securityTerminalBody.appendChild(p);
                requestAnimationFrame(() => p.classList.add("show"));

                lineIndex += 1;
                securityTerminalTimer = setTimeout(pushLine, 760);
            };

            pushLine();
        }

        function initializeSecurityGridColumns(width, step) {
            const columnsCount = Math.ceil(width / step);
            securityGridCols = Array.from({ length: columnsCount }, () => Math.random() * 100);
        }

        function animateSecurityGrid(time) {
            if (!securityGridCanvas || !securityGridRunning) return;

            const ctx = securityGridCanvas.getContext("2d");
            if (!ctx) return;

            if (!securityGridLastTs) securityGridLastTs = time;
            const delta = Math.min(50, time - securityGridLastTs);
            securityGridLastTs = time;

            const dpr = Math.min(2, window.devicePixelRatio || 1);
            const bounds = securityGridCanvas.getBoundingClientRect();
            const width = Math.max(1, Math.floor(bounds.width));
            const height = Math.max(1, Math.floor(bounds.height));
            const expectedW = Math.floor(width * dpr);
            const expectedH = Math.floor(height * dpr);
            if (securityGridCanvas.width !== expectedW || securityGridCanvas.height !== expectedH) {
                securityGridCanvas.width = expectedW;
                securityGridCanvas.height = expectedH;
                initializeSecurityGridColumns(width, 20);
            }

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, width, height);

            const step = 20;
            ctx.strokeStyle = "rgba(66, 212, 255, 0.12)";
            ctx.lineWidth = 1;
            for (let x = 0; x <= width; x += step) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y <= height; y += step) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            if (!securityGridCols.length) {
                initializeSecurityGridColumns(width, step);
            }

            const speed = 0.028 * delta;
            securityGridCols.forEach((y, index) => {
                const x = index * step + step * 0.5;
                const nextY = (y + speed * (0.6 + (index % 5) * 0.16)) % (height + 40);
                securityGridCols[index] = nextY;

                ctx.fillStyle = "rgba(105, 248, 183, 0.18)";
                ctx.fillRect(x - 1, nextY - 8, 2, 8);
                ctx.fillStyle = "rgba(66, 212, 255, 0.22)";
                ctx.fillRect(x - 1, nextY + 4, 2, 4);
            });

            securityGridAnimationFrame = requestAnimationFrame(animateSecurityGrid);
        }

        function startSecurityAnimations() {
            if (!securityTerminalStarted) {
                securityTerminalStarted = true;
                runSecurityTerminalCycle();
            }

            if (securityGridCanvas && !securityGridRunning && !reduceMotion) {
                securityGridRunning = true;
                securityGridLastTs = 0;
                securityGridAnimationFrame = requestAnimationFrame(animateSecurityGrid);
            }
        }

        function stopSecurityGridAnimation() {
            securityGridRunning = false;
            if (securityGridAnimationFrame) {
                cancelAnimationFrame(securityGridAnimationFrame);
                securityGridAnimationFrame = null;
            }
        }

        if (securityRemediationCard) {
            if (reduceMotion) {
                if (securityTerminalBody) {
                    securityTerminalBody.innerHTML = securityTerminalLines
                        .map((line) => `<p class="security-terminal-line show${line.tone ? ` ${line.tone}` : ""}">${line.text}</p>`)
                        .join("");
                }
            } else {
                const securityObserver = new IntersectionObserver((entries) => {
                    const entry = entries[0];
                    if (!entry) return;

                    if (entry.isIntersecting) {
                        startSecurityAnimations();
                    } else {
                        stopSecurityGridAnimation();
                    }
                }, { threshold: 0.2 });

                securityObserver.observe(securityRemediationCard);
            }
        }

        window.addEventListener("beforeunload", () => {
            clearSecurityTerminalTimers();
            stopSecurityGridAnimation();
        });

        const mlInputs = {
            age: document.getElementById("mlAge"),
            bilirubin: document.getElementById("mlBilirubin"),
            albumin: document.getElementById("mlAlbumin"),
            alkphos: document.getElementById("mlAlkphos"),
            alt: document.getElementById("mlAlt")
        };

        const mlDisplays = {
            age: document.getElementById("mlAgeVal"),
            bilirubin: document.getElementById("mlBilirubinVal"),
            albumin: document.getElementById("mlAlbuminVal"),
            alkphos: document.getElementById("mlAlkphosVal"),
            alt: document.getElementById("mlAltVal")
        };

        const mlResultLabel = document.getElementById("mlResultLabel");
        const mlConfidenceFill = document.getElementById("mlConfidenceFill");
        const mlConfidenceText = document.getElementById("mlConfidenceText");

        function sigmoid(x) {
            return 1 / (1 + Math.exp(-x));
        }

        function normalizeInput(value, min, max) {
            return (value - min) / (max - min);
        }

        function runMockMlPrediction() {
            if (!mlInputs.age || !mlInputs.bilirubin || !mlInputs.albumin || !mlInputs.alkphos || !mlInputs.alt) return;

            const features = {
                age: Number(mlInputs.age.value),
                bilirubin: Number(mlInputs.bilirubin.value),
                albumin: Number(mlInputs.albumin.value),
                alkphos: Number(mlInputs.alkphos.value),
                alt: Number(mlInputs.alt.value)
            };

            Object.keys(mlDisplays).forEach((key) => {
                if (mlDisplays[key]) {
                    mlDisplays[key].textContent = String(features[key]);
                }
            });

            const x = {
                age: normalizeInput(features.age, 18, 90),
                bilirubin: normalizeInput(features.bilirubin, 0.2, 8),
                albumin: normalizeInput(features.albumin, 2, 5.5),
                alkphos: normalizeInput(features.alkphos, 80, 450),
                alt: normalizeInput(features.alt, 8, 180)
            };

            const modelScores = {
                logistic: sigmoid(-0.8 + 0.9 * x.age + 1.25 * x.bilirubin - 1.05 * x.albumin + 0.52 * x.alkphos + 0.35 * x.alt),
                randomForest: sigmoid(-0.65 + 1.1 * x.bilirubin - 0.9 * x.albumin + 0.62 * x.alkphos + 0.41 * x.alt + 0.18 * x.age),
                svm: sigmoid(-0.72 + 0.82 * x.age + 1.02 * x.bilirubin - 0.95 * x.albumin + 0.48 * x.alt),
                xgboost: sigmoid(-0.62 + 1.35 * x.bilirubin - 1.15 * x.albumin + 0.72 * x.alkphos + 0.54 * x.alt + 0.15 * x.age),
                neuralNet: sigmoid(-0.68 + 1.08 * x.bilirubin - 1.0 * x.albumin + 0.57 * x.alkphos + 0.66 * x.alt + 0.2 * x.age)
            };

            const ensembleScore =
                modelScores.logistic * 0.14 +
                modelScores.randomForest * 0.2 +
                modelScores.svm * 0.16 +
                modelScores.xgboost * 0.3 +
                modelScores.neuralNet * 0.2;

            const confidence = Math.round(ensembleScore * 100);

            let label = "Prediction: Moderate Risk";
            if (confidence < 35) label = "Prediction: Low Risk";
            if (confidence >= 65) label = "Prediction: High Risk";

            if (mlResultLabel) mlResultLabel.textContent = label;
            if (mlConfidenceFill) mlConfidenceFill.style.width = `${confidence}%`;
            if (mlConfidenceText) mlConfidenceText.textContent = `Confidence: ${confidence}%`;
        }

        Object.values(mlInputs).forEach((input) => {
            if (!input) return;
            input.addEventListener("input", runMockMlPrediction);
        });
        runMockMlPrediction();

        const terminalForm = document.getElementById("terminalContactForm");
        const terminalOutput = document.getElementById("terminalOutput");
        const terminalSubmit = document.getElementById("terminalSubmit");
        const contactNameInput = document.getElementById("contactName");
        const contactEmailInput = document.getElementById("contactEmail");
        const contactMessageInput = document.getElementById("contactMessage");
        const contactWebsiteInput = document.getElementById("contactWebsite");
        const contactNameError = document.getElementById("contactNameError");
        const contactEmailError = document.getElementById("contactEmailError");
        const contactMessageError = document.getElementById("contactMessageError");

        if (typeof window.emailjs !== "undefined") {
            try {
                window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
            } catch (error) {
                console.warn("EmailJS init failed:", error?.message || error);
            }
        }

        if (
            terminalForm && terminalOutput && terminalSubmit &&
            contactNameInput && contactEmailInput && contactMessageInput &&
            contactNameError && contactEmailError && contactMessageError
        ) {
            let pendingRetryPayload = null;
            let awaitingRetryDecision = false;
            let sendInFlight = false;

            const delay = (ms) => new Promise((resolve) => {
                setTimeout(resolve, ms);
            });

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            function clearFieldError(input, errorNode) {
                errorNode.textContent = "";
                input.classList.remove("input-shake");
            }

            function setFieldError(input, errorNode, message) {
                errorNode.textContent = message;
                input.classList.remove("input-shake");
                void input.offsetWidth;
                input.classList.add("input-shake");
            }

            function clearAllValidationErrors() {
                clearFieldError(contactNameInput, contactNameError);
                clearFieldError(contactEmailInput, contactEmailError);
                clearFieldError(contactMessageInput, contactMessageError);
            }

            function appendTerminalLine(text, tone = "normal") {
                const line = document.createElement("span");
                line.className = `terminal-line${tone === "normal" ? "" : ` ${tone}`}`;
                line.textContent = text;
                terminalOutput.appendChild(line);
            }

            function clearTerminalOutput() {
                terminalOutput.innerHTML = "";
            }

            function validateContactFields() {
                clearAllValidationErrors();
                let valid = true;

                const nameValue = contactNameInput.value.trim();
                const emailValue = contactEmailInput.value.trim();
                const messageValue = contactMessageInput.value.trim();

                if (nameValue.length < 2) {
                    setFieldError(contactNameInput, contactNameError, "Name must be at least 2 characters.");
                    valid = false;
                }

                if (!emailRegex.test(emailValue)) {
                    setFieldError(contactEmailInput, contactEmailError, "Enter a valid email address.");
                    valid = false;
                }

                if (messageValue.length < 20) {
                    setFieldError(contactMessageInput, contactMessageError, "Message must be at least 20 characters.");
                    valid = false;
                }

                return valid;
            }

            async function runTransmissionAnimation() {
                clearTerminalOutput();
                appendTerminalLine("> Initializing secure channel...");
                await delay(800);
                appendTerminalLine("> Encrypting payload...");
                await delay(800);
                appendTerminalLine("> Transmitting...");
                await delay(800);
            }

            async function sendViaEmailJs(payload) {
                if (!isEmailJsConfigured()) {
                    throw new Error("EmailJS is not configured.");
                }

                const templateParams = {
                    from_name: payload.name,
                    from_email: payload.email,
                    reply_to: payload.email,
                    message: payload.message
                };

                return window.emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    templateParams,
                    { publicKey: EMAILJS_PUBLIC_KEY }
                );
            }

            async function executeContactSend(payload) {
                sendInFlight = true;
                terminalSubmit.disabled = true;

                try {
                    await runTransmissionAnimation();
                    await sendViaEmailJs(payload);
                    appendTerminalLine("> Message delivered. Status: 200 OK ✓", "success");
                    burstConfetti(150, 0.85, -16);
                    pendingRetryPayload = null;
                    awaitingRetryDecision = false;
                    terminalForm.reset();
                    clearAllValidationErrors();
                } catch (error) {
                    if (!navigator.onLine && isEmailJsConfigured() && "serviceWorker" in navigator) {
                        queueContactPayloadForSync(payload);
                        appendTerminalLine("> Offline detected. Message queued for background sync.", "success");
                        appendTerminalLine("> It will be sent automatically once you're online.", "success");
                        pendingRetryPayload = null;
                        awaitingRetryDecision = false;
                        terminalForm.reset();
                        clearAllValidationErrors();
                    } else {
                        void error;
                        appendTerminalLine("> ERROR: Transmission failed. Retry? [Y/N]", "error");
                        pendingRetryPayload = payload;
                        awaitingRetryDecision = true;
                    }
                } finally {
                    sendInFlight = false;
                    terminalSubmit.disabled = false;
                }
            }

            [contactNameInput, contactEmailInput, contactMessageInput].forEach((input) => {
                input.addEventListener("input", () => {
                    if (input === contactNameInput) clearFieldError(contactNameInput, contactNameError);
                    if (input === contactEmailInput) clearFieldError(contactEmailInput, contactEmailError);
                    if (input === contactMessageInput) clearFieldError(contactMessageInput, contactMessageError);
                });
            });

            terminalForm.addEventListener("submit", async (event) => {
                event.preventDefault();
                if (sendInFlight) return;

                if (contactWebsiteInput && contactWebsiteInput.value.trim().length > 0) {
                    clearTerminalOutput();
                    appendTerminalLine("> Request blocked by spam filter.", "error");
                    return;
                }

                if (!validateContactFields()) {
                    clearTerminalOutput();
                    appendTerminalLine("> Validation failed. Correct highlighted fields.", "error");
                    return;
                }

                awaitingRetryDecision = false;
                pendingRetryPayload = {
                    name: contactNameInput.value.trim(),
                    email: contactEmailInput.value.trim(),
                    message: contactMessageInput.value.trim()
                };

                if (!navigator.onLine && isEmailJsConfigured() && "serviceWorker" in navigator) {
                    clearTerminalOutput();
                    appendTerminalLine("> Network unavailable. Queueing message for sync...");
                    queueContactPayloadForSync(pendingRetryPayload);
                    appendTerminalLine("> Queued successfully. It will send when connectivity returns.", "success");
                    pendingRetryPayload = null;
                    terminalForm.reset();
                    clearAllValidationErrors();
                    return;
                }

                await executeContactSend(pendingRetryPayload);
            });

            document.addEventListener("keydown", async (event) => {
                if (!awaitingRetryDecision || sendInFlight || !pendingRetryPayload) return;

                const key = event.key.toLowerCase();
                if (key === "y") {
                    awaitingRetryDecision = false;
                    appendTerminalLine("> Retrying transmission...");
                    await executeContactSend(pendingRetryPayload);
                } else if (key === "n") {
                    awaitingRetryDecision = false;
                    pendingRetryPayload = null;
                    appendTerminalLine("> Retry cancelled.");
                }
            });
        }

        const pdfModal = document.getElementById("pdfModal");
        const pdfViewer = document.getElementById("pdfViewer");
        const modalTitle = document.getElementById("modalTitle");
        const closeModalBtn = document.getElementById("closeModalBtn");

        document.querySelectorAll(".view-pdf-button").forEach((btn) => {
            btn.addEventListener("click", () => {
                pdfViewer.src = btn.dataset.pdfUrl;
                modalTitle.textContent = btn.dataset.title || "Document Viewer";
                pdfModal.classList.add("show");
                document.body.style.overflow = "hidden";
                pdfModal.setAttribute("aria-hidden", "false");
            });
        });

        function closeModal() {
            pdfModal.classList.remove("show");
            pdfViewer.src = "";
            document.body.style.overflow = "";
            pdfModal.setAttribute("aria-hidden", "true");
        }

        closeModalBtn.addEventListener("click", closeModal);
        pdfModal.addEventListener("click", (e) => {
            if (e.target === pdfModal) closeModal();
        });
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && pdfModal.classList.contains("show")) {
                closeModal();
            }
        });
    
