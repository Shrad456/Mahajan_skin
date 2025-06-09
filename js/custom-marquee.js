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
    cursor.setAttribute("style", "top: " + (e.pageY - 50) + "px; left: " + (e.pageX - 10) + "px;")
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


const icon = document.getElementById('whatsapp-icon');

let offsetX, offsetY;

icon.addEventListener('dragstart', (e) => {
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener('dragover', (e) => {
  e.preventDefault();
});

document.addEventListener('drop', (e) => {
  e.preventDefault();
  icon.style.left = `${e.clientX - offsetX}px`;
  icon.style.top = `${e.clientY - offsetY}px`;
});


"use strict";
// scrolling for top
const scroller = document.getElementById("progress-scroll");
if (scroller) {
    scroller.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    // Scroll back to top
    const progressPath = document.querySelector('.progress-wrap path');
    if (progressPath) {
        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = 'none';
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = `${pathLength}`;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = 'stroke-dashoffset 10ms linear';
        const updateProgress = () => {
            const scroll = window.scrollY || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = `${progress}`;
        };
        window.addEventListener('scroll', updateProgress);
        const offset = 50;
        window.addEventListener('scroll', () => {
            if (window.scrollY > offset) {
                const progressWrap = document.querySelector('.progress-wrap');
                if (progressWrap) {
                    progressWrap.classList.add('active-progress');
                }
            }
            else {
                const progressWrap = document.querySelector('.progress-wrap');
                if (progressWrap) {
                    progressWrap.classList.remove('active-progress');
                }
            }
        });
    }
});
