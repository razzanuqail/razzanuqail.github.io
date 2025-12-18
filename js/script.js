// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// review section

function addComment() {
  const name = document.getElementById("username").value;
  const text = document.getElementById("comment").value;

  if (!name || !text) {
    alert("Isi nama dan komentar dulu");
    return;
  }

  const reviewBox = document.createElement("div");
  reviewBox.className = "review-item";
  reviewBox.innerHTML = `<strong style="color:black;">${name}</strong><p style="color:black;">${text}</p>`;

  document.getElementById("reviewList").appendChild(reviewBox);

  document.getElementById("username").value = "";
  document.getElementById("comment").value = "";
}
