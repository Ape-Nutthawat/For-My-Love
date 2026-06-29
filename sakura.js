(() => {
  const canvas = document.getElementById("sakuraCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }

  resize();
  addEventListener("resize", resize);

  const petals = [];

  class Petal {
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = -Math.random() * canvas.height;
      this.size = 6 + Math.random() * 10;
      this.speed = 1 + Math.random() * 2;
      this.swing = Math.random() * 2;
      this.rotate = Math.random() * 360;
      this.spin = -2 + Math.random() * 4;
    }

    constructor() { this.reset(); }

    update() {
      this.y += this.speed;
      this.x += Math.sin(this.y * 0.01) * this.swing;
      this.rotate += this.spin;

      if (this.y > canvas.height) this.reset();
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotate);

      ctx.fillStyle = "#ffd6e7";
      ctx.beginPath();
      ctx.arc(0, 0, this.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }

  for (let i = 0; i < 70; i++) petals.push(new Petal());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => (p.update(), p.draw()));
    requestAnimationFrame(animate);
  }

  animate();
})();