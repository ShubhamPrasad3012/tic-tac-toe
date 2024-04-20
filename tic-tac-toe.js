a=document.querySelectorAll(".box");
c=document.querySelector(".p2");
s=0;
e=document.querySelector(".p4");
d=document.querySelector(".p5");
f=document.querySelector(".p6");
b=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
t=0;    
a.forEach((i)=>{
    i.addEventListener("click",()=>{
        if(t!=1){
            if (s%2==0){
                i.innerText="X";
                s++;
                i.style.backgroundColor="lightblue";
            }
            else{
                i.innerText="O";
                s++;
                i.style.backgroundColor="pink";
            }
            i.disabled=true;

            checkwinner();
        }   
    })
})
const checkwinner=()=>{
    for (i of b){
        if (a[i[0]].innerText===a[i[1]].innerText && a[i[1]].innerText===a[i[2]].innerText && a[i[0]].innerText!=""){
            console.log("winner is ",a[i[0]].innerText);
            q=a[i[0]].innerText;
            t=1;
            showwinner();
            break;
        }
        else if(s==9){
            q="no one , its a draw";
            showwinner();
        }
    }
};
const renew=()=>{
    d.innerText="";
    e.classList.add("hide");
    f.classList.add("hide");
    t=0;
    a.forEach((i)=>{    
        i.innerText="";
        i.style.backgroundColor="yellow";
        i.style.borderColor="black";    
        s=0;        
    })
};
c.onclick=()=>{
    renew();
    enable();
};
const showwinner=()=>{
    d.innerText=`Winner is ${q}`;
    e.classList.remove("hide");
    f.classList.remove("hide");
};
e.onclick=()=>{
    renew();
    enable();
}; 
const enable=()=>{
    a.forEach((i)=>{
        i.disabled=false;
    })
};
