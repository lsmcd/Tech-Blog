const form = document.getElementById("create");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    if (21 > title.length && title.length > 4 && 200 > content.length && content.length > 4) {
        fetch("/api/blogpost", {
            method: "POST",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.ok ? window.location = "/dashboard" : alert("Failed to create blogpost"))
            .catch((err) => console.log(err));
    } else {
        alert("Title length must be between 5 and 20 and content between 5 and 200");
    }
});