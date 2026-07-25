const errorMessage = document.getElementById("error-message");
const emailInput = document.getElementById("email-input");
const form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {

    const input = emailInput.value.trim();

    const hasAt = input.includes("@");
    const hasDot = input.includes(".");
    const atPosition = input.indexOf("@");
    const dotPosition = input.lastIndexOf(".");

    if (
        !hasAt ||
        !hasDot ||
        atPosition === 0 ||
        dotPosition < atPosition + 2 ||
        dotPosition === input.length - 1
    ) {

        e.preventDefault();

        errorMessage.style.display = "block";
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please enter a valid email address.";
    }

});