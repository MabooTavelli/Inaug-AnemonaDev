// Popup de contato
const btn    = document.querySelector('.contact-btn');
const modal  = document.getElementById('contactModal');
const close  = document.getElementById('closeModal');
btn.addEventListener('click', ()  => modal.classList.add('active'));
close.addEventListener('click', ()=> modal.classList.remove('active'));
window.addEventListener('click', e => e.target===modal && modal.classList.remove('active'));

// Gera as estrelinhas
const stars = document.getElementById('starContainer');
for (let i=0; i<80; i++) {
  const s = document.createElement('span');
  s.className = 'star';
  const x = Math.random()*100;
  const y = 100 + Math.random()*10;
  const sz= 1 + Math.random()*3;
  const sp= 5 + Math.random()*10;
  s.style.cssText = `
    width:${sz}px; height:${sz}px;
    left:${x}vw; top:${y}vh;
    --star-speed:${sp}s;
  `;
  stars.appendChild(s);
}