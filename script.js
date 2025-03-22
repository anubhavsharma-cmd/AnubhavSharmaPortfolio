document.addEventListener("DOMContentLoaded", function () {
    const modalBtns = document.querySelectorAll(".open-modal");
    const modals = document.querySelectorAll(".modal");
    const closeBtns = document.querySelectorAll(".close-modal");

    modalBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const modalId = btn.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "block";
        });
    });

    closeBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            btn.parentElement.parentElement.style.display = "none";
        });
    });

    window.onclick = function (event) {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    };
});
function openProjectModal(id) {
    document.getElementById(id + "-modal").style.display = "block";
}

function closeProjectModal(id) {
    document.getElementById(id + "-modal").style.display = "none";
}

