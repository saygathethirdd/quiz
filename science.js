const coun=0;
let numberOf=10;
const form=document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const selectedd=document.querySelector('input[name="planet"]:checked');
    if(selectedd){
        if(selectedd.value==="mars"){
            document.getElementById("aa").innerText="CORRECT";coun++;
        }else{document.getElementById("aa").innerText="WRONG.correct answer was Mars"}
    }else{document.getElementById("aa").innerText="Please choose an answer before pressing Submit"}
});

const form1=document.getElementById("form1");
form1.addEventListener("submit",function(event){
    event.preventDefault();
    const selectedd=document.querySelector('input[name="blood"]:checked');
    if(selectedd){
        if(selectedd.value==="heart"){
            document.getElementById("bb").innerText="CORRECT";coun++;
        }else{document.getElementById("bb").innerText="WRONG.correct answer was Heart"}
    }else{document.getElementById("bb").innerText="Please choose an answer before pressing Submit"}
});

const form2=document.getElementById("form2");
form2.addEventListener("submit",function(event){
    event.preventDefault();
    const selectedd=document.querySelector('input[name="degree"]:checked');
    if(selectedd){
        if(selectedd.value==="100degree"){
            document.getElementById("cc").innerText="CORRECT";coun++;
        }else{document.getElementById("cc").innerText="WRONG.correct answer was 100deg"}
    }else{document.getElementById("cc").innerText="Please choose an answer before pressing Submit"}
});

const form3=document.getElementById("form3");
form3.addEventListener("submit",function(event){
    event.preventDefault();
    const selectedd=document.querySelector('input[name="absorb"]:checked');
    if(selectedd){
        if(selectedd.value==="carbon dioxide"){
            document.getElementById("dd").innerText="CORRECT";coun++;
        }else{document.getElementById("dd").innerText="WRONG.correct answer was Carbon dioxide"}
    }else{document.getElementById("dd").innerText="Please choose an answer before pressing Submit"}
});

const form4=document.getElementById("form4");
form4.addEventListener("submit",function(event){
    event.preventDefault();
    const selectedd=document.querySelector('input[name="bone"]:checked');
    if(selectedd){
        if(selectedd.value==="206"){
            document.getElementById("ee").innerText="CORRECT";coun++;
        }else{document.getElementById("ee").innerText="WRONG.correct answer was 206"}
    }else{document.getElementById("ee").innerText="Please choose an answer before pressing Submit"}
});

const form5=document.getElementById("form5");
form5.addEventListener("submit",function(event){
    event.preventDefault();
    const selectedd=document.querySelector('input[name="gold"]:checked');
    if(selectedd){
        if(selectedd.value==="au"){
            document.getElementById("ff").innerText="CORRECT";coun++;
        }else{document.getElementById("ff").innerText="WRONG.correct answer was AU"}
    }else{document.getElementById("ff").innerText="Please choose an answer before pressing Submit"}
});

const form6=document.getElementById("form6");
form6.addEventListener("submit",function(event){
    event.preventDefault();
    const selectedd=document.querySelector('input[name="genetic"]:checked');
    if(selectedd){
        if(selectedd.value==="nucleus"){
            document.getElementById("gg").innerText="CORRECT";coun++;
        }else{document.getElementById("gg").innerText="WRONG.correct answer was Nucleus"}
    }else{document.getElementById("gg").innerText="Please choose an answer before pressing Submit"}
});

const form7=document.getElementById("form7");
form7.addEventListener("submit",function(event){
    event.preventDefault();
    const selectedd=document.querySelector('input[name="carry"]:checked');
    if(selectedd){
        if(selectedd.value==="photon"){
            document.getElementById("hh").innerText="CORRECT";coun++;
        }else{document.getElementById("hh").innerText="WRONG.correct answer was Photon"}
    }else{document.getElementById("hh").innerText="Please choose an answer before pressing Submit"}
});

const form8=document.getElementById("form8");
form8.addEventListener("submit",function(event){
    event.preventDefault();
    const selectedd=document.querySelector('input[name="heisenberg"]:checked');
    if(selectedd){
        if(selectedd.value==="position and momentum cannot be precisely known"){
            document.getElementById("ii").innerText="CORRECT";coun++;
        }else{document.getElementById("ii").innerText="WRONG.correct answer was that position and momentum cannot be precisely known"}
    }else{document.getElementById("ii").innerText="Please choose an answer before pressing Submit"}
});

const form9=document.getElementById("form9");
form9.addEventListener("submit",function(event){
    event.preventDefault();
    const selectedd=document.querySelector('input[name="integr"]:checked');
    if(selectedd){
        if(selectedd.value==="correct"){
            document.getElementById("jj").innerText="CORRECT";coun++;
        }else{document.getElementById("jj").innerText="WRONG.correct answer was Heritable changes in gene expression without altering the DNA sequence"}

     const percent=((coun/numberOf) * 100);
     setTimeout(() => {alert("you've got " + coun +" questions right. That means " + percent + "%")
        
     }, 500);   
    }else{document.getElementById("jj").innerText="Please choose an answer before pressing Submit"}
});





