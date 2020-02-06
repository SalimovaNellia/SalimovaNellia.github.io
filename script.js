window.onload = function(){
    createOptionList();

    document.addEventListener("click", function(event) {
        let target = event.target;
        if (target.classList.contains("basket-btn") || target.classList.contains("basket-icon")) {
            toggleBasket();
        }

        if (target.classList.contains("open")) {
            toggleBasket();
        }
    });

    let closeBasket = document.getElementById("closeBasket");
    closeBasket.addEventListener("click", toggleBasket)

};

function toggleBasket() {
    let basketPopup = document.getElementById("basketPopup");
    basketPopup.classList.toggle("open");
}

function openList() {
    let optionsList = document.getElementById("optionsListWrap");
    optionsList.classList.toggle("open");
}


function createOptionList() {
    let optionsList = document.getElementById("optionsList");

    for (let i = 0; i <= 49; i++) {
        let li = document.createElement("li");
        li.className = "option";
        li.id = "option-" + i;
        let span = document.createElement("span");
        span.innerHTML = i + 1;
        li.appendChild(span);
        optionsList.appendChild(li);
    }

    let dropDown = document.getElementById("dropDown");
    dropDown.onclick = openList;
}

