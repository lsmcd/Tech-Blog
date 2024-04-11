const form = document.getElementById("signUp");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        fetch("/api/users/signup", {
            method: "post",
            body: json.stringify({ username, password }),
            headers: {"content-type": "application/json"}
        })
        .then(() => res.ok ? window.location = "/" : alert("Failed to log in"))
        .catch((err) => console.log(err));
    }
});