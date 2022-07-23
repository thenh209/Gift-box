let submitbutton=document.getElementById("generatebutton");
let gifts=document.getElementById("grid");
let resetbtn=document.getElementById("clear");
let number=document.getElementById("inputno");
submitbutton.onclick=()=>{
    clearpreviousresult();
}
result=()=>{
    let number=document.getElementById("inputno").value;
    for(let i=1;i<=number;i++)
    { 
      let div1=document.createElement("img");
      gifts.append(div1);
      div1.src="./assets/giftbox.png";
      div1.style.width="70px";
      div1.style.height="70px";
      div1.style.backgroundImage=`url('./assets/giftbox.png')`;
      div1.style.margin="10px";
      div1.innerHTML="gift";
    } 
  }
clearpreviousresult=()=>{
  gifts.innerHTML="";
  result();
  }
resetbtn.onclick=()=>{
  gifts.innerHTML="";
}
number.addEventListener("keyup", function(event) {
    if (event.keyCode ===13) {
      clearpreviousresult();
        }
});


