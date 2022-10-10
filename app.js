const output=document.querySelector(".output");
const result=document.querySelector(".result");
const buttons=document.querySelectorAll("button")
const equals=document.querySelector('[equals]')
const clear=document.querySelectorAll('[clear]')


buttons.forEach( buttons=> {
    buttons.addEventListener("click",()=>{
        if(buttons.innerText=="=" )
         return;
        output.innerText+=buttons.innerText;
    })
});
equals.addEventListener("click",calculate)

function calculate(){
    result.innerText=eval(output.innerText);
}


clear.forEach(clear=>{
    clear.addEventListener("click",clearfn)
    function clearfn(){
        if(clear.innerText=="AC"){
            output.innerText='';
            result.innerText='';
    
        }
        if(clear.innerText=="DEL"){
            output.innerText=output.innerText.slice(0,-4);
        }
    };
})
