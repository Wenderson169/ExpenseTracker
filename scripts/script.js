function toSend() {
    var name = document.getElementById("name");
    var nameValue = name.value;
    var nameText = document.createTextNode(nameValue);
    var date = document.getElementById("date");
    var dateValue = date.value;
    var dateText = document.createTextNode(dateValue);
    var amount = document.getElementById("amount");
    var amountValue = "$" + amount.value;
    var amountText = document.createTextNode(amountValue);

    if (nameValue === "" || dateValue === "" || amountValue === "$") {
        alert("You need to fill in all the camps!");
        return false;
    }

    var tdName = document.createElement("td");
    tdName.appendChild(nameText);

    var tdDate = document.createElement("td");
    tdDate.appendChild(dateText);

    var tdAmount = document.createElement("td");
    tdAmount.appendChild(amountText);

    var buttonInput = document.createElement("input");
    buttonInput.setAttribute("type", "button");
    buttonInput.setAttribute("value", "X");
    buttonInput.setAttribute("onclick", "deleteThis(this)");

    var tr = document.createElement("tr");
    tr.setAttribute("id", "tb");
    tr.appendChild(tdName);
    tr.appendChild(tdDate);
    tr.appendChild(tdAmount);
    tr.appendChild(buttonInput);

    var table = document.getElementById("body");
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