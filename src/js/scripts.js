const scrollFunc = function () {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight; // selects the height of the browser window
    // Adds a reveal point for the image to show based on device
    // 992 = 992px (md breakpoint)
    const revealPoint = windowHeight > 992 ? 250 : 300;

    // Iterates through the list of elements that we want to show
    for (let i = 0; i < reveals.length; i++) {
        // Gets the distance of between element and top of the page
        const revealTop = reveals[i].getBoundingClientRect().top;
        // Check the distance of the element in comparison to the defined revealPoint
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.remove('hide'); // shows element
        } else {
            reveals[i].classList.add('hide'); // else keep element hidden
        }
    }
};
window.addEventListener('scroll', scrollFunc);