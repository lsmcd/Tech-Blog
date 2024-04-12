fetch("/api/users/signout", {
    method: "post",
    headers: { "content-type": "application/json" }
})
    .then((res) => res.ok ? window.location = "/" : alert("Failed to sign out"))
    .catch((err) => console.log(err));