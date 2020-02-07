window.onload = function(){
    createOptionList();

    document.addEventListener("click", function(event) {
        let target = event.target;
        if (target.classList.contains("basket-btn") || target.classList.contains("basket-icon")) {
            toggleBasket();
        }

        if (target.classList.contains("popup-order-wrap")) {
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
    let optionsList = this.getElementsByClassName("options-list-wrap");
    optionsList[0].classList.toggle("open");
    onClickCloseList(this);
}


function createOptionList() {
    let optionsList = [...document.getElementsByClassName("options-list")];
    optionsList.forEach(list => addList(list));

    function addList(list) {
        for (let i = 0; i <= 49; i++) {
            let li = document.createElement("li");
            li.className = "option";
            li.id = "option-" + i;
            let span = document.createElement("span");
            span.innerHTML = i + 1;
            li.appendChild(span);
            list.appendChild(li);
        }
    }

    let dropDownArray = [...document.getElementsByClassName("select-wrap")];
    dropDownArray.forEach(dropDown => dropDown.onclick = openList);
}

function onClickCloseList(elem) {
    function outsideClickListener(event) {
        if (!elem.contains(event.target) ) {
            elem.querySelector(".options-list-wrap").classList.toggle("open");
            document.removeEventListener('click', outsideClickListener);
        }
    }
    document.addEventListener('click', outsideClickListener)
}

