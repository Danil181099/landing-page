const triggers = document.querySelectorAll('.trigger');
const contents = document.querySelectorAll('.content');

contents.forEach((content) => {
    content.style.display = 'none';
});

triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
        if (contents[index].style.display === 'none') {
            contents[index].style.display = 'block';
        } else {
            contents[index].style.display = 'none';
        }
    });
});