// =========================
// APP CONTROLLER
// =========================

window.addEventListener('load', () => {
  const loading = document.querySelector('.loading');

  setTimeout(() => {
    loading.style.opacity = '0';

    setTimeout(() => {
      loading.style.display = 'none';
    }, 600);
  }, 1200);
});

// =========================
// TYPING
// =========================

(() => {
  const typing = document.getElementById('typing');
  const text = 'มีบางอย่างที่เค้าตั้งใจทำให้ให้ที่รัก ❤️';
  let i = 0;

  function type() {
    if (!typing) return;
    if (i < text.length) {
      typing.textContent += text[i++];
      setTimeout(type, 60);
    }
  }

  type();
})();

// =========================
// HERO FLOW
// =========================

(() => {
  const hero = document.getElementById('hero');
  const start = document.getElementById('start');
  const letterSection = document.getElementById('letterSection');

  start?.addEventListener('click', () => {
    hero.style.opacity = '0';

    setTimeout(() => {
      hero.style.display = 'none';
      letterSection.classList.remove('hidden');
      letterSection.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  });
})();

// =========================
// LETTER TYPING
// =========================

(() => {
  const el = document.getElementById('letterText');

  const msg = `
ขอบคุณที่เข้ามาเป็นรอยยิ้มของเค้า
ขอบคุณที่อยู่ข้างกันเสมอ
ถึงเราจะทะเลาะกันบ้าง ไม่เข้าใจกันบ้าง
แต่เค้าก็รักมายด์ไม่เปลี่ยนเลย สุขสันต์วันครบรอบครับ เค้ารักมายด์ที่สุดเลยยยยยย ❤️
`;

  let i = 0;

  window.startLetterTyping = function () {
    if (!el) return;

    const t = setInterval(() => {
      el.textContent += msg[i++];
      if (i >= msg.length) clearInterval(t);
    }, 35);
  };
})();

// =========================
// ENVELOPE + FLOW
// =========================

(() => {
  const envelope = document.getElementById('envelope');
  const btn = document.getElementById('openBtn');

  btn?.addEventListener('click', () => {
    envelope.classList.add('open');
    btn.style.display = 'none';

    launchHearts();
    startLetterTyping();

    setTimeout(() => {
      document.getElementById('gallery')?.classList.remove('hidden');
    }, 3500);
  });
})();

// hearts effect
function launchHearts() {
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 80);
  }
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';

  heart.style.left = Math.random() * 100 + 'vw';

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

// สร้างต่อเนื่อง
setInterval(createHeart, 500);

const envelope = document.getElementById('envelope');
const bgm = document.getElementById('bgm');

window.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
bgm.volume = 0;
  bgm.play();

  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.4) {
      v += 0.02;
      bgm.volume = v;
    } else {
      clearInterval(fade);
    }
  }, 100);
  bgm.play().catch((err) => {
    console.log('เล่นเพลงไม่ได้:', err);
  });

}, { once: true });

