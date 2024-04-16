let button = document.getElementById(`btn`);
let output = document.getElementById(`resposta`);
let number = [Math.floor(Math.random() * 20)];

button.addEventListener (`click`,function(){
      let input = document.getElementById(`userinput`).value;
     if(input == number){
         output.innerHTML = `Correct!! the number was ${number}`
     }
     else if(input < number){
        output.innerHTML = "TOO LOW"
     }
     if(input > number){
        output.innerHTML = "TOO HIGH"  
     } 
});