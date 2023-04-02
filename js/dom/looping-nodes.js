   const myElements = document.getElementsByClassName('loopMePracticeOne'); 
                         


//    const myElements = document.querySelectorAll('loopMePracticeOne'); 
//    console.log(myElements)


for(let i = 0; i < myElements.length; i++){

    console.log(myElements[i])  
}


const myElementsTwo = document.querySelectorAll('.loopMePracticeTwo'); 

for(let i = 0; i < myElementsTwo.length; i++){

myElementsTwo[i].classList.add('deactivate');
}