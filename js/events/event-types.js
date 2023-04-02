 window.addEventListener("load",function(){
    console.log("page is loaded")
 });


 //focus is going in  so when clicking into an object 
document.getElementById('inputFocus').addEventListener("focus",function(e){
this.classList.add('active')
})

// blur is going out  so when clicking out of an object
document.getElementById('inputFocus').addEventListener("blur",function(e){
    this.classList.remove('active')
})


const mouseOutput = document.getElementById("mousePosition")
document.addEventListener("mousemove", function(e){
    mouseOutput.value = e.pageX + ", "+e.pageY
});

