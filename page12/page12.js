//text랑 image를 선택해서 각각 배열 생성
const texts = document.querySelectorAll(".text-area");
const images = document.querySelectorAll('.image-area');

//이미지와 텍스트의 선택된 id를 담는 배열, 0: images.id, 1: texts.id
let selectedImage = null;
let selectedText = null;

//images 요소들을 순회하면서
images.forEach((v, i) => {
    //해당 요소가 클릭 되었다면
    images[i].onclick = () => {
        //선택된 이미지 요소가 없다면
        if (selectedImage == null) {
            //선택된 이미지 요소를 저장하는 변수에 images[i]를 저장
            selectedImage = images[i];
            //테두리 색상 변경
            images[i].style.border = '3px solid red'
        }

        check();
    }
})

texts.forEach((v, i) => {
    texts[i].onclick = () => {
        if (selectedText == null) {
            selectedText = texts[i];
            texts[i].style.border = '3px solid red'
        }

        check();
    }
})

const check = () => {
    //선택된 이미지와 선택된 텍스트가 모두 존재할때
    if (selectedImage != null && selectedText != null) {
        //선택된 이미지의 id와 선택된 텍스트의 id가 같다면
        if(selectedImage.id === selectedText.id) {
            //CORRECT 알림 뜨기
            alert('CORRECT');
            //선택된 이미지와 텍스트 초기화(null)
            selectedImage = null;
            selectedText = null;
        }
        else {
            //틀리면 NOT CORRECT
            alert('NOT CORRECT');
            //선택된 이미지와 텍스트의 테두리를 초기 테두리 색상으로 변경
            selectedImage.style.border = '1px solid #c0c0c0';
            selectedText.style.border = '1px solid #c0c0c0';
            //선택된 이미지와 텍스트 초기화(null)
            selectedImage = null;
            selectedText = null;
        }
    }
}
document.getElementById("NextPage").addEventListener("click", function() {
    location.assign("../page13/page13.html");
});