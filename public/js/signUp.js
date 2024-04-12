const form = document.getElementById("signUp");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (12 > username.length && username.length > 1 && 31 > password.length && password.length > 4) {
        fetch("/api/users/signup", {
            method: "post",
            body: json.stringify({ username, password }),
            headers: { "content-type": "application/json" }
        })
            .then(() => res.ok ? window.location = "/" : alert("Failed to log in"))
            .catch((err) => console.log(err));
    } else {
        alert("Password length must be between 4 and 30 and Usernames between 1 and 12");
    }
});