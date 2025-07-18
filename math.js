let countt=0;
const numberQuestion=9;
const form1=document.getElementById("form1");
form1.addEventListener("submit",function(event){
    event.preventDefault();
    const selected=document.querySelector('input[name="what"]:checked');
    if (selected){
        if (selected.value==="15"){document.getElementById("aaa").innerText="CORRECT";countt++;}
        else{document.getElementById("aaa").innerText="WRONG.CORRECT WAS 15"}
    }else{document.getElementById("aaa").innerText="Choose an answer before pressing submit"}
});
const form2=document.getElementById("form2");
form2.addEventListener("submit",function(event){
    event.preventDefault();
    const selected1=document.querySelector('input[name="is"]:checked');
    if(selected1){
        if(selected1.value==="30"){
            document.getElementById("bbb").innerText="CORRECT";countt++;
        }else{document.getElementById("bbb").innerText="WRONG. correct answer was 30"}
    }else{document.getElementById("bbb").innerText="Choose an answer before pressing submit";}
});
const form3=document.getElementById("form3");
form3.addEventListener("submit",function(event){
    event.preventDefault();
    const selected2=document.querySelector('input[name="half"]:checked');
   if(selected2){
    if(selected2.value==="50"){
        document.getElementById("ccc").innerText="CORRECT";countt++;
    }else{
        document.getElementById("ccc").innerText="WRONG.correct answer was 50"
    }
   }else{
    document.getElementById("ccc").innerText="Choose an answer before pressing submit";   } 
});
const form4=document.getElementById("form4");
form4.addEventListener("submit",function(event){
    event.preventDefault();
    const selected3=document.querySelector('input[name="root"]:checked');
   if(selected3){
    if(selected3.value==="12"){
        document.getElementById("ddd").innerText="CORRECT";countt++;
    }else{
        document.getElementById("ddd").innerText="WRONG.correct answer was 12"
    }
   }else{
    document.getElementById("ddd").innerText="Choose an answer before pressing submit";   } 
});
const form5=document.getElementById("form5");
form5.addEventListener("submit",function(event){
    event.preventDefault();
    const selected4=document.querySelector('input[name="solve"]:checked');
   if(selected4){
    if(selected4.value==="3"){
        document.getElementById("eee").innerText="CORRECT";countt++;
    }else{
        document.getElementById("eee").innerText="WRONG.correct answer was 3"
    }
   }else{
    document.getElementById("eee").innerText="Choose an answer before pressing submit";   } 
});
const form6=document.getElementById("form6");
form6.addEventListener("submit",function(event){
    event.preventDefault();
    const selected5=document.querySelector('input[name="angle"]:checked');
   if(selected5){
    if(selected5.value==="80deg"){
        document.getElementById("fff").innerText="CORRECT";countt++;
    }else{
        document.getElementById("fff").innerText="WRONG.correct answer was 80deg"
    }
   }else{
    document.getElementById("fff").innerText="Choose an answer before pressing submit";   } 
});
const form7=document.getElementById("form7");
form7.addEventListener("submit",function(event){
    event.preventDefault();
    const selected6=document.querySelector('input[name="derivetive"]:checked');
   if(selected6){
    if(selected6.value==="6x + 2"){
        document.getElementById("ggg").innerText="CORRECT";countt++
    }else{
        document.getElementById("ggg").innerText="WRONG.correct answer was 6x + 2"
    }
   }else{
    document.getElementById("ggg").innerText="Choose an answer before pressing submit";   } 
});
const form8=document.getElementById("form8");
form8.addEventListener("submit",function(event){
    event.preventDefault();
    const selected7=document.querySelector('input[name="deg"]:checked');
   if(selected7){
    if(selected7.value==="30deg"){
        document.getElementById("hhh").innerText="CORRECT, also 150deg is correct too";countt++;
    }else{
        document.getElementById("hhh").innerText="WRONG.correct answer was 30deg"
    }
   }else{
    document.getElementById("hhh").innerText="Choose an answer before pressing submit";   } 
});
const form9=document.getElementById("form9");
form9.addEventListener("submit",function(event){
    event.preventDefault();
    const selected8=document.querySelector('input[name="integral"]:checked');
   if(selected8){
    if(selected8.value==="x^2 + c"){
        document.getElementById("iii").innerText="CORRECT";countt++;
    }else{
        document.getElementById("iii").innerText="WRONG.correct answer was x^2 + c";   }
        const percenta=((countt/numberQuestion) * 100);
        setTimeout(() => {if(countt>5){alert("YOU'VE GOT "+percenta+"%, and you've answered "+countt+" question's right congratulation you've passed ")}
        else{alert("you've answered "+countt+" questions better luck next time")};
            
        }, 500);
   }else{
    document.getElementById("iii").innerText="Choose an answer before pressing submit";   } 
});