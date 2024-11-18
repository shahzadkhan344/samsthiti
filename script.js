function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('active');
}


let currentSlide = 0;
const wrapper = document.getElementById('sliderWrapper');

function slide(direction) {
    const cardWidth = wrapper.querySelector('.card1').clientWidth; // Dynamically calculate card width
    currentSlide += direction;
    wrapper.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

    // Loop back to start if at the end
    if (currentSlide >= wrapper.children.length - 5) { // 5 visible cards
        setTimeout(() => {
            wrapper.style.transition = 'none';
            currentSlide = 0;
            wrapper.style.transform = `translateX(0)`;
        }, 500);
    }
}

// Auto-slide every 5 seconds
setInterval(() => {
    slide(1);
}, 3000);


