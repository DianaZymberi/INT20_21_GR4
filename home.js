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

 