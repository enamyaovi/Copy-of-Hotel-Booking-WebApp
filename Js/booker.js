var position = 0
var suite = 0
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;

function clearbook() {
    let book = document.getElementsByClassName("bookbtn");
    if (position == 0) {
        book[0].style.display = "none";
        suite = 600
    }
    else if (position == 1) {
        book[1].style.display = "none";
        suite = 350
    }
    else if (position == 2) {
        book[2].style.display = "none";
        suite = 200
    }
}

function clearsend() {
    let send = document.getElementsByClassName("sendbtn");
    if (position == 0) {
        send[0].style.display = "none";
        suite = 600
    }
    else if (position == 1) {
        send[1].style.display = "none";
        suite = 350
    }
    else if (position == 2) {
        send[2].style.display = "none";
        suite = 200
    }
}

function clearreserve() {
    let reserve = document.getElementsByClassName("reserve-content");
    for (let i = 0; i < reserve.length; i++) {
        reserve[i].style.display = "none";
    }
    showbook()
}

function showbook() {
    document.getElementsByClassName("bookbtn")[parseInt(position)].style.display = "inline";
}

function clear() {
    document.getElementsByClassName("name")[parseInt(position)].value = "";
    document.getElementsByClassName("tel")[parseInt(position)].value = "";
    document.getElementsByClassName("mail")[parseInt(position)].value = "";
    document.getElementsByClassName("nights")[parseInt(position)].value = "";
    document.getElementsByClassName("amount")[parseInt(position)].value = "";
}

function booking(x) {
    clearreserve()
    document.getElementsByClassName("reserve-content")[x].style.display = "block";
    position = x
    document.getElementsByClassName("sendbtn")[parseInt(position)].style.display = "inline";
    document.getElementsByClassName("cancelbtn")[parseInt(position)].style.display = "none";
    document.getElementsByClassName("closebtn")[parseInt(position)].style.display = "inline";
    document.getElementsByClassName("checkin")[parseInt(position)].setAttribute("min", today);
    document.getElementsByClassName("checkout")[parseInt(position)].setAttribute("min", today);
    clearbook()
}

function closing() {
    document.getElementsByClassName("reserve-content")[parseInt(position)].style.display = "none";
    clear()
    showbook()
}

function totalnights() {
    var dayin = new Date(document.getElementsByClassName("checkin")[parseInt(position)].value);
    var dayout = new Date(document.getElementsByClassName("checkout")[parseInt(position)].value);
    var night = parseInt((dayout - dayin) / (24 * 3600 * 1000));
    if (night <= 0) {
        alert("at least one night has to be booked")
    }
    else {
        document.getElementsByClassName("nights")[parseInt(position)].value = night + " Night(s) Booked"
        document.getElementsByClassName("amount")[parseInt(position)].value = "Cost - GH₵ " + night * suite + ".00"
        document.getElementsByClassName("cancelbtn")[parseInt(position)].style.display = "inline";
        clearsend()
        document.getElementsByClassName("closebtn")[parseInt(position)].style.display = "none";
    }
}

function cancel() {
    document.getElementsByClassName("reserve-content")[parseInt(position)].style.display = "none";
    clear()
    showbook()
}