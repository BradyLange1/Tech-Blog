const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-post").value.trim();
    const body = document.querySelector("#body-post").value.trim();
    const user_id = document.querySelector("#userId-post").value.trim();
  
    if (title && body && user_id) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, body, user_id }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".post-form")
    .addEventListener("submit", signupFormHandler);