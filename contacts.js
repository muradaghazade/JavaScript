var food=prompt("Do you want any steyk?");
var age;
var menu;

if (food=="yes") {
  age = prompt("How old are you?");
}
if (age<21) {
    alert("No stake for you!")
}else{
   menu = confirm("Here is your stake!" )
}
if (menu==false) {
    alert("Here is your french fries and ketchup!")
}
