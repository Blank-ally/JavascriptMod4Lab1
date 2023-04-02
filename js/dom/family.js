 //parent
 
 document.getElementById('btnParent').addEventListener('click',function(){
    const activeElement  = document.querySelector('.activeElement');
    activeElement.classList.remove('activeElement');

    activeElement.parentElement.classList.add('activeElement');

 })
//first child

 document.getElementById('btnChild').addEventListener('click',function(){
    const activeElement  = document.querySelector('.activeElement');
    activeElement.classList.remove('activeElement');

    activeElement.firstElementChild.classList.add('activeElement');

 })

//previous child
 document.getElementById('btnPreviousSibling').addEventListener('click',function(){
    const activeElement  = document.querySelector('.activeElement');
    activeElement.classList.remove('activeElement');

    activeElement.previousElementSibling.classList.add('activeElement');

 })

//next child
 document.getElementById('btnNextSibling').addEventListener('click',function(){
    const activeElement  = document.querySelector('.activeElement');
    activeElement.classList.remove('activeElement');

    activeElement.nextElementSibling.classList.add('activeElement');

 })