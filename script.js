let currentTheme = localStorage.getItem("theme");
if (currentTheme === null) {
  setTheme("light");
} else {
  setTheme(currentTheme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
  } else if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
  } else if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
  } else if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }
  localStorage.setItem("theme", mode);
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Format mailto link
    const mailtoLink = `mailto:bayoudh.yassine20@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\nMessage: " + message
    )}`;

    // Open default email client with the formatted mailto link
    window.location.href = mailtoLink;

    // Optionally show a status message
    document.getElementById("form-status").innerText =
      "Opening your email client...";
  });
