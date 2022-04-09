function cube(){
  var n= document.getElementById("input2").value;
  var result= document.getElementById("answer2");
  var a=n*n*n;
  console.log(a);
  result.innerHTML=a;
}