const submitMessage = document.querySelector(".contact-forms button");

submitMessage.addEventListener("click", function () {
  document.querySelector(".contact-forms").innerHTML = `
  <h2>Thank you for your message.</h2>`;
});
