let btnNum=document.querySelectorAll(".num");
let output=document.querySelector("#result");
let currentValue="";

//Addition in calculator
btnNum.forEach(btn=>{
    btn.addEventListener("click",()=>{
        currentValue+=btn.value;
        output.value=currentValue;
    });
});

document.querySelectorAll(".sign").forEach(btn=>{
    if(btn.value!=="="){
        btn.addEventListener("click",()=>{
            currentValue+=btn.value;
            output.value=currentValue;
        });
    }        
});
  
document.querySelector(".clear").addEventListener("click",()=>{
    currentValue="";
    output.value="";
});

document.querySelector(".sign[value='=']").addEventListener("click",()=>{
    try{
        let result=eval(currentValue);

        output.value=result;
        currentValue=result.toString();
    }
    catch(e){
        output.value="Error";
        currentValue="";
    }
});