const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const cleanInput = (str) => {
  const regex = /[^a-zA-Z0-9]/g;
  return str.replace(regex, "").toLowerCase();
};

const isPalindrom = (original) => {
  const cleanedInput = cleanInput(original);
  const reversedInput = cleanedInput.split("").reverse().join("");
  return reversedInput === cleanedInput;
};

checkButton.addEventListener("click", () => {
  const input = textInput.value.trim();
  if (input === "") {
    return alert("Please input a value");
  }

  if (isPalindrom(input)) {
    resultText.classList.add("corret");
    resultText.classList.remove("incorrect");
    resultText.textContent = `${input} is a Palindrom`;
  } else {
    resultText.classList.remove("correct");
    resultText.classList.add("incorrect");
    resultText.textContent = `${input} is a not Palindrom`;
  }
});
