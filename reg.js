var textBox = document.querySelector(".plates")
var addBtn = document.querySelector(".add")
var showBtn = document.querySelector(".show")
var resetBtn = document.querySelector(".reset")
var showAllBtn = document.querySelector(".showAll")
var errorElem = document.getElementById('error')

var list;

if (localStorage['plates']) {
    list = JSON.parse(localStorage.getItem('plates'))
} else {
    list = []
}

var registrationInsta = registrationNumbers(list);

function displayed(plateIn) { 

    document.getElementById("display").innerHTML = "";

    for (var i = 0; i < plateIn.length; i++) {
        var holder = document.createElement("li");
        var addedOn = document.createTextNode(plateIn[i].toUpperCase());
        holder.appendChild(addedOn);
        document.getElementById("display").appendChild(holder);
    }
}


function added() {
    errorElem.style.color = "red"
    if (registrationInsta.storePlates(textBox.value.toUpperCase())) {
        let key = registrationInsta.getStorePlates();
        localStorage.setItem('plates', JSON.stringify(key));
        displayed(key)
        errorElem.innerHTML = "Registration added!";
        errorElem.style.color = "green";
        setTimeout(function () {
            errorElem.innerHTML = ""
        }, 4000);
        return;
    }

    else {
        errorElem.innerHTML = "Registration already exists!";
        errorElem.style.color = "red";
        setTimeout(function () {
            errorElem.innerHTML = ""
        }, 4000);
        return;

    }
}
addBtn.addEventListener('click', added);

var valid = /^((CA|CJ|CF)\s\d{3}\-\d{3})$|^((CA|CJ|CF)\s\d{3}\s\d{3})$|^((CA|CJ|CF)\s\d{4})$/i;

function conditions() {
    let key = registrationInsta.getStorePlates();
    if (textBox.value == "") {
        errorElem.innerHTML = "Enter a registration plate!";
        errorElem.style.color = "red";
        window.setTimeout(function () {
            errorElem.innerHTML = ""
        }, 4000);
        return;
    }

    else if (valid.test(textBox.value) != true) {
        errorElem.innerHTML = "Registration not valid!"
        errorElem.style.color = "red";
        setTimeout(function () {
            errorElem.innerHTML = ""
        }, 4000);
        return;
    }

}
addBtn.addEventListener('click', conditions);

function remove() {
    if (addBtn) {
        textBox.value = ""
    }
}
addBtn.addEventListener('click', remove);


let filteredList1 = list.filter(function (regPlates) {
    return regPlates.startsWith('CA');
});
let filteredList2 = list.filter(function (regPlates) {
    return regPlates.startsWith('CJ');
});
let filteredList3 = list.filter(function (regPlates) {
    return regPlates.startsWith('CF');
});


function showed() {
    if (list.length > 0) {
        let filteredList1 = list.filter(function (regPlates) {
            return regPlates.startsWith('CA');
        });
        let filteredList2 = list.filter(function (regPlates) {
            return regPlates.startsWith('CJ');
        });
        let filteredList3 = list.filter(function (regPlates) {
            return regPlates.startsWith('CF');
        });

        var towns = document.querySelector(".slct1");
        if (towns.value === "CA") {
            displayed(filteredList1);
        }
        else if (towns.value === "CJ") {
            displayed(filteredList2)
        }
        else if (towns.value === "CF") {
            displayed(filteredList3)
        }
    } else {
        errorElem.innerHTML = "No registration added!";
        errorElem.style.color = "red";
        setTimeout(function () {
            errorElem.innerHTML = ""
        }, 4000);
        return;

    }
}
showBtn.addEventListener('click', showed);

function clear() {
    localStorage.clear()
    location.reload()
}
resetBtn.addEventListener('click', clear);


function allPlatesList() {
    if (registrationInsta.getStorePlates()) {
        displayed(list)
    } if (list.length === 0) {
        errorElem.innerHTML = "No registration added!";
        errorElem.style.color = "red";
        setTimeout(function () {
            errorElem.innerHTML = ""
        }, 4000);
        return;
    }
}
showAllBtn.addEventListener('click', allPlatesList);

window.onload = displayed(list);

function conditions3() {

    var towns = document.querySelector(".slct1");

    if (filteredList1.length === 0 && towns.value === "CA") {
        errorElem.innerHTML = "";
        errorElem.style.color = "red";
        setTimeout(function () {
            errorElem.innerHTML = ""
        }, 4000);
        return;
    }
    if (filteredList2.length === 0 && towns.value === "CJ") {
        errorElem.innerHTML = "";
        errorElem.style.color = "red";
        setTimeout(function () {
            errorElem.innerHTML = ""
        }, 4000);
        return;
    }
    if (filteredList3.length === 0 && towns.value === "CF") {
        errorElem.innerHTML = "";
        errorElem.style.color = "red";
        setTimeout(function () {
            errorElem.innerHTML = ""
        }, 4000);
        return;
    }
}
showBtn.addEventListener('click', conditions3);


