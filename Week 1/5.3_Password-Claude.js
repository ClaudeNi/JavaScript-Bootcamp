function simpleIfPassword(password) {
    if (password.length >= 7) {
        return "Strong";
    }
    return "Weak";
}

function simpleTernaryPassword(password) {
    return password.length >= 7 ? "Strong" : "Weak";
}

function simpleAndAndPassword(password) {
    return password.length > 7 && "Strong" || "Weak";
}

function advancedPassword(password) {
    return password.length == 7 ? "Strong" : password.length < 7 ? "Weak" : /[A-Z]/.test(password) ? "Very Strong" : "Strong";
}
