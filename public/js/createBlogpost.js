const form = document.getElementById("create");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    if (title && content) {
        fetch("/api/blogpost", {
            method: "POST",
            body: JSON.stringify({ title, content }),
            headers: {"Content-Type": "application/json"}
        })
        .then((res) => res.ok ? window.location = "/dashboard" : alert("Failed to create blogpost"))
        .catch((err) => console.log(err));
    }
});