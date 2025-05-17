function generatePassword() {
    const length = document.getElementById("length").value;
    const symbols = "!@#$%^&*()-=_+";
    const digits = "0123456789";
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Ensure at least one of each type in the password
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const randomDigit = digits[Math.floor(Math.random() * digits.length)];
    const randomLower = lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    const randomUpper = upperLetters[Math.floor(Math.random() * upperLetters.length)];

    // Combine the rest of the characters based on the chosen length
    const remainingLength = length - 4; // 4 characters already chosen
    const combinedCharset = symbols + digits + lowerLetters + upperLetters;
    let password = randomSymbol + randomDigit + randomLower + randomUpper;

    for (let i = 0; i < remainingLength; i++) {
        const randomIndex = Math.floor(Math.random() * combinedCharset.length);
        password += combinedCharset[randomIndex];
    }

    // Shuffle the password characters to make it more random
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    document.getElementById("password").value = password;
}
// copy password
function copyPassword() {
    const passwordInput = document.getElementById("password");
    const range = document.createRange();
    range.selectNodeContents(passwordInput);
    
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      alert("Password copied to clipboard!");
    } catch (err) {
      alert("Failed to copy password.");
    }

    selection.removeAllRanges(); // Clear selection
  }
