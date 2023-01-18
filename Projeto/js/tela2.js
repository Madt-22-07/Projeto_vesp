function register() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeat_password = document.getElementById("repeat-password").value;

    if (password != repeat_password) {
        alert("Sua senha está diferente")
    }
}