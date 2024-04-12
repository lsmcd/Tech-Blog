const form = document.getElementById("signUp");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (13 > username.length && username.length > 2 && 31 > password.length && password.length > 4) {
        console.log("34143242")
        fetch("/api/users/signup", {
            method: "post",
            body: JSON.stringify({ username, password }),
            headers: { "content-type": "application/json" }
        })
            .then((res) => res.ok ? window.location = "/" : alert("Failed to log in"))
            .catch((err) => console.log(err));
    } else {
        alert("Password length must be between 4 and 30 and Usernames between 1 and 12");
    }
});