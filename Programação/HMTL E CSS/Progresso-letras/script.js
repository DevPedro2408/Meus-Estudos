let textArea = document.getElementById("textArea")
let progess = document.querySelector(".progress")

textArea.addEventListener("input", () => {
    // if(progess.value < 4) {
    //     progess.computedStyleMap.setProperty("--p-color", red)
    // } 
    progess.value = textArea.value.trim().length
})