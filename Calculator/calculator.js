let btn = document.querySelectorAll('button');
let input = document.getElementById('input');
let str = " ";
let arr = Array.from(btn);
arr.forEach( btn=>{
        btn.addEventListener('click',(e)=>{
            if(e.target.innerHTML=='='){
                str = eval(str);
                input.value = str;
            }
            else if(e.target.innerHTML=='CE'){
                str=" ";
                input.value = str;
            }
            else if(e.target.innerHTML=='DEL'){
                str = str.substring(0, str.length - 1);
                input.value = str;
            }
            
            else {
            str = str+e.target.innerText;
            input.value = str;
            }
        })
    })
    
    


//