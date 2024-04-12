const form = document.getElementById("updateblog");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    var blogpost_id = window.location.href.split("/").at(-1);
    if (title && content) {
        fetch("/api/blogpost", {
            method: "POST",
            body: JSON.stringify({ title, content, blogpost_id }),
            headers: {"Content-Type": "application/json"}
        })
        .then((res) => res.ok ? window.location = "/dashboard" : alert("Failed to update blogpost"))
        .catch((err) => console.log(err));
    }
});
const button = document.getElementById("delete");

form.addEventListener("click", (event) => {
    event.preventDefault();
    var blogpost_id = window.location.href.split("/").at(-1);
    fetch("/api/blogpost", {
        method: "DELETE",
        body: JSON.stringify({blogpost_id}),
        headers: {"Content-Type": "application/json"}
    })
    .then((res) => res.ok ? window.location = "/dashboard" : alert("Failed to update blogpost"))
    .catch((err) => console.log(err));
});