captchaString=null;
const generatecaptcha = ()=>{
    button=document.getElementById("checkButton");
    button.innerHTML="Verify";
    button.style.color="white";
    captchaString = "";
    for(let i=1; i<=5; i++){
        randomLetter = String.fromCharCode(Math.floor(65+(90-65)*Math.random()));
        imageId = "#"+i;
        captchaString += randomLetter;
        document.getElementById(imageId).setAttribute('src',"images/"+randomLetter+".jpg");
        document.getElementById("userInput").classList.remove('hide');
        document.getElementById("checkButton").classList.remove('hide');
    }
    document.getElementById("result").innerHTML = ""
}

    check=()=>{
    userInput = document.getElementById("userInput").value;
    button=document.getElementById("checkButton");
    button.innerHTML='<div class="load"></div>';
    console.log(userInput)
    console.log(captchaString)
    if (userInput==captchaString){
        setTimeout(()=>{
            button.innerHTML=" Verified ";
            button.style.color="#1bff1b";
        },4000)
    }else{
        
        setTimeout(()=>{
            button.innerHTML=" Not matched !";
            button.style.color="red";
        },4000)
    }
}