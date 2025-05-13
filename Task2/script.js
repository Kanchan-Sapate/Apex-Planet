// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill in all fields.";
    } else if (!validateEmail(email.value.trim())) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please enter a valid email address.";
    } else {
      // You can replace this with actual backend submission
      formMessage.style.color = "green";
      formMessage.textContent = "Message sent successfully!";
      form.reset();
    }
  });

  function validateEmail(email) {
    // Simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
function addImage() {
  const imageURL = document.getElementById("imageURL").value.trim();
  const gallery = document.getElementById("imageGallery");

  if (imageURL) {
    const img = document.createElement("img");
    img.src = imageURL;
    img.alt = "Student Project";

    // Remove on click
    img.addEventListener("click", () => {
      gallery.removeChild(img);
    });

    gallery.appendChild(img);
    document.getElementById("imageURL").value = ""; // Reset field
  }
}
