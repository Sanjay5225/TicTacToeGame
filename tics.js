let bs=document.querySelectorAll(".b")
let ng=document.querySelector(".newgame")
// let r=document.querySelector(".reset")
let x=true
let ps=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const rg=()=>{
    x=true
enablebtn()
}


bs.forEach((el)=>{
    el.addEventListener("click",()=>{

            if(x){
                el.innerText="x"
                x=false
            
            }
            else{
                el.innerText="o"
                x=true
            }
              el.disabled=true ;
              checkpattern();
    });
   
});
const checkpattern= ()=>{
    for(p of ps){
        // console.log(p[0],p[1],p[2])
        // console.log(bs[p[0]],bs[p[1]],bs[p[2]])
        pv1=bs[p[0]].innerText;
        pv2=bs[p[1]].innerText
        pv3=bs[p[2]].innerText
        if(pv1!=""&&pv2!=""&&pv3!=""){
            if(pv1===pv2&&pv2===pv3)
            {
                console.log("winner")
                disablebtn();
            }
           
        }
    }
  }
  let disablebtn=()=>{
    for (b of bs){
       b.disabled=true 
    }
}
let enablebtn=()=>{
    for (b of bs){
       b.disabled=false
       b.innerText=""
    }
}
ng.addEventListener("click",rg)
// r.addEventListener("click",rg)