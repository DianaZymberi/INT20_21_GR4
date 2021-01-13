//slider
var visibleDiv=0;
function showDiv(){
    $(".types").hide();
    $(".types:eq("+visibleDiv +")").show();
}
showDiv();
function nextDiv(){
    if(visibleDiv==$(".types").length-1){
        visibleDiv=0;
    }else {
        visibleDiv++;
    }
    showDiv();
}
function prevDiv(){
    if(visibleDiv==0){
        visibleDiv=$(".types").length-1;
    }else {
        visibleDiv--;
    }
    showDiv();
}
//Aside bar(quick links)
$(document).ready(function () {
    $("#controler").click(function () 
    {
          $("#aside").slideToggle(500);
          $("#controler").text("Go back");
    }
    );
 });
 //drag and drop element
 const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
//sessionStorage
function storedata(){
  var inputEmail=document.getElementById("email");
  sessionStorage.setItem("email",inputEmail.value);
  var inputMessage=document.getElementById("message");
  sessionStorage.setItem("message",inputMessage.value);
}
//localStorage
function store(){
  var inputName=document.getElementById("yourname");
  localStorage.setItem("name",inputName.value);
  var inputDate=document.getElementById("date");
  localStorage.setItem("date",inputDate.value);
  var inputTime=document.getElementById("time");
  localStorage.setItem("time",inputTime.value);
  var inputCountry=document.getElementById("country");
  localStorage.setItem("country",inputCountry.value);
}
//validate input
function validate(){
  var yourname = document.getElementById('yourname').value;
  var country = document.getElementById('country').value;
  var nameRGEX = /^[a-z]+(([',. -][a-z ])?[a-z]*)*$/ig;
  var countryRGEX = /^[a-z]+(([',. -][a-z ])?[a-z]*)*$/ig;
  var nameResult = nameRGEX.test(yourname);
  if(nameResult == false)
  {
    alert('Please enter a valid Name');
    return false;
  }
  var countryResult=countryRGEX.test(country);
  if(countryResult == false)
  {
    alert('Please enter a valid Country');
    return false;
  }
  return true;
}

function validateEmail(){
  var useremail=document.getElementById('useremail').value;
  var emailRGEX=/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
  var emailResult=emailRGEX.test(useremail);
  if(emailResult==false){
    alert('Please enter a valid Email');
    return false;
  }
  return true;
}
//search
let str = "heyy asTroLoGY.coM";
let regex = /[A-Z]/g;
let regdot = /[.]/g;
console.log(str.search(regex));
console.log(str.search(regdot));



