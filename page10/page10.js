const images = ["양배추", "오이", "자두", "키위", "팥", "현미"];
const shuffledImages = images.sort(() => Math.random() - 0.5);

shuffledImages.forEach((image, index) => {
    const imgElement = document.getElementsByClassName(`food-image ${index + 1}`)[0];
    imgElement.src = image + '.PNG';
    imgElement.alt = image;
});

const texts = document.querySelectorAll('.answer');

texts.forEach((text, index) => {
    text.addEventListener('keyup', function (event) {
        if (event.keyCode === 13) { //13: Enter
            if (text.value == images[index]) {
                alert("정답입니다.");
                text.style.border = '3px solid green'
            } else {
                alert("오답입니다. 다시 입력해주세요.");
                text.style.border = '3px solid red'
            }
        }
    });
});

document.getElementById("NextPage").addEventListener("click", function() {
    location.assign("../page11/page11.html");
});
