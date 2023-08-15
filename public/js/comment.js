const commentFormHandler = async (event) => {
  event.preventDefault();

  const body = document.getElementById("body-comment").value.trim();
  console.log(body)
  if (body) {
    const response = await fetch("/api/posts/comment", {
      method: "POST",
      body: JSON.stringify({ body }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".post-form")
  .addEventListener("submit", commentFormHandler);
