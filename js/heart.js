(() => {
  const canvas = document.getElementById("heartCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  let hearts = [];

  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }

  resize();
  addEventListener("resize", resize);

  class Heart {
    constructor() { this.reset(); }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 200;
      this.size = 8 + Math.random() * 18;
      this.speed = 0.5 + Math.random() * 1.5;
      this.alpha = 0.3 + Math.random() * 0.7;
      this.swing = Math.random() * 2;
      this.offset = Math.random() * 1000;
    }

    update() {
      this.y -= this.speed;
      this.x += Math.sin((this.y + this.offset) * 0.01) * this.swing;
      if (this.y < -40) this.reset();
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.scale(this.size / 20, this.size / 20);

      ctx.beginPath();
      ctx.arc(0, 0, 10, 0, Math.PI * 2);

      ctx.fillStyle = `rgba(255,100,160,${this.alpha})`;
      ctx.shadowColor = "#ff4d88";
      ctx.shadowBlur = 15;

      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 60; i++) hearts.push(new Heart());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => (h.update(), h.draw()));
    requestAnimationFrame(animate);
  }

  animate();
})();