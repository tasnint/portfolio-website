function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}




function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//about-section
function opentab(tabName, evt) {
  // Hide all tab content initially
  let tabcontents = document.getElementsByClassName("tab-contents");
  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  // Remove the "active" class from all tab links
  let tablinks = document.getElementsByClassName("tab-links");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  // Display the current tab and add "active" class to the corresponding tab link
  document.getElementById(tabName).classList.add("active-tab");
  evt.currentTarget.classList.add("active-link");
}

// Initiate the Skills tab by default
window.onload = function() {
  opentab('skills', { currentTarget: document.querySelector('.tab-links') });
}; 

/*var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function optentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }


  for(tabcontent of tabcontents){
    tabcontents.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
} */
