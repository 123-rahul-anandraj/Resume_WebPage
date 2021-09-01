
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("ViewButton")) {
        togglePopUp();
        ProjectDetails(e.target.parentElement);
    }
})
function togglePopUp() {
    document.querySelector(".Project_PopUp").classList.toggle("open");
    document.body.classList.toggle("HideScroll");
    document.querySelector(".BODY").classList.toggle("fade-out");
}
document.querySelector(".ViewButton").addEventListener("click", togglePopUp);

function ProjectDetails(parentItem) {
    document.querySelector(".PJ_thumbnail img").src = parentItem.querySelector(".thumnail img").src;
    document.querySelector(".PJ_header h2").innerHTML = parentItem.querySelector(".Project_title").innerHTML;
    document.querySelector(".PJ_body").innerHTML = parentItem.querySelector(".Project_Body").innerHTML;
}

function FormSubmit() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    msgarea = document.getElementById("MsgArea").value;
    if (name != '' && email != '' && msgarea != '') {
        document.getElementById("Contact").style.transform = 'scaleX(-1) scaleX(-1)';
        document.getElementById("Contact").style.transition = '1s';
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("MsgArea").value = '';
    }
}
