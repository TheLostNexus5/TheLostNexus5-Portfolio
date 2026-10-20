const cursor = document.querySelector('.custom-cursor');
let lastTime = performance.now();
const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

let maxW = window.innerWidth;
let maxH = window.innerHeight;
window.addEventListener('resize', () => {
  maxW = window.innerWidth;
  maxH = window.innerHeight;
});

let clientX = -500;
let clientY = 0;
let clickOffsetY = 0

let lerpX = 0;
let lerpY = 0;
let sizeLerpX = 0; 
let sizeLerpY = 0;

let firstFrame = false;
let isOffScreen = false;

function update(currentTime) {
  let deltaTime = (currentTime - lastTime) / 1000;

  const radiusX = firstFrame ? sizeLerpX / 2 : 16;
  const radiusY = firstFrame ? sizeLerpY / 2 : 16;

  let targetX = clientX;
  let targetY = clientY;

  if (!isOffScreen) {
    targetX = Math.max(radiusX, Math.min(maxW - radiusX, clientX));
    targetY = Math.max(radiusY, Math.min(maxH - radiusY, clientY));
  }

  lerpX = lerp(lerpX, targetX, 1.0);
  lerpY = lerp(lerpY, targetY, 1.0);

  cursor.style.left = (lerpX) + 'px';
  cursor.style.top = (lerpY + clickOffsetY) + 'px';

  if (firstFrame) {
    sizeLerpX = lerp(sizeLerpX, 32, deltaTime * 12.0);
    sizeLerpY = lerp(sizeLerpY, 32, deltaTime * 12.0);

    cursor.style.width = sizeLerpX + 'px';
    cursor.style.height = sizeLerpY + 'px';
  }
  
  lastTime = currentTime;
  self.requestAnimationFrame(update);
}

document.addEventListener('mousemove', (e) => {
  isOffScreen = false;

  if (!firstFrame) {
    lerpX = e.clientX;
    lerpY = e.clientY;
    firstFrame = true;
  }
  clientX = e.clientX;
  clientY = e.clientY;
});
document.addEventListener('mousedown', () => {
  clickOffsetY = 2;
})
document.addEventListener('mouseup', () => {
  clickOffsetY = 0;
  
})
document.addEventListener('mouseleave', () => {
  isOffScreen = true;
});
document.addEventListener('mouseover', (e) => {
  const link = e.target.closest('a, .projects-container, .dark-light-switch, .filter-btn'); 
  
  if (link) {
    targetWidth = 56;
    targetHeight = 56;      
    cursor.classList.add('is-hovering'); 
  }
});
document.addEventListener('mouseout', (e) => {
  const link = e.target.closest('a, .projects-container, .dark-light-switch, .filter-btn');
  if (link) {
    targetWidth = 32;     
    targetHeight = 32;      
    cursor.classList.remove('is-hovering');
  }
});
self.requestAnimationFrame(update);
