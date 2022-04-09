function factorial(){
  var n= document.getElementById("input1").value;
  var result= document.getElementById("answer1");
if(n==1 || n==0){
  console.log(1);
}
else{
  for( var i=n-1;i>=1;i--){
    n=n*i;
  }
  console.log(n);
  result.innerHTML=n;
}
}