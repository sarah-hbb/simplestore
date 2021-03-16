"strict";

const pics = document.querySelectorAll("img");
const pictureContainer = document.querySelector(".pictures");
const dialogPic = document.querySelector(".dialog-pic");

for (const pic of pics) {
  const picSrc = pic.getAttribute("src");
  pic.addEventListener("click", function () {
    console.log();
    dialog.classList.remove("hidden");
    overlay.classList.remove("hidden");
    dialogPic.setAttribute("src", picSrc);
  });
}

const dialog = document.querySelector(".dialog");
const overlay = document.querySelector(".overlay");
const closeDialogBtn = document.querySelector(".close-dialog");

closeDialog = function () {
  dialog.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeDialogBtn.addEventListener("click", closeDialog);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !dialog.classList.contains("hidden")) {
    closeDialog();
  }
});

overlay.addEventListener("click", closeDialog);
/*




*/
