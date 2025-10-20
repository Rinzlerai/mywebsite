// Floating glowing particles
const numParticles = 30;
for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  document.body.appendChild(particle);

  const size = Math.random() * 6 + 3;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
}

const style = document.createElement("style");
style.textContent = `
  .particle {
    position: fixed;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 10px #fff;
    animation: floatUp 10s infinite ease-in-out;
  }
  @keyframes floatUp {
    0% { transform: translateY(0) scale(1); opacity: 0.8; }
    50% { transform: translateY(-20px) scale(1.3); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 0.7; }
  }
`;
document.head.appendChild(style);
const numParticles = 30;
for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  document.body.appendChild(particle);

  const size = Math.random() * 6 + 3;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
}

const style = document.createElement("style");
style.textContent = `
  .particle {
    position: fixed;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 10px #fff;
    animation: floatUp 10s infinite ease-in-out;
  }
  @keyframes floatUp {
    0% { transform: translateY(0) scale(1); opacity: 0.8; }
    50% { transform: translateY(-20px) scale(1.3); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 0.7; }
  }
`;
document.head.appendChild(style);
