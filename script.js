let btn = document.querySelectorAll("button");
let screen = document.getElementById("screen");
let equalto = document.getElementById("equal");
let clear = document.getElementById("clear");
let deletebtn = document.getElementById("delete");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = () => {
        let value = btn[i].value;
        let lastChar = screen.value.slice(-1);

        
        if (["+", "-", "x", "/", "%"].includes(lastChar) && ["+", "-", "x", "/", "%"].includes(value)) {
            return;
        }

        
        screen.value += value;
    };
}


equalto.onclick = () => {
    let expression = screen.value;

    
    expression = expression.replaceAll("x", "*");
    expression = expression.replaceAll("%", "/100");

    try {
        let result = eval(expression);
        screen.value = result;
    } catch {
        screen.value = "Error";
    }
};


clear.onclick = () => {
    screen.value = "";
};


deletebtn.onclick = () => {
    screen.value = screen.value.slice(0, -1);
};
