function occurance(){
  
  var num = document.getElementById("input11").value;
  var result= document.getElementById("answer11");
  var a = num.toString().split(' ');
  console.log(a);
  a.sort();
  var count = 1;
  var obj = [];
  for (var i=0; i < a.length; i++)
  {
    if(a[i] == a[i+1])
    {
      count+=1;
    }
    else{
      var b = [];
      b.push(a[i]);
      b.push(count);
      obj.push(b)
      count=1;
    }
  }
  obj.sort((a,b) => a[1] - b[1]);
  var final = [];
  for (var i = obj.length-1; i>=0 ; i--) {
    final.push(obj[i][0]);
  }
 console.log(final);
  result.innerHTML = final;
  
}