const answers = ['양배추', '자두', '오이', '현미', '키위', '팥']
const texts = document.querySelectorAll(".text-box");

texts.forEach((text) => {
    text.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) { //13: Enter
            if (answers.includes(text.value)) {
                alert("정답입니다.")
                text.style.border = '3px solid green'
            } else {
                alert("오답입니다. 다시 입력해주세요.")
                text.style.border = '3px solid red'
            }
        }
    })
});
document.getElementById("NextPage").addEventListener("click", function() {
    location.assign("../page14/page14.html");
});

