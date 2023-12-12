// assisted by chat gpt

document.addEventListener("DOMContentLoaded", function () {
    var notesTab = document.getElementById("notes-tab");
    var notesContent = document.getElementById("notes-content");
    var upArrow = document.getElementById("down-arrow");

    notesTab.addEventListener("click", function () {
        notesContent.classList.toggle("hidden");
        upArrow.classList.toggle("up-arrow");
    });
});
