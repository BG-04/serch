const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
const showNameButton = document.getElementById('showName');
const showIDButton = document.getElementById('showID');
const studentNameDiv = document.getElementById('studentName');
const studentIDDiv = document.getElementById('studentID');

showNameButton.addEventListener('click', () => {
    if (studentNameDiv.innerText === "") {
        studentNameDiv.innerText = "باسل غسان يوسف شاهين";
    } else {
        studentNameDiv.innerText = "";
    }
});

showIDButton.addEventListener('click', () => {
    if (studentIDDiv.innerText === "") {
        studentIDDiv.innerText = "20222178";
    } else {
        studentIDDiv.innerText = "";
    }
});
