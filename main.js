window.addEventListener("scroll", function(e) {
    const menu = document.getElementById('navbar');
    menu.style.opacity = "0.7";
});
window.addEventListener("DOMContentLoaded", function() {
    // Wait for all content to load
    var socialLinks = document.querySelector("nav");
    socialLinks.style.opacity = "0"; // Set initial opacity to 
    // Fade in social links
    setTimeout(function() {
      socialLinks.style.transition = "opacity 1s";
      socialLinks.style.opacity = "1";
    }, 1500);
 // Adjust the delay according to your preference
  });
window.addEventListener("scrollend", function(e) {
    const menu = document.getElementById('navbar');
    menu.style.opacity = "1.0";
});
function toggleService(serviceId) {
    var translater = document.getElementById(serviceId);
    var serviceContent = translater.getElementsByClassName('service-content')[0];
    serviceContent.classList.toggle('active');
}

    // JavaScript to detect if it's a phone
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Toggle visibility of burger menu
    document.querySelector('.burger-menu').style.display = 'block';
  } else {
      // Check if service content is active
      if (serviceContent.classList.contains('active')) {
        translater.style.transform = 'translateY(-210px)';
    } else {
        translater.style.transform = 'translateY(0)';
    }
  }