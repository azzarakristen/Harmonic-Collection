document.addEventListener("DOMContentLoaded", function () {
    const weeks = document.querySelectorAll('.week1');

    weeks.forEach(week => {
        week.addEventListener('mouseenter', function () {
            this.classList.add('hovered');
        });

        week.addEventListener('mouseleave', function () {
            this.classList.remove('hovered');
        });
    });
});
console.log("Script loaded!");
