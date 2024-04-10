const form = document.getElementById("signUp");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        fetch("/api/users/signup", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {"Content-Type": "application/json"}
        })
        .then(() => window.location = "/")
        .catch((err) => console.log(err));
    }
});