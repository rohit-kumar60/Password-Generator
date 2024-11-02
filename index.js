document.addEventListener("DOMContentLoaded",function(){


    const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerset="abcdefghijklmnopqrstuvwxyz";
    const numberset="1234567890";
    const symbolset="~!@#$%^&*()_+/";

    const total=document.getElementById("total-char");
    const upperInput=document.getElementById("upper-case");
    const lowerInput=document.getElementById("lower-case");
    const numberInput=document.getElementById("number");
    const symbolInput=document.getElementById("symbol");
    const outbox=document.getElementById("output");

    const button=document.getElementById("btn");

    const getRandomData=(dataset)=>{
        return dataset[Math.floor(Math.random()* dataset.length)];

    }

    const generatePassword=(password="")=>{
        if(upperInput.checked){
            password +=getRandomData(upperset);
        }
        if(lowerInput.checked){
            password +=getRandomData(lowerset);
        }
        if(numberInput.checked){
            password +=getRandomData(numberset);
        }
        if(symbolInput.checked){
            password +=getRandomData(symbolset);
        }

        if(password.length<total.value){
            return generatePassword(password);
        }
        return password.slice(0, total.value);
        // console.log(password);
       
    }
   






    button.addEventListener('click',function(){
        const password=generatePassword();
        outbox.value=password;
    })

})