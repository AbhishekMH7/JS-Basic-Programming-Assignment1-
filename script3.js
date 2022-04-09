function area(){
  var n=document.getElementById("input3").value;
  var result= document.getElementById("answer3");
  var a=(Math.sqrt(3)*n*n)/4
  console.log(a.toFixed(2));
  result.innerHTML=a.toFixed(2);
}