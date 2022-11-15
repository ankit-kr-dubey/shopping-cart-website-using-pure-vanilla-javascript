function apply1(){
  let div1=document.getElementById("div1");
  let rahul11=document.getElementById("rahul11");
  rahul11.innerHTML=div1.innerHTML;
  let rahul12=document.getElementById("rahul12");
  let para1=document.getElementById("para1");
  rahul12.innerHTML=para1.innerHTML;
  // let rahul12=document.getElementById("rahul12");
let rahul22=document.getElementById("rahul22");
let rahul32=document.getElementById("rahul32");
let tPrice=document.getElementById("tPrice");
let go1=rahul12.innerHTML + "+" + rahul22.innerHTML + "+"+ rahul32.innerHTML;
tPrice.innerHTML=eval(go1)
console.log(tPrice.innerHTML);

}
function apply2(){
  let div2=document.getElementById("div2");
  let rahul21=document.getElementById("rahul21");
      rahul21.innerHTML=div2.innerHTML;
  let rahul22=document.getElementById("rahul22");
  let para2=document.getElementById("para2");
  rahul22.innerHTML=para2.innerHTML;

  let rahul12=document.getElementById("rahul12");
// let rahul22=document.getElementById("rahul22");
let rahul32=document.getElementById("rahul32");
let tPrice=document.getElementById("tPrice");
let go2=rahul12.innerHTML + "+" + rahul22.innerHTML + "+"+ rahul32.innerHTML;
tPrice.innerHTML=eval(go2)
console.log(tPrice.innerHTML);

}
function apply3(){
  let div3=document.getElementById("div3");
  let rahul31=document.getElementById("rahul31");
  rahul31.innerHTML=div3.innerHTML;
  let rahul32=document.getElementById("rahul32");
  let para3=document.getElementById("para3");
  rahul32.innerHTML=para3.innerHTML;
  let rahul12=document.getElementById("rahul12");
let rahul22=document.getElementById("rahul22");
// let rahul32=document.getElementById("rahul32");
let tPrice=document.getElementById("tPrice");
let go3=rahul12.innerHTML + "+" + rahul22.innerHTML + "+"+ rahul32.innerHTML;
tPrice.innerHTML=eval(go3)
console.log(tPrice.innerHTML);

}

function button1(){
let box1=document.getElementById("box1");
box1.innerHTML=""
}
function button2(){
  let box2=document.getElementById("box2");
  box2.innerHTML=""
  }

  function button3(){
    let box3=document.getElementById("box3");
    box3.innerHTML=""
    }
    

