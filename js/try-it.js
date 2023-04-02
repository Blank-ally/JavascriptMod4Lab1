
/*document.getElementById('tryItGrid').addEventListener("mousemove", function (e) {
    e.target.classList.add('active');
})


document.getElementById("gridReset").addEventListener("click", function (e) {
    let active = document.querySelectorAll('.active');


    for (let i = 0; i < active.length; i++) {
        console.log(active[i].classList.remove('active'));
    }

})
*/




$(function () {

    $('#tryItGrid').on("mousemove", function (e) {
        e.target.classList.add('active');
    })

   /* $("#gridReset").on("click", function (e) {


        let active = document.querySelectorAll('.active');

        for (let i = 0; i < active.length; i++) {
            console.log(active[i].classList.remove('active'));
        }
    })*/

    $("#gridReset").on("click", function (e) {
        $('.active').removeClass("active")

        
    })




})