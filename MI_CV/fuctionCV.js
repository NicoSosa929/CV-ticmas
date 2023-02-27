
const changeThemeBtn = document.getElementById('change-theme-btn');
const body = document.querySelector('body');

changeThemeBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
})



const printBtn = document.getElementById('print-btn');

printBtn.addEventListener('click', function() {
  window.print();
});

document.getElementById("Ocultar1").addEventListener("click", function(){
    document.getElementById("ocultar_pre").style.display = "none";

})


const backToTopBtn = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo(0, 0);
});





