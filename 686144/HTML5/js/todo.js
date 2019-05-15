var inputValueRef=document.getElementById("taskId")
var currentCounter=0

var addTask=function()
{
    console.log(inputValueRef.value)
   currentCounter =    localStorage.counter
   localStorage.setItem("task_"+currentCounter,inputValueRef.value)
   localStorage.counter++;
   inputValueRef.value=""
}



var initializeValue=function()
{
    if(localStorage.counter === undefined)
    {
        localStorage.counter=0
    }
    else
    {
        currentCounter=localStorage.counter
    }
    loadAllValues()
}