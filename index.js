captchaString=null;
const imageSrc = "https://github.com/sudip-mondal-2002/captcha-generator/blob/master/images/"
const imageQuery = "?raw=true"
const generatecaptcha = ()=>{
    captchaString = ""
    for(let i=1; i<=5; i++){
        randomLetter = String.fromCharCode(Math.floor(Math.random()*26)+65);
        imageId = "#"+i;
        captchaString += randomLetter;
        document.getElementById(imageId).setAttribute('src',imageSrc+randomLetter+".jpg"+imageQuery);
        document.getElementById("userInput").classList.remove('hide');
        document.getElementById("checkButton").classList.remove('hide');
    }
    document.getElementById("result").innerHTML = ""
}

const check=()=>{
    userInput = document.getElementById("userInput").value
    if (userInput==captchaString){
        result ="true";
    }else{
        result="false";
    }
    document.getElementById("result").innerHTML = result
}