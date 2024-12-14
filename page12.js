
const texts = document.querySelectorAll(".text-area");
const images = document.querySelectorAll('.image-area');

let selectedImage = null;
let selectedText = null;

images.forEach((v, i) => {
    images[i].onclick = () => {
     
        if (selectedImage == null) {
            selectedImage = images[i];
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
    if (selectedImage != null && selectedText != null) {
        if(selectedImage.id === selectedText.id) {
            alert('CORRECT');
            selectedImage = null;
            selectedText = null;
        }
        else {
            alert('NOT CORRECT');
            selectedImage.style.border = '1px solid #c0c0c0';
            selectedText.style.border = '1px solid #c0c0c0';
            selectedImage = null;
            selectedText = null;
        }
    }
}
document.getElementById("NextPage").addEventListener("click", function() {
    location.assign("../page13/page13.html");
});
