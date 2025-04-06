const carousel = document.getElementById('carousel');
const template = document.getElementById('card-template');

for (let i = 1; i <= 15; i++) {
  const clone = template.content.cloneNode(true);
  clone.querySelector('h3').innerText = `Capability ${i}`;
  clone.querySelector('img').src = `assets/icons/default.svg`;
  carousel.appendChild(clone);
}

function scrollToGroup(index) {
  const cardWidth = document.querySelector('.card').offsetWidth + 16;
  carousel.scrollLeft = index * cardWidth * 3;
}

function scrollToService(serviceIndex) {
  scrollToGroup(serviceIndex * 2);
}