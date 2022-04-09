function days(){
  var n=document.getElementById("input4").value;
  var result= document.getElementById("answer4");
  if(n>12){
    console.log("Error");
  }
  else{
var n1 = new Date(2022, n, 0).getDate();
    console.log(n1);
    result.innerHTML=n1;
  }
}