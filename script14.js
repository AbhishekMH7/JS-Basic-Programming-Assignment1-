function rotate(){
  var n=document.getElementById("input14a").value;
  var k=document.getElementById("input14b").value;
  var a=document.getElementById("input14c").value;
  var result= document.getElementById("answer14");
  var arr=a.split(' ')
   for (var i = k ; i < arr.length; i++){
    var del = arr.pop();
    arr.unshift(del);
    
  }
  console.log(arr);
  result.innerHTML=arr;
}