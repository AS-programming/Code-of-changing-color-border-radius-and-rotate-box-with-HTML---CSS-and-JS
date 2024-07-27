box = document.getElementById("box");
input1 = document.getElementById("input1");
input2 = document.getElementById("input2");
input3 = document.getElementById("input3");
input1.addEventListener("input", () => {
  document.getElementById("box").innerText = input1.value;

  box.style.background = input1.value;
});

input2.addEventListener("input", () => {
  box.style.borderRadius = input2.value;
});

input3.addEventListener("input", () => {
  const rotationValue = input3.value;
  if (rotationValue === "") {
    box.style.transform = "rotate(0deg)";
  } else {
    box.style.transform = `rotate(${rotationValue}deg)`;
  }
});
