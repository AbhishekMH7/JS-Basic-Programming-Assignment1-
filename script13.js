function series(){
  var n = document.getElementById('input13').value;
  var result= document.getElementById("answer13");
  var ser = 0;
  
  for(var i = 1; i <= n; i++){
    ser = ser + (2*i);
  }
  console.log(ser);
  result.innerHTML = ser;
}