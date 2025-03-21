const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const showResult = document.getElementById("result");

function checkForPalindrome(input) {
  const originalInput = input;

  if (input === "") {
    alert("Please input a value!");
    return;
  }

  showResult.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  let resultMsg = `${originalInput} ${
    lowerCaseStr === [...lowerCaseStr].reverse().join("") ? "is" : "is not"
  } a palindrome.`;

  showResult.innerText = resultMsg;

  showResult.classList.remove("hidden");
}

checkPalindromeBtn.addEventListener("click", () => {
  checkForPalindrome(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(userInput.value);
    userInput.value = "";
  }
});
