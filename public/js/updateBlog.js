const form = document.getElementById("updateblog");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    var blogpost_id = window.location.href.split("/").at(-1);
    if (200 > title.length && title.length > 4 && 200 > content.length && content.length > 4) {
        fetch("/api/blogpost", {
            method: "PUT",
            body: JSON.stringify({ title, content, blogpost_id }),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.ok ? window.location = "/dashboard" : alert("Failed to update blogpost"))
            .catch((err) => console.log(err));
    } else {
        alert("Title length must be between 5 and 20 and content between 5 and 200");
    }
});
const button = document.getElementById("delete");

button.addEventListener("click", (event) => {
    event.preventDefault();
    var blogpost_id = window.location.href.split("/").at(-1);
    fetch("/api/blogpost", {
        method: "DELETE",
        body: JSON.stringify({ blogpost_id }),
        headers: { "Content-Type": "application/json" }
    })
        .then((res) => res.ok ? window.location = "/dashboard" : alert("Failed to update blogpost"))
        .catch((err) => console.log(err));
});