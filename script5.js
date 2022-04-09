function celsius(){
  var n=document.getElementById("input5").value;
  var result= document.getElementById("answer5");
  var f=(n*(9/5))+32;
  console.log(f.toFixed(2));
  result.innerHTML=f.toFixed(2);
}