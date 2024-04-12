const form = document.getElementById("comment");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const content = document.getElementById("content").value;
    if (200 > content.length && content.length > 4) {
        var blogpost_id = window.location.href.split("/").at(-1);
        fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({ content, blogpost_id }),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.ok ? window.location = "/blogposts/" + blogpost_id : alert("Failed to post comment"))
            .catch((err) => console.log(err));
    } else {
        alert("Content length must be between 5 and 200");
    }
});