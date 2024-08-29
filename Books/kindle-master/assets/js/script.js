document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
 
    const modal = document.getElementById('qrModal');
    const openModalBtn = document.getElementById('openModalBtnqr');
    const closeModalSpan = document.querySelector('.closeqr');

    window.onscroll = function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    openModalBtn.onclick = function() {
        modal.style.display = "flex";
    };

    closeModalSpan.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});


document.addEventListener("DOMContentLoaded", function() {
 
    const modal = document.getElementById('Modaltop');
    const openModalBtn = document.getElementById('openModalBtntop');
    const closeModalSpan = document.querySelector('.closetop');

    window.onscroll = function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    openModalBtn.onclick = function() {
        modal.style.display = "flex";
    };

    closeModalSpan.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

