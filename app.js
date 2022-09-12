`use strict`

const exercises = document.getElementById(`exercise-container`)

function openExercise(e) {
    if (e.target.id == 'exercise01') exercises.src = './pages/ex01.html';
    if (e.target.id == 'exercise02') exercises.src = './pages/ex02.html';
    if (e.target.id == 'exercise03') exercises.src = './pages/ex03.html';
    if (e.target.id == 'exercise04') exercises.src = './pages/ex04.html';
    if (e.target.id == 'exercise05') exercises.src = './pages/ex05.html';
    if (e.target.id == 'exercise06') exercises.src = './pages/ex06.html';
}

document.addEventListener(`click`, openExercise)