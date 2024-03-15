const signInLink = document.querySelector(".signInBtn-link");
const signUpLink = document.querySelector(".signUpBtn-link");

const wrapper = document.querySelector(".wrapper");

signUpLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

signInLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
