var flag=0;

function ConcatNumber(val) {
    if(flag==1)
        {
            ClearOrReplace("");
            ClearOrReplace(val);
            flag=0;
        }
    else
        {
document.getElementById("screen").value+=val;
            flag=0;
        }
}

function ClearOrReplace(val) {
    document.getElementById("screen").value=val;
}

function Evaluate() { 
    flag=1;
    try 
    {   document.getElementById("history").value+="("+document.getElementById("screen").value;
        ClearOrReplace(eval(document.getElementById("screen").value));
        document.getElementById("history").value+="=" + document.getElementById("screen").value+") ";
        
    } 
    catch(e) 
    {
        ClearOrReplace('Error') 
    } 
}

function Enter(event) {
     
        if(event.keyCode=="13")
        {
            Evaluate();
        }
       
    }
function ClearHistory() {
    document.getElementById("history").value="";
}