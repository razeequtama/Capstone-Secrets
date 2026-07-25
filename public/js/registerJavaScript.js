const form = document.getElementById("register-form");

const emailInput = document.getElementById("email-input");

const passwordInput = document.getElementById("password-input");
const passwordStatus = document.getElementById("password-detector");
let isPasswordAcceptable = false;

const passwordStrengths = {
    WEAK: "Weak",
    NORMAL: "Normal",
    STRONG: "Strong"
};

// Hide the password strength indicator when the page first loads.
passwordStatus.style.display = "none";

const errorMessage = document.getElementById("error-message");

passwordInput.addEventListener("input", () => {

    // trim() removes whitespace from the beginning and end.
    // This prevents inputs like "     " from counting as a password.
    if (passwordInput.value.trim() === "") {
        passwordStatus.style.display = "none";

        // Stop running the rest of this function.
        return;
    }

    // If the password isn't empty, show the strength indicator.
    passwordStatus.style.display = "block";

    /*
    ========================================
    Weak Password
    ========================================
    A password shorter than 8 characters
    is generally considered weak regardless
    of what characters it contains.
    */
    if (passwordInput.value.length < 8) {
        passwordStatus.textContent =
            "Password Strength: " + passwordStrengths.WEAK;

        // Since we've already determined it's weak,
        // there's no need to check the remaining rules.
        return;
    }

    /*
    ========================================
    Character Checks
    ========================================
    test() returns true if the regular
    expression finds a match.

    These booleans tell us what kinds of
    characters the password contains.
    */

    // Contains at least one uppercase letter.
    const hasUppercase = /[A-Z]/.test(passwordInput.value);

    // Contains at least one lowercase letter.
    const hasLowercase = /[a-z]/.test(passwordInput.value);

    // Contains at least one number.
    const hasNumber = /\d/.test(passwordInput.value);

    // Contains at least one symbol.
    // Any character that isn't a letter or number.
    const hasSymbol = /[^a-zA-Z0-9]/.test(passwordInput.value);

    /*
    ========================================
    Strong Password
    ========================================
    A strong password has:

    - At least 8 characters
    - Uppercase letter
    - Lowercase letter
    - Number
    - Symbol
    */

    if (
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSymbol
    ) {
        passwordStatus.textContent =
            "Password Strength: " + passwordStrengths.STRONG;
        isPasswordAcceptable = true;
    }
    else
    {
        /*
        ========================================
        Normal Password
        ========================================

        The password is long enough, but it's
        missing one or more recommended
        character types.
        */

        passwordStatus.textContent =
            "Password Strength: " + passwordStrengths.NORMAL;
        isPasswordAcceptable = true;
    }
});


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
    else if(!isPasswordAcceptable)
    {
        e.preventDefault();

        errorMessage.style.display = "block";
        errorMessage.style.color = "red";
        errorMessage.textContent = "Password must be a minimum of 8 characters long!";
    }

});
