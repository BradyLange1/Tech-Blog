const updateFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-post").value.trim();
  const body = document.querySelector("#body-post").value.trim();
  const id = event.target.getAttribute("data-id");

  if (title && body) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const deleteButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to delete project");
    }
  }
};

const deleteButton = document.querySelector("#delete-button");
deleteButton.addEventListener("click", deleteButtonHandler);

const updateButton = document.querySelector("#update-button")
updateButton.addEventListener("click", updateFormHandler)
