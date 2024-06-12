let imgBox = document.getElementById("imgBox");
let qr = document.getElementById("qrimage");
let text = document.getElementById("qrText");

function qrGenerator() {
  if (text.value.length > 0) {
    qr.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      text.value;
    imgBox.classList.add("show-img");
  } else {
    text.classList.add("error");
    setTimeout(() => {
      text.classList.remove("error");
    }, 1000);
  }
}
