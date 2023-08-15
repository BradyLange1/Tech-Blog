const commentFormHandler = async (event) => {
  event.preventDefault();

  const body = document.getElementById("body-comment").value.trim();
  const post_id = event.target.getAttribute("data-id");
  console.log(body)
  if (body) {
    const response = await fetch("/api/posts/comment", {
      method: "POST",
      body: JSON.stringify({ body, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

submitButton = document.querySelector("#submit-button")
submitButton.addEventListener("click", commentFormHandler)