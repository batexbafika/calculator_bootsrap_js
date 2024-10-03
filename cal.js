//Getting my display div element value by id
    var outputt = document.getElementById("output");

function appendIt(value){
     //checking if the value of the display is "----"
     if(outputt.innerHTML==="----"){
         //replacing the value of my display div from "----" to button value
         outputt.innerHTML="";
     }
     // appending the button value to my display div
        outputt.innerHTML+=value;
        }
      
function result(){
        var result= outputt.innerHTML;
        if(/(\d+[+-/%*]{1,6}\d+)+/g.test(result)){
          var resultt =eval(result);
          document.getElementById("output").innerHTML=resultt;
        }  
       else{
        document.getElementById("output").innerHTML="Error";
       } 
}

function Clear(){
    if(!outputt==="----"){
        
        outputt.innerHTML="----";
    }
    else{
        outputt.innerHTML="----";
    }
}

function delet(){
    if(outputt.innerHTML==="----" ||  outputt.innerHTML!=="----"){
      var sliced = outputt.innerHTML.slice(0,-1);
      for(var i = 0; i<sliced.length+1; i++){
        outputt.innerHTML=sliced;
         if(sliced.length<1){ 
          outputt.innerHTML="----";
         } else if(outputt.innerHTML==="---"){
            outputt.innerHTML="----";
         }
     
      };
    }
}

function sine(){
       sin(outputt.innerHTML);
}