function $$(a){return document.querySelector(a);}

var mySpectrumCode = $$("#mySpectrumCode");

const C_IMG_SIZE = 50;

var isTokenCode = "";
function generateNumberCode(NUMBER_LIMIT){
    mySpectrumCode.innerHTML = "";
    var code = "";
    for(let i = 0; i < NUMBER_LIMIT; i++){
        var number = Math.floor(Math.random() * 10);
        code += `${number}`;
        mySpectrumCode.innerHTML += 
        `<img src="/resource/c_${number}.png" width="${C_IMG_SIZE}" class="center">`;
    }
    isTokenCode = code;
}
generateNumberCode(5);

var verificationCode = $$("#verificationCode");
var submitBtn = $$("#submitBtn");
var msg = $$("#msg");

function verifyCode(){
    if(verificationCode.value.trim() == ""){
        msg.innerHTML = `
            <span style="color:red">
                Please enter code
            </span>`;
    }
    if(verificationCode.value.trim() != ""){
        msg.innerHTML = ``;
        if(verificationCode.value.trim() != isTokenCode){
            msg.innerHTML = `
            <span style="color:red">
                <i class="fa fa-times"></i>
                Incorrect code !
            </span>`; 
            verificationCode.value = "";
            generateNumberCode(5);
        }
        if(verificationCode.value.trim() == isTokenCode){
            msg.innerHTML = `
            <span style="color:green">
                <i class="fa fa-check"></i>
                Correct code !
            </span>`; 
            verificationCode.value = "";
        }
    }
}
submitBtn.addEventListener('click', verifyCode);