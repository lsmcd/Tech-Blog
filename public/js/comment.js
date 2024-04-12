const form = document.getElementById("comment");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const content = document.getElementById("comment").value;
    if (content) {
        var blogpost_id = window.location.href.split("/").at(-1);
        fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({ content, blogpost_id }),
            headers: {"Content-Type": "application/json"}
        })
        .then((res) => res.ok ? window.location = "/" : alert("Failed to post comment"))
        .catch((err) => console.log(err));
    }
});