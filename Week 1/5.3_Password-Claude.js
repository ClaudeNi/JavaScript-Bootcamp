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
    if (password.length > 0 && password.length < 7) {
        return "Weak";
    }
    return "Strong";
}

function advancedPassword(password) {
    return password.length == 7 ? "Strong" : password.length < 7 ? "Weak" : /[A-Z]/.test(password) ? "Very Strong" : "Strong";
}

console.log(advancedPassword("123456789"));