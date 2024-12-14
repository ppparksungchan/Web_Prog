const images = ["양배추", "오이", "자두", "키위", "팥", "현미"];
const shuffledImages = images.sort(() => Math.random() - 0.5);
//math random 은 0~ 1 미만의 난수생성 거기서 0.5 뺏을 때 작으면 음수 ,양수로 나눔 
// 0.5 인 이유는 딱 중앙 이기 때문에 확률상 많이 바뀔려고 ,  0.5 음수 , 양수 
// 바뀌는 게 sort 가 앞에가 크면 앞으로 오고 이 기준을 math.random 을 통해 
// 그냥 나오는 숫자에서 0.5를 뺏을 때 음수냐 양수냐 라는 기준으로 순서를 배열함.  
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