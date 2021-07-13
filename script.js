function validateForm() {
    var username = document.getElementById("username")
    var password = document.getElementById("password")

    if (username.value == "") {
        alert("Enter username");
        return;
    }
    if (password.value == "") {
        alert("Enter password");
        return;
    } else {
        window.location.href = "page-logado.html"
    }
}