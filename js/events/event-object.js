// parameter is not nesscary it is automaticalluy there but you can add it 
/*document.querySelector('html').addEventListener("click", function(e){
    //e will give specific data like the interaction and when and where it took place 
   // console.log(e);
// will log the item beinginteracted with
   console.log(e.target);
})*/

// you have to add the paramneter to refence it 
document.getElementById('btnContainer').addEventListener("click",function(event){
    //console.log(event.target.closest('input'))

    if(event.target.closest('input') != null ){
        console.log(event.target);
       }
});


document.getElementById('btnContainerTwo').addEventListener("click",function(e){

    buttonClickEvent(e,"Hello");
});

function buttonClickEvent(e,outputText){
console.log(outputText+ " " + e.target)
}