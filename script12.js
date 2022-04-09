function palindrome(){
  var n = document.getElementById("input12").value;
  var result= document.getElementById("answer12");
  var count = 0;
  
		for(var i=1; i<=n; i++)
    {
     var rem, temp, final = 0;
     temp = i;
     while(temp>0)
		 {
			rem = temp % 10;
			temp = parseInt(temp/10);
			final = final*10+rem;
		 }
     if(final == i)
		 {
      count+=1;
       
		 }
      
    }
		console.log(count);
  result.innerHTML = count;
}
  