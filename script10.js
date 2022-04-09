function arrayeven(){
  var n= document.getElementById("input10").value;
  var result= document.getElementById("answer10");
  var a=n.split(' ');
  // console.log(a);
  let evenArr = [];
  for(var i=0; i < a.length; i+=2)
  {
    evenArr.push(a[i]);
  }
  evenArr.sort(function(a, b){return a-b})
  // console.log(evenArr)
  // console.log(a);
   var j=0;
  for(var i=0; i < a.length; i+=2){
    a[i] = evenArr[j];
    j+=1;
  }
  console.log(a);
  result.innerHTML=a;
}