const input = document.getElementById("username");
const inputIcon = document.querySelector(".check");


input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      input.classList.add("valid");
      inputIcon.classList.remove("fa-times");
      inputIcon.classList.add("fa-check");
      inputIcon.style.color = "#6FFFE9"
      inputIcon.style.opacity = 1;
    } else {
      input.classList.remove("valid");
      inputIcon.classList.remove("fa-check");
      inputIcon.classList.add("fa-times");
      inputIcon.style.color = "#E63946"
      inputIcon.style.opacity = 1;
    }
  });
  
const input1 = document.getElementById("email");
const inputIcon1 = document.querySelector(".check1");


input1.addEventListener("input", () => {
    if (input1.value.trim() !== "") {
      input1.classList.add("valid");
      inputIcon1.classList.remove("fa-times");
      inputIcon1.classList.add("fa-check");
      inputIcon1.style.color = "#6FFFE9"
      inputIcon1.style.opacity = 1;
    } else {
      input1.classList.remove("valid");
      inputIcon1.classList.remove("fa-check");
      inputIcon1.classList.add("fa-times");
      inputIcon1.style.color = "#E63946"
      inputIcon1.style.opacity = 1;
    }
  });
  

const input2 = document.getElementById("password");
const inputIcon2 = document.querySelector(".check2");


input2.addEventListener("input", () => {
    if (input2.value.trim() !== "") {
      input2.classList.add("valid");
      inputIcon2.classList.remove("fa-times");
      inputIcon2.classList.add("fa-check");
      inputIcon2.style.color = "#6FFFE9"
      inputIcon2.style.opacity = 1;
    } else {
      input2.classList.remove("valid");
      inputIcon2.classList.remove("fa-check");
      inputIcon2.classList.add("fa-times");
      inputIcon2.style.color = "#E63946"
      inputIcon2.style.opacity = 1;
    }
  });
  
const input3 = document.getElementById("repeat");
const inputIcon3 = document.querySelector(".check3");


input3.addEventListener("input", () => {
    if (input3.value.trim() !== "") {
      input3.classList.add("valid");
      inputIcon3.classList.remove("fa-times");
      inputIcon3.classList.add("fa-check");
      inputIcon3.style.color = "#6FFFE9"
      inputIcon3.style.opacity = 1;
    } else {
      input3.classList.remove("valid");
      inputIcon3.classList.remove("fa-check");
      inputIcon3.classList.add("fa-times");
      inputIcon3.style.color = "#E63946"
      inputIcon3.style.opacity = 1;
    }
  });