function evaluatePostfix()
{
    var n= document.getElementById("input15").value;
  var result= document.getElementById("answer15");
        let stack=[];
    
        for(let i=0;i<n.length;i++)
        {
            let c=n[i];
            if(! isNaN( parseInt(c) ))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
              
            else
            {
                let val1 = stack.pop();
                let val2 = stack.pop();
                  
                switch(c)
                {
                    case '+':
                    stack.push(val2+val1);
                    break;
                      
                    case '-':
                    stack.push(val2- val1);
                    break;
                      
                    case '/':
                    stack.push(val2/val1);
                    break;
                      
                    case '*':
                    stack.push(val2*val1);
                    break;
              }
            }
        }
  var r=stack.pop();
         console.log(stack.pop());
        result.innerHTML=r;
}