const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
console.log(inputText);
inputText.addEventListener("input", handleInput);
function handleInput(event) {
  const valueInputText = event.target.value.trim();

  outputText.textContent = valueInputText === "" ? "Anonymous" : valueInputText;
}
