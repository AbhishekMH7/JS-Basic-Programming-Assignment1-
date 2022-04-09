function sum(){
  var n=document.getElementById("input6").value;
  var result= document.getElementById("answer6");
  var sum=0;
  for(var i=1;i<=n;i++){
    sum=sum+i;
  }
  console.log(sum);
  result.innerHTML=sum;
}