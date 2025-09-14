
function toggleMenu(){
  document.querySelector('.nav').classList.toggle('open');
}
function yearNow(){
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;
}
document.addEventListener('DOMContentLoaded', yearNow);
