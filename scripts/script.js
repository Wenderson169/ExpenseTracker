function setAttributes(el, attrs) {
    for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function setChilds(el, childs) {
    for(let key in childs) {
        el.appendChild(childs[key]);
    }
}

function toSend() {
    let nameValue = document.getElementById("name").value;
    let nameText = document.createTextNode(nameValue);
    let dateValue = document.getElementById("date").value;
    let dateText = document.createTextNode(dateValue);
    let amountValue = "$" + document.getElementById("amount").value;
    let amountText = document.createTextNode(amountValue);

    if (nameValue === "" || dateValue === "" || amountValue === "$") {
        alert("You need to fill in all the camps!");
        return false;
    }

    let tdName = document.createElement("td");
    tdName.appendChild(nameText);

    let tdDate = document.createElement("td");
    tdDate.appendChild(dateText);

    let tdAmount = document.createElement("td");
    tdAmount.appendChild(amountText);

    let buttonInput = document.createElement("input");
    setAttributes(buttonInput, { "type": "button", "value": "X", "onclick": "deleteThis(this)" });

    let tr = document.createElement("tr");
    tr.setAttribute("id", "tb");
    setChilds(tr, { tdName, tdDate, tdAmount, buttonInput });

    let table = document.getElementById("body");
    table.appendChild(tr);

    clearInputs();
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("amount").value = "";
}

function deleteThis(este) {
    este.parentNode.remove();
}
