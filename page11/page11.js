const answers = ['A', 'B', 'C', 'B']
const texts = document.querySelectorAll(".answer");

texts.forEach((text, index) => {
    text.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) { //13: Enter
            if (text.value == answers[index]) {
                alert("정답입니다.");
                text.style.border = '3px solid green'
            } else {
                alert("오답입니다. 다시 입력해주세요.");
                console.log(`입력값: ${text.value} 정답: ${answers[index]}`);
                text.style.border = '3px solid red'
            }
        }
    });
});
document.getElementById("NextPage").addEventListener("click", function() {
    location.assign("../page12/page12.html");
});