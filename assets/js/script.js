'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});

/** 
 * download cv
*/


document.getElementById('downloadcv').addEventListener('click', function() {
  var link = document.createElement('a');
  link.href = '/assets/Amit_Shukla_Resume.pdf'; // Replace with the actual path to your PDF file
  link.download = 'Amit_Resume.pdf'; // Replace with the desired name for your downloaded PDF file
  console.log("Clicked")
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}







// Get the form and success popup elements
const form = document.getElementById("contact-form");
const popup = document.getElementById("success-popup");
const closePopupButton = document.getElementById("close-popup");

// Handle form submission
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission (page reload)
    
    const formData = new FormData(form); // Gather the form data

    // Send the form data using AJAX (Fetch API)
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        // Show the success popup if the form is successfully submitted
        popup.style.display = "block"; // Display the success pop-up
    })
    .catch(error => {
        console.error('Error:', error); // Handle any errors during submission
        alert('Sorry, something went wrong. Please try again later.');
    });
});

// Close the popup when the "Close" button is clicked
closePopupButton.addEventListener("click", function() {
    popup.style.display = "none"; // Hide the pop-up
});



const elements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));
