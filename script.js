let display = document.querySelector(".display");
let button = document.querySelectorAll("button");
button.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;
        if(value === "DEL"){
            display.innerText = display.innerText.slice(0,-1);
        }
        else if(value === "LOG"){
            if(display.innerText){
                display.innerText = Math.log10(Number(display.innerText));
            }
        }
        else if(value === "RESULT"){
            try{
                display.innerText = eval(display.innerText);
            }
            catch{
                display.innerText = "ERROR";
            }
        }
        else if(value === "CE"){
            display.innerText = "";
        }
        else{
            display.innerText += btn.innerText;
        }
    })
})