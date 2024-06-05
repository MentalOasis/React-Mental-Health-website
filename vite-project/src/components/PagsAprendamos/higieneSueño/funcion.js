
export function showRectangle(event, index) {
    const rectangle = document.getElementById(`rectangle-${index}`);
    const star = event.currentTarget;
    const starRect = star.getBoundingClientRect();

    rectangle.style.display = 'block';
    rectangle.style.top = `${starRect.top + window.scrollY }px`;
    rectangle.style.left = `${starRect.left + window.scrollX }px`;

    star.style.visibility = 'hidden';
    star.style.opacity = '0';
}

export function hideRectangle(index) {
    const rectangle = document.getElementById(`rectangle-${index}`);
    const stars = document.querySelectorAll('.star');
    const star = stars[index];

    rectangle.style.display = 'none';
    stars.forEach(star => {
        star.style.visibility = 'visible';
        star.style.opacity = '1';
    });
}
