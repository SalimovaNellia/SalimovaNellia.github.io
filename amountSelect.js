window.onload = function(){
    createOptionList();
};

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

    let selectIcon = document.getElementById("selectIcon");
    selectIcon.onclick = openList;
}

