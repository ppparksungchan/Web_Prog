function saveData(){
localStorage.setItem('date', document.querySelector('#date').value);
localStorage.setItem('weather', document.querySelector('#weather').value);
}

function loadData(){
document.querySelector('#date').value = localStorage.getItem('date') || '';
document.querySelector('#weather').value = localStorage.getItem('weather') || '';
}

const correctAnswers = {
    answer1: ["팥", "현미"],
    answer2: ["양배추", "오이"], 
    answer3: ["자두", "키위"], 
};

const inputs = document.querySelectorAll('input');


inputs.forEach((input) => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {

            const inputValues = input.value.split(",").map(value => value.trim());

            const id = input.id;

            if (correctAnswers[id]) {
                const isCorrect = correctAnswers[id].every(answer => inputValues.includes(answer)) &&
                                  inputValues.every(value => correctAnswers[id].includes(value));

                if (isCorrect) {
                    input.classList.add('correct');
                    input.classList.remove('incorrect');

                } else {
                    input.classList.add('incorrect');
                    input.classList.remove('correct');
                }
            }
            if (input.value === ""){
                alert(`, 를 넣어서 빈칸에 정답을 채워 주세요.`)
            }
        }
    });
});

document.getElementById("NextPage").addEventListener("click", function() {
    location.assign("10page.html");
});