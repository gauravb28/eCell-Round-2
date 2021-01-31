// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 75
      },
      800
    );
  }
});

// Changing services color
const toggle = document.querySelector('input');
let services = document.querySelector('#services');
let card = document.querySelectorAll('.card');
let button = document.querySelectorAll('.button');
let link = document.querySelectorAll('.button a');

toggle.addEventListener('click', colorChange);

function colorChange(e) {
  if (toggle.checked) {
    services.style.color = '#fff';
    services.style.background = '#000';
    for (let i=0; i<3; i++)
    card[i].style.background = '#333';
    for (let i=0; i<3; i++)
    button[i].style.background = '#444';
    for (let i=0; i<3; i++){
      link[i].style.background = '#cc0099';
      link[i].style.color = '#fff';
    }
  } else {
    services.style.color = '#000';
    services.style.background = '#fff';
    for (let i=0; i<3; i++)
    card[i].style.background = '#f4f4f4';
    for (let i=0; i<3; i++)
    button[i].style.background = '#ccc';
    for (let i=0; i<3; i++){
      link[i].style.background = '#ccc';
      link[i].style.color = '#cc0099';
    }
  }
}

// console.log(window.outerWidth);