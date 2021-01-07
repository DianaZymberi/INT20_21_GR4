//slider(types of astroloy)
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


 

 