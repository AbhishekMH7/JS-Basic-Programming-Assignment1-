function equation(){
  var a=document.getElementById("input9a").value;
  var b=document.getElementById("input9b").value;
  var c=document.getElementById("input9c").value;
  var result1= document.getElementById("answer9a");
  var result2= document.getElementById("answer9b");
  var discr = (b * b) - 4 * (a * c);
  var sqrDiscr = Math.sqrt(discr);
  var x1=((-b+sqrDiscr)/(2*a));
  var x2=((-b-sqrDiscr)/(2*a));
  console.log(x1.toFixed(2));
  console.log(x2.toFixed(2));
  result1.innerHTML=x1.toFixed(2);
  result2.innerHTML=x2.toFixed(2);
}