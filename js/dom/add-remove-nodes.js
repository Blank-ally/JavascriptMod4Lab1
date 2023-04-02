const myElements = document.getElementsByClassName('updateMe');

for(let i = 0; i < myElements.length;i++){
myElements[i].innerHTML = '<p><em>Here</em> is a message</p> ';
}


const removals = document.getElementsByClassName('active');

while(removals.length != 0)
{
    removals[0].remove();
}