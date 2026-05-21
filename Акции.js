document.addEventListener('DOMContentLoaded', function() {
  const carCards = document.querySelectorAll('.car-card');

  carCards.forEach(card => {
    const mainImage = card.querySelector('.main-image');
    const thumbnails = card.querySelectorAll('.thumbnail');
    const originalSrc = mainImage.src;

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        mainImage.src = this.dataset.large;
        mainImage.alt = this.alt;
        thumbnails.forEach(t => t.style.opacity = '1');
        this.style.opacity = '0.6';
      });
    });

    mainImage.addEventListener('click', function() {
      mainImage.src = originalSrc;
      mainImage.alt = 'Bentley Bentayga';
      thumbnails.forEach(t => t.style.opacity = '1');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'particle-background';
  document.body.appendChild(particleContainer);

  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 2 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    const duration = Math.random() * 20 + 20;
    particle.style.animationDuration = `${duration}s`;

    particleContainer.appendChild(particle);
  }
});