const pastelColors = [
    '#FFFFFF', '#cc5ef5', '#461791'
];
  
// createCircles = () => {
//     const section = document.getElementById('bubbles');
//     const circles = document.createElement('span');

//     const size = Math.random();

//     const maxOpacity = 40 + Math.random() * 60
//     const blur = 1 + size * 4


//     circles.style.width = 10 + (size * 25) + 'px';
//     circles.style.height = 10 + (size * 25) + 'px';

//     circles.style.top = Math.random() * innerHeight + 'px';
//     circles.style.left = Math.random() * innerWidth + 'px';

//     circles.style.filter = `blur(${blur}px)`;
//     circles.style['--max-opacity'] = `${maxOpacity}%`;

//     circles.style.background = pastelColors[Math.floor(Math.random() * pastelColors.length)];
//     section.appendChild(circles);

//     setTimeout(() => {
//         circles.remove()
//     }, 5000);
// }

// setInterval(createCircles, 150);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav__link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            
            // Get the target element from the 'href' attribute
            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);
        
            if (targetElement) {
            // Smooth scroll to the target element's position
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            }
        });
    });
});

