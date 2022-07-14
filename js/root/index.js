const mainLogo = document.getElementById('mainLogo');
const tapToStart = document.getElementById('tapToStart');

mainLogo.addEventListener('mousedown', () => {
  mainLogo.classList.remove('flickerIn');
  tapToStart.classList.remove('blink');
  setTimeout(() => {
    mainLogo.classList.add('logoExit');
    tapToStart.classList.add('flickerOut');
  }, 400);
});
const delay = () => {
  setTimeout(() => {
    mainLogo.classList.remove('logoExit');
    tapToStart.classList.remove('flickerOut');
    mainLogo.classList.add('flickerIn');
    tapToStart.classList.add('blink');
    window.location = './views/home.html';
  }, 1000);
};
