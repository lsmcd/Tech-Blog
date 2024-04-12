try {
    for (let i = 1; i < 200; i++) {
        let blogpost = document.getElementById(i);
        if (blogpost) {
            blogpost.addEventListener("click", (event) => {
                event.preventDefault();
                window.location = `/blogposts/${i}`;
            });
        }
    }
} catch (err) { console.log(err) }

