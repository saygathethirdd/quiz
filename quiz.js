let score=0;
const qsnNo=8;
const from=document.getElementById("secondform");
from.addEventListener("submit",function(event) {
    event.preventDefault();
 
   const selected = document.querySelector('input[name="Prophet"]:checked');
if (selected){ if (selected.value === "PROPHET MUHAMMAD(SAW)") {
    document.getElementById("bbb").innerText="CORRECT";score++;
   } else{document.getElementById("bbb").innerText="WRONG.the correct answer was Prophet MUHAMMED";
   }
   }else {document.getElementById("bbb").innerText="please select an answer"}
    
} ) 
const mrof=document.getElementById("thirdform");
mrof.addEventListener("submit",function(event){
    event.preventDefault();
    const selected1=document.querySelector('input[name="city"]:checked');
    if(selected1){ if (selected1.value==="MECCA"){
        document.getElementById("bba").innerText="CORRECT";score++;
    }else{
        document.getElementById("bba").innerText="WRONG.The correct answer was MECCA"
    }}else{
        document.getElementById("bba").innerText="pleese select an answer"
    }
})
const romf=document.getElementById("fourform");
romf.addEventListener("submit",function(event){
    event.preventDefault();
    const selected2=document.querySelector('input[name="time"]:checked');
    if(selected2){
        if(selected2.value==="4 Times"){
            document.getElementById("bbbe").innerText="CORRECT";score++;
        }else{
            document.getElementById("bbbe").innerText="WRONG.Correct answer was 4 Times"
        }

    
    }else{
        document.getElementById("bbbe").innerText="please select an answer"
    }
})

const ormf=document.getElementById("fiveform");
ormf.addEventListener("submit",function(event){
    event.preventDefault();
    const selected3=document.querySelector('input[name="pillar"]:checked');
if(selected3){
    if(selected3.value==="SHAHADA"){
        document.getElementById("bbc").innerText="CORRECT";score++;
    }else{
        document.getElementById("bbc").innerText="WRONG.Correct answer was SHAHADA"
    }

}else{
    document.getElementById("bbc").innerText="please select an answer"
}



})
const frm=document.getElementById("sixform");
frm.addEventListener("submit",function(event){
    event.preventDefault();
    const selected4=document.querySelector('input[name="which"]:checked');
if(selected4){
    if(selected4.value==="YUNUS(AS)"){
        document.getElementById("bbd").innerText="CORRECT";score++;
    }else{
        document.getElementById("bbd").innerText="WRONG.Correct answer was YUNUS(AS)"
    }
}else{
    document.getElementById("bbd").innerText="please select an answer"
}
})

const bro=document.getElementById("sevenform");
bro.addEventListener("submit",function(event){
    event.preventDefault();
    const selected5=document.querySelector('input[name="injil"]:checked');
    if(selected5){
        if(selected5.value==="ISA(AS)"){
            document.getElementById("bbe").innerText="CORRECT";score++;
        }else{
            document.getElementById("bbe").innerText="WRONG.Correct answer was ISA(AS)";
        }
    }else{
        document.getElementById("bbe").innerText="please select an answer";
    }
})

const rob=document.getElementById("eightform");
rob.addEventListener("submit",function(event){
    event.preventDefault();
    const selected6=document.querySelector('input[name="fire"]:checked');
   if(selected6){
    if(selected6.value==="IBRAHIM(AS)"){
        document.getElementById("bbf").innerText="CORRECT";score++;}
    else{
        document.getElementById("bbf").innerText="WRONG.Correct answer was IBRAHIM(AS)";
    }
   }else{
    document.getElementById("bbf").innerText="please select an answer";
   }
})

const orb=document.getElementById("nineform");
orb.addEventListener("submit",function(event){
    event.preventDefault();
    const selected7=document.querySelector('input[name="fish"]:checked');
    if(selected7){
        if(selected7.value==="6236"){
            document.getElementById("bbg").innerText="CORRECT";score++;
        }else{
            document.getElementById("bbg").innerText="WRONG.Correct answer was 6236";
        }
        const percentage=Math.round((score/qsnNo) * 100);
        setTimeout(()=>{alert("quiz complete! and you got " +score +" out of "+qsnNo+" this means "+percentage+"%")}, 500)
    }else{document.getElementById("bbg").innerText="please select an answer";
    }
})