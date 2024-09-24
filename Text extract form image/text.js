const extractText = () => {
    const fileInput = document.getElementById("file");
    const outPut = document.getElementById("box-4");
    const imageElement = document.getElementById("selectedImg")
    const imgFile = fileInput.files[0];


    if (!imgFile) {
        outPut.textContent = "Please select an image file."
        return;
    }

    const imgURL = URL.createObjectURL(imgFile);
    imageElement.src = imgURL;
    imageElement.style.display = "block";

    Tesseract.recognize(
        imgFile,
        "eng",
    ).then(({ data }) => {
        outPut.textContent = data.text;
    }).catch((error) => {
        outPut.textContent = "Error: " + error.message;
    })
}
document.getElementById("btn").addEventListener("click", extractText);