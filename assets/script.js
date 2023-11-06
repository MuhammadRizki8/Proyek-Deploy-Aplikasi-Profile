// humberger nav
function HumbergerNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// sticky nav
window.onscroll = function () {
  myFunction();
  scrollUp();
};

var navbar = document.getElementById('myTopnav');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
function scrollUp() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById('btn-to-top').style.display = 'block';
  } else {
    document.getElementById('btn-to-top').style.display = 'none';
  }
}
function topUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
