function length(){
  var n=document.getElementById("input8").value;
  var result= document.getElementById("answer8");
  var a=n.split(' ').join('');
  console.log(a.length);
  result.innerHTML=a.length;
}