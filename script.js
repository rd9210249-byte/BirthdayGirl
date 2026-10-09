// ==========================================
// Love In Every Language - Perfect Heart Engine
// ==========================================

// Mathematically calibrated row structure mirroring reference photo
// Each row specifies exact width percentage and cleft gap percentage
const HEART_ROWS_CONFIG = [
  // Top Lobes (Split Rows)
  {
    type: "split",
    widthPct: 76,
    gapPct: 28,
    left: ["Ich liebe dich", "Ti amo"],
    right: ["Σ' αγαπώ", "Te amo"],
    allowedCategory: "short"
  },
  {
    type: "split",
    widthPct: 86,
    gapPct: 20,
    left: ["愛してる", "Aku cinta kamu"],
    right: ["Anh yêu em", "Ik hou van jou", "사랑해"],
    allowedCategory: "short"
  },
  {
    type: "split",
    widthPct: 93,
    gapPct: 12,
    left: ["ฉันรักเธอ", "Te amo", "Je t'aime", "사랑해"],
    right: ["Seni seviyorum", "Ti amo", "사랑해"],
    allowedCategory: "short"
  },
  {
    type: "split",
    widthPct: 96,
    gapPct: 6,
    left: ["Jag älskar dig", "मैं तुमसे प्यार करता हूँ"],
    right: ["Ich liebe dich", "Я тебе кохаю", "ฉันรักเธอ", "사랑해"],
    allowedCategory: "all"
  },
  {
    type: "split",
    widthPct: 98,
    gapPct: 3,
    left: ["मैं तुमसे प्यार करता हूँ", "Eu te amo", "我爱你", "ฉันรักเธอ"],
    right: ["Te amo", "Ik hou van jou", "Seni seviyorum", "我爱你"],
    allowedCategory: "all"
  },

  // Heart Chest & Broad Midsection (Single Merged Rows)
  {
    type: "single",
    widthPct: 100,
    items: ["Я тебя люблю", "Eu te amo", "Te amo", "I love you", "Я тебя люблю", "Aku cinta kamu", "Seni seviyorum", "我爱你"],
    allowedCategory: "all"
  },
  {
    type: "single",
    widthPct: 98,
    items: ["ฉันรักเธอ", "Jag älskar dig", "Ich liebe dich", "Σ' αγαπώ", "Ik hou van jou", "Σ' αγαπώ", "I love you", "Eu te amo"],
    allowedCategory: "all"
  },
  {
    type: "single",
    widthPct: 96,
    items: ["मैं तुमसे प्यार करता हूँ", "사랑해", "Я тебе кохаю", "Kocham cię", "Ich liebe dich", "我爱你", "Anh yêu em", "Ich liebe dich"],
    allowedCategory: "all"
  },
  {
    type: "single",
    widthPct: 93,
    items: ["Я тебе кохаю", "Я тебя люблю", "Je t'aime", "사랑해", "Σ' αγαπώ", "Ik hou van jou", "Jag älskar dig"],
    allowedCategory: "all"
  },
  {
    type: "single",
    widthPct: 89,
    items: ["Je t'aime", "Te amo", "Σ' αγαπώ", "愛してる", "사랑해", "Ik hou van jou", "ฉันรักเธอ", "Aku cinta kamu", "我爱你"],
    allowedCategory: "all"
  },
  {
    type: "single",
    widthPct: 84,
    items: ["Σ' αγαπώ", "Jag älskar dig", "I love you", "Je t'aime", "Kocham cię", "Te amo", "Eu te amo", "ฉันรักเธอ"],
    allowedCategory: "all"
  },
  {
    type: "single",
    widthPct: 77,
    items: ["Seni seviyorum", "ฉันรักเธอ", "I love you", "Aku cinta kamu", "사랑해", "Je t'aime", "Ti amo", "ฉันรักเธอ"],
    allowedCategory: "all"
  },
  {
    type: "single",
    widthPct: 69,
    items: ["사랑해", "Aku cinta kamu", "Te amo", "Ti amo", "Σ' αγαπώ", "Eu te amo", "Seni seviyorum"],
    allowedCategory: "all"
  },
  {
    type: "single",
    widthPct: 61,
    items: ["사랑해", "Ti amo", "Ich liebe dich", "ฉันรักเธอ", "Σ' αγαπώ", "愛してる", "Kocham cię"],
    allowedCategory: "all"
  },
  {
    type: "single",
    widthPct: 53,
    items: ["Я тебе кохаю", "Te amo", "사랑해", "Ti amo", "I love you", "Eu te amo"],
    allowedCategory: "all"
  },

  // Lower Taper to Bottom Needle Tip
  {
    type: "single",
    widthPct: 44,
    items: ["Ti amo", "我爱你", "Σ' αγαπώ", "Ich liebe dich", "Anh yêu em"],
    allowedCategory: "short"
  },
  {
    type: "single",
    widthPct: 36,
    items: ["Kocham cię", "Ich liebe dich", "愛してる", "Te amo"],
    allowedCategory: "short"
  },
  {
    type: "single",
    widthPct: 28,
    items: ["Ik hou van jou", "Ti amo", "Anh yêu em"],
    allowedCategory: "short"
  },
  {
    type: "single",
    widthPct: 22,
    items: ["Ti amo", "愛してる", "Anh yêu em"],
    allowedCategory: "short"
  },
  {
    type: "single",
    widthPct: 16,
    items: ["Ich liebe dich", "Ti amo"],
    allowedCategory: "short"
  },
  {
    type: "single",
    widthPct: 12,
    items: ["Ti amo", "Je t'aime"],
    allowedCategory: "short"
  },
  {
    type: "single",
    widthPct: 8,
    items: ["사랑해"],
    allowedCategory: "short"
  },
  {
    type: "single",
    widthPct: 6,
    items: ["사랑해"],
    allowedCategory: "short"
  }
];

// Pre-classify languages by phrase length to guarantee no overflow in narrow rows
const SHORT_LANGUAGES = LOVE_LANGUAGES.filter(item => item.phrase.length <= 13);
const ALL_LANGUAGES = LOVE_LANGUAGES;

// Global State
let heartElements = [];
let audioCtx = null;
let isAudioPlaying = false;
let audioTimer = null;
let morphInterval = null;
let waveInterval = null;

// DOM Elements
const heartGrid = document.getElementById("heart-grid");
const popover = document.getElementById("word-popover");
const dedicationBadge = document.getElementById("dedication-badge");
const recipientNameSpan = document.getElementById("recipient-name");
const nameModal = document.getElementById("name-modal");
const nameInput = document.getElementById("name-input");
const saveNameBtn = document.getElementById("save-name-btn");
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const soundIcon = document.getElementById("sound-icon");

// ------------------------------------------
// Build Heart Grid with Exact Mathematical Constraints
// ------------------------------------------
function buildHeartGrid() {
  heartGrid.innerHTML = "";
  heartElements = [];

  HEART_ROWS_CONFIG.forEach((rowDef, rowIndex) => {
    const rowEl = document.createElement("div");
    rowEl.className = `heart-row ${rowDef.type}-row`;
    rowEl.dataset.row = rowIndex;
    rowEl.style.setProperty("--row-width", `${rowDef.widthPct}%`);

    if (rowDef.type === "split") {
      rowEl.style.setProperty("--cleft-gap", `${rowDef.gapPct}%`);
      rowEl.style.setProperty("--cleft-gap-mobile", `${Math.round(rowDef.gapPct * 0.6)}%`);

      // Left Lobe
      const leftLobe = document.createElement("div");
      leftLobe.className = "lobe-container lobe-left";
      rowDef.left.forEach((initPhrase, colIdx) => {
        const item = createLoveItem(initPhrase, rowIndex, colIdx, rowDef.allowedCategory);
        leftLobe.appendChild(item);
      });

      // Right Lobe
      const rightLobe = document.createElement("div");
      rightLobe.className = "lobe-container lobe-right";
      rowDef.right.forEach((initPhrase, colIdx) => {
        const item = createLoveItem(initPhrase, rowIndex, colIdx, rowDef.allowedCategory);
        rightLobe.appendChild(item);
      });

      rowEl.appendChild(leftLobe);
      rowEl.appendChild(rightLobe);
    } else {
      // Single continuous row
      rowDef.items.forEach((initPhrase, colIdx) => {
        const item = createLoveItem(initPhrase, rowIndex, colIdx, rowDef.allowedCategory);
        rowEl.appendChild(item);
      });
    }

    heartGrid.appendChild(rowEl);
  });

  // Fit and guarantee boundary compliance
  requestAnimationFrame(fitAllRows);
}

// Create an individual love word badge
function createLoveItem(initialPhrase, rowIdx, colIdx, category) {
  const span = document.createElement("span");
  span.className = "love-item";
  span._category = category;

  // Stagger delay for continuous diagonal text ember shimmer wave
  const stagger = ((rowIdx * 0.16 + colIdx * 0.09) % 4.2).toFixed(2);
  span.style.setProperty("--stagger-delay", `${stagger}s`);

  // Match initial phrase from dictionary or fallback
  let langObj = LOVE_LANGUAGES.find(l => l.phrase === initialPhrase);
  if (!langObj) {
    langObj = (category === "short" ? SHORT_LANGUAGES : ALL_LANGUAGES)[0];
  }

  setElementLanguage(span, langObj);

  // Interaction handlers (Touch & Click friendly)
  span.addEventListener("mouseenter", (e) => showPopover(e, span));
  span.addEventListener("mouseleave", hidePopover);
  span.addEventListener("click", (e) => {
    triggerHeartBurst(e.clientX || (window.innerWidth / 2), e.clientY || (window.innerHeight / 2));
    speakPhrase(span._langData);
    morphSingleElement(span);
  });

  heartElements.push({
    el: span,
    row: rowIdx,
    col: colIdx,
    category: category
  });

  return span;
}

// Bind language data
function setElementLanguage(el, langObj) {
  el._langData = langObj;
  el.textContent = langObj.phrase;
  el.setAttribute("data-lang", langObj.lang);
  el.setAttribute("title", `${langObj.lang}: ${langObj.phrase}`);
}

// Mathematical auto-fit to guarantee NO text exceeds row bounds on any device
function fitAllRows() {
  const rows = document.querySelectorAll(".heart-row");
  rows.forEach(row => {
    row.style.transform = "none";
    const available = row.clientWidth;
    const contentWidth = row.scrollWidth;
    if (contentWidth > available + 1 && available > 0) {
      const scale = Math.max(0.72, (available / contentWidth) * 0.98);
      row.style.transform = `scale(${scale.toFixed(3)})`;
    }
  });
}

// ------------------------------------------
// Smooth & Calm Dynamic Language Morphing
// ------------------------------------------
function startMorphingLoop() {
  if (morphInterval) clearInterval(morphInterval);

  // Every 1.8 seconds, gently morph 1 random item with soft luminous dissolve
  morphInterval = setInterval(() => {
    if (heartElements.length === 0) return;
    const target = heartElements[Math.floor(Math.random() * heartElements.length)];
    if (target && !target.el.classList.contains("morphing")) {
      morphSingleElement(target.el);
    }
  }, 1800);
}

// Morph element with silky smooth dissolve & glow
function morphSingleElement(el) {
  if (!el || el.classList.contains("morphing")) return;

  el.classList.add("morphing");

  // Swap language when opacity is at its softest (450ms)
  setTimeout(() => {
    const list = el._category === "short" ? SHORT_LANGUAGES : ALL_LANGUAGES;
    let nextLang;
    do {
      nextLang = list[Math.floor(Math.random() * list.length)];
    } while (nextLang.lang === el._langData.lang && list.length > 1);

    setElementLanguage(el, nextLang);
  }, 450);

  // Animation completes smoothly at 1300ms
  setTimeout(() => {
    el.classList.remove("morphing");
  }, 1300);
}

// Wave Animation: Radiant light wave cascades gently across rows
function triggerLoveWave() {
  if (heartElements.length === 0) return;

  const rowGroups = {};
  heartElements.forEach(item => {
    if (!rowGroups[item.row]) rowGroups[item.row] = [];
    rowGroups[item.row].push(item);
  });

  const rowKeys = Object.keys(rowGroups).map(Number).sort((a, b) => a - b);

  rowKeys.forEach((rowIdx, step) => {
    setTimeout(() => {
      rowGroups[rowIdx].forEach(item => {
        item.el.classList.add("highlight-wave");
        setTimeout(() => {
          item.el.classList.remove("highlight-wave");
        }, 800);
      });
    }, step * 80);
  });
}

function startWaveLoop() {
  if (waveInterval) clearInterval(waveInterval);
  waveInterval = setInterval(triggerLoveWave, 16000);
}

// ------------------------------------------
// Interactive Tooltip & Speech Synthesis
// ------------------------------------------
function showPopover(e, el) {
  const lang = el._langData;
  if (!lang) return;

  document.getElementById("popover-flag").textContent = lang.flag;
  document.getElementById("popover-lang").textContent = lang.lang;
  document.getElementById("popover-phrase").textContent = lang.phrase;
  document.getElementById("popover-phon").textContent = lang.phon ? `Pronunciation: "${lang.phon}"` : "";

  const rect = el.getBoundingClientRect();
  popover.style.left = `${rect.left + rect.width / 2}px`;
  popover.style.top = `${rect.top}px`;
  popover.classList.add("visible");
}

function hidePopover() {
  popover.classList.remove("visible");
}

function speakPhrase(langObj) {
  if (!('speechSynthesis' in window) || !langObj) return;

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(langObj.phrase);
    utterance.lang = langObj.code || "en";
    utterance.rate = 0.9;
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn("Speech synthesis unavailable:", err);
  }
}

// ------------------------------------------
// Click Burst of Glowing Hearts
// ------------------------------------------
function triggerHeartBurst(clientX, clientY) {
  const heartSymbols = ["💖", "❤️", "💕", "✨", "💗", "💓"];
  const burstCount = 6;

  for (let i = 0; i < burstCount; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart-burst";
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    const dx = (Math.random() - 0.5) * 120;
    const rot = (Math.random() - 0.5) * 60;
    heart.style.left = `${clientX}px`;
    heart.style.top = `${clientY}px`;
    heart.style.setProperty("--dx", `${dx}px`);
    heart.style.setProperty("--rot", `${rot}deg`);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1600);
  }
}

// ------------------------------------------
// 3D Parallax Tilt Effect on Mouse Move
// ------------------------------------------
document.addEventListener("mousemove", (e) => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  const tiltX = -dy * 8;
  const tiltY = dx * 8;

  heartGrid.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
});

document.addEventListener("mouseleave", () => {
  heartGrid.style.transform = "rotateX(0deg) rotateY(0deg)";
});

// ------------------------------------------
// Background Canvas: Twinkling Stardust & Glowing Embers
// ------------------------------------------
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let stars = [];
let embers = [];
let canvasW = 0;
let canvasH = 0;

function resizeCanvas() {
  canvasW = canvas.width = window.innerWidth;
  canvasH = canvas.height = window.innerHeight;
  initStars();
  fitAllRows();
}

function initStars() {
  stars = [];
  const starCount = Math.floor((canvasW * canvasH) / 7000);
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvasW,
      y: Math.random() * canvasH,
      r: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2
    });
  }
}

function spawnEmber() {
  if (embers.length > 35) return;
  embers.push({
    x: Math.random() * canvasW,
    y: canvasH + 20,
    size: Math.random() * 3 + 1.5,
    speedY: Math.random() * 1.2 + 0.6,
    speedX: (Math.random() - 0.5) * 0.8,
    alpha: Math.random() * 0.6 + 0.4,
    life: 0,
    maxLife: Math.random() * 260 + 160
  });
}

function renderCanvas() {
  ctx.clearRect(0, 0, canvasW, canvasH);

  // Twinkling stars
  const time = Date.now() * 0.001;
  stars.forEach(s => {
    const twinkle = Math.sin(time * s.speed * 100 + s.phase) * 0.4 + 0.6;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 235, 245, ${s.alpha * twinkle})`;
    ctx.fill();
  });

  // Floating embers
  if (Math.random() < 0.25) spawnEmber();

  for (let i = embers.length - 1; i >= 0; i--) {
    const e = embers[i];
    e.y -= e.speedY;
    e.x += e.speedX;
    e.life++;

    const progress = e.life / e.maxLife;
    const currentAlpha = e.alpha * (1 - progress);

    ctx.beginPath();
    ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 60, 90, ${currentAlpha})`;
    ctx.shadowColor = "rgba(255, 40, 75, 0.8)";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;

    if (e.life >= e.maxLife || e.y < -30) {
      embers.splice(i, 1);
    }
  }

  requestAnimationFrame(renderCanvas);
}

// ------------------------------------------
// Ambient Sound Synthesizer (Web Audio API)
// ------------------------------------------
const CHORDS = [
  [261.63, 329.63, 392.00, 493.88], // Cmaj7
  [220.00, 261.63, 329.63, 392.00], // Am7
  [174.61, 220.00, 261.63, 329.63], // Fmaj7
  [196.00, 246.94, 293.66, 392.00]  // G6
];
let chordIndex = 0;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playRomanticChime() {
  if (!isAudioPlaying || !audioCtx) return;

  const chord = CHORDS[chordIndex % CHORDS.length];
  chordIndex++;

  chord.forEach((freq, noteIdx) => {
    setTimeout(() => {
      if (!isAudioPlaying) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 3.0);
    }, noteIdx * 280);
  });
}

function toggleAudio() {
  initAudio();
  isAudioPlaying = !isAudioPlaying;

  if (isAudioPlaying) {
    soundIcon.textContent = "🔊";
    playRomanticChime();
    audioTimer = setInterval(playRomanticChime, 3800);
  } else {
    soundIcon.textContent = "🔈";
    if (audioTimer) clearInterval(audioTimer);
  }
}

// ------------------------------------------
// Personalization
// ------------------------------------------
function setupPersonalization() {
  const params = new URLSearchParams(window.location.search);
  const toParam = params.get("to");

  if (toParam) {
    recipientNameSpan.textContent = decodeURIComponent(toParam);
  } else {
    const savedName = localStorage.getItem("love_heart_recipient");
    if (savedName) recipientNameSpan.textContent = savedName;
  }
}

function openNameModal() {
  nameInput.value = recipientNameSpan.textContent;
  nameModal.classList.add("active");
  setTimeout(() => nameInput.focus(), 100);
}

function saveName() {
  const val = nameInput.value.trim() || "My Love";
  recipientNameSpan.textContent = val;
  localStorage.setItem("love_heart_recipient", val);

  const url = new URL(window.location);
  url.searchParams.set("to", val);
  window.history.replaceState({}, "", url);

  nameModal.classList.remove("active");
  triggerHeartBurst(window.innerWidth / 2, window.innerHeight / 2);
}

// ------------------------------------------
// Bootstrapping
// ------------------------------------------
window.addEventListener("resize", resizeCanvas);
window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    resizeCanvas();
    fitAllRows();
  }, 150);
});

window.addEventListener("DOMContentLoaded", () => {
  resizeCanvas();
  renderCanvas();
  buildHeartGrid();
  startMorphingLoop();
  startWaveLoop();

  setupPersonalization();

  // Corner sound toggle
  soundToggleBtn.addEventListener("click", toggleAudio);

  // Dedication modal
  dedicationBadge.addEventListener("click", openNameModal);
  saveNameBtn.addEventListener("click", saveName);
  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveName();
  });

  // Modal Closers
  document.querySelectorAll(".modal-close, .modal-overlay").forEach(el => {
    el.addEventListener("click", (e) => {
      if (e.target === el) {
        nameModal.classList.remove("active");
      }
    });
  });

  // Gentle intro burst
  setTimeout(() => {
    triggerHeartBurst(window.innerWidth / 2, window.innerHeight / 2);
  }, 600);
});
