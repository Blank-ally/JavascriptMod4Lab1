function htmlOnClick() {
    console.log('HTML On Click');
}

document.getElementById('btnDomClick').onclick = function(){
    console.log('DOM click');
}

document.getElementById('btnListenerClick').addEventListener("click",function(){
console.log('Listener Click');
}

)
