$(function(){
    $('.de-marquee-list').marquee({
        direction: 'left',
        duration: 50000,
        gap: 0,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });

    $('.wm-carousel').marquee({
        direction: 'left',
        duration: 20000,
        gap: 100,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: false
    });
});

window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('myModal').style.display = 'block';
    }, 5000); // 50 seconds = 50000 milliseconds
  });


  let typeJsText = document.querySelector(".typeJsText");
let textArray = typeJsText.dataset.typetext.split("");
let counter = -1;

typeJsText.innerHTML = "";

function typeJs() {
  if (counter < typeJsText.dataset.typetext.length) {
    counter++;
    typeJsText.innerHTML += typeJsText.dataset.typetext.charAt(counter);
    textArray = typeJsText.dataset.typetext.split("");
  } else {
    textArray.pop();
    
  }
}

setInterval(() => {
  typeJs();
}, 100);




const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const close = document.querySelector(".close");

btn.onclick = () => modal.style.display = "block";
close.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }



const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});



$(document).ready(function(){
  $(".client-slider").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 6 }
    }
  });
});
