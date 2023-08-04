// set initial count
let count = 0;

// set value and button
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// console.log(buttons);

// set all button value
buttons.forEach(function (btn){
    btn.addEventListener("click", function (e) {
        const countValue = e.currentTarget.classList;
       
        if(countValue.contains("decrease")){
            count --;
        } else if(countValue.contains("increase")){
            count ++;
        } else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        } 
        if(count === 0){
            value.style.color = "#001623";
        }
        value.textContent = count;
    })
    
});


