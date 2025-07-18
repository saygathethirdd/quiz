const dark=document.getElementById("dark");
dark.addEventListener("click",function(){
    const body=document.body;
    body.classList.toggle("dark"); body.classList.toggle("light");
    dark.textContent=body.classList.contains("dark")?"light mode":"dark mode";
})

const form=document.getElementById("form");
form.addEventListener("submit",function (event) {
    event.preventDefault();
    const name=document.getElementById("name").value;
 const Lname=document.getElementById("Lname").value;
  const email=document.getElementById("email").value;
   const password=document.getElementById("password").value;
   const choose=document.getElementById("choose").value;
   if(
    name!==""&&Lname!==""&&email!==""&&password!=="" &&choose==="islamic"){
        window.location.href="quiz.html";
    }
    else if(name!=="" &&email!=="" &&password!=="" &&choose==="science"){
        window.location.href="science.html";
    }
    else if(name!=="" &&email!=="" &&password!=="" &&choose==="math"){
        window.location.href="math.html";
    }
    else{alert("please fill out the required informtion")}
})