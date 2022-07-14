const inner = document.querySelector('.inner');
const topGate = document.getElementById('topGate');
const bottomGate = document.getElementById('bottomGate');
const mobileMenuIcon = document.querySelector('.mobileMenuIcon');
const mobileInnerNav = document.querySelector('.mobileInnerNav');
const linkContainers = document.querySelectorAll('.linkContainer');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    topGate.classList.add('fadeIn');
    bottomGate.classList.add('fadeIn');
  }, 100);
  setTimeout(() => {
    topGate.classList.remove('fadeIn');
    bottomGate.classList.remove('fadeIn');
    topGate.classList.add('gateGrow');
    bottomGate.classList.add('gateGrow');
  }, 400);
  setTimeout(() => {
    topGate.classList.remove('gateGrow');
    bottomGate.classList.remove('gateGrow');
    topGate.classList.add('slideOutTop');
    bottomGate.classList.add('slideOutBottom');
    inner.classList.add('fadeIn');
  }, 1000);
});

mobileMenuIcon.addEventListener('mousedown', () => {
  mobileInnerNav.classList.toggle('menuSlideIn');
  mobileInnerNav.classList.toggle('menuSlideOut');
  setTimeout(() => {
    mobileMenuIcon.classList.toggle('fa-spin');
    linkContainers.forEach(container => {
      container.classList.toggle('menuSlideIn');
    container.classList.toggle('menuSlideOut');
    })
    
  }, 200);
});
