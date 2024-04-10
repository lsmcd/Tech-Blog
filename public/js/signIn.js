const form = document.getElementById("signIn");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        fetch("/api/users/signin", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {"Content-Type": "application/json"}
        })
        .then((res) => res.ok ? window.location = "/" : alert("Failed to log in"))
        .catch((err) => console.log(err));
    }
});