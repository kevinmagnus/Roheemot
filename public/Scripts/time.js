const textElement = document.querySelector(".fade-text");

const texts = [ 

    "Welcome to my website!",
    "Take a look!"


];

let index = 0;


function changeText() {

    textElement.textContent = texts[index];

    index = (index + 1) % texts.length;


}

changeText();

setInterval(changeText, 3000);


function greet() {

    const greeting_heading = document.getElementById("greeting-heading");

    const current_time = new Date().getHours();
    
;
if( (current_time >= 0) && (current_time < 12) ) {


    greeting_heading.innerHTML = "Good morning!";

}else if( (current_time >= 12) && (current_time <= 15) ) {

   
   greeting_heading.innerHTML = "Good afternoon!"; 


}else{

    greeting_heading.innerHTML = "Good evening!";

}


}

greet();



const website_creation_date = new Date("2025-08-16");


function calculate_date_created() {




    const today = new Date();

    const diffTime = Math.abs(today - website_creation_date);

    const diffDays = Math.floor(diffTime/ (1000*60*60*24) );

    return diffDays;



}




function show_website_creation_days() {


    const date_show = document.getElementById("coded");

    const days = calculate_date_created();

    date_show.innerHTML = "Website coded by Emmanuel "+ days +" days ago.";




}

setTimeout( show_website_creation_days() , 500);


