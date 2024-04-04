// Adds and removes the nav hidden class via hamburger click
function toggleNav() {
    var hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav");

    // Check if the navigation menu is currently hidden
    const isHidden = navMenu.classList.contains("hidden");
    
    // Toggle the 'hidden' class based on its current state
    if (isHidden) {
      navMenu.classList.remove("hidden");
      document.body.classList.toggle('no-scroll');
    } else {
      navMenu.classList.add("hidden");
      document.body.classList.remove('no-scroll');
    }
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scrolling and trigger animations
function handleScroll() {
    const projectElements = document.querySelectorAll('.screenshot');
    projectElements.forEach((project) => {
        if (isInViewport(project)) {
            project.classList.add('slideup');
        }
    });
}

// Add a scroll event listener to trigger the animation
window.addEventListener('scroll', handleScroll);

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleNav(); // Call toggleNav() function when a nav-link is clicked
        });
    });
});

// Adds an event listener to the Back To The Top button
document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Function to scroll the page to the top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Add smooth scrolling behavior
        });
    }

    // Add event listener to the button
    backToTopBtn.addEventListener('click', scrollToTop);
});

// Add slide down animation to the Experience Line
window.addEventListener('scroll', experienceLine);

// Function to handle scrolling and trigger animations
function experienceLine() {
    const projectElements = document.querySelectorAll('.blue-line');
    projectElements.forEach((project) => {
        if (isInViewport(project)) {
            project.classList.add('slidedown');
        }
    });
}