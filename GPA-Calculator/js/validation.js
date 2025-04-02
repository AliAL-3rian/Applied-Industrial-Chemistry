function validateInput(inputElement) {
    const value = parseFloat(inputElement.value);
    const errorMessageElement = inputElement.parentElement.querySelector(".error-message");

    errorMessageElement.textContent = "";
    inputElement.classList.remove("input-error");

    if (inputElement.classList.contains("subject-degree")) {
        if (isNaN(value) || value < 0 || value > 100) {
            errorMessageElement.textContent = translations[currentLang].invalidDegree || "يرجى إدخال درجة صحيحة بين 0 و 100";
            inputElement.classList.add("input-error");
            return false;
        }
    } else if (inputElement.classList.contains("subject-hour")) {
        if (isNaN(value) || value < 0 || value > 3) {
            errorMessageElement.textContent = translations[currentLang].invalidHours || "يرجى إدخال عدد ساعات صحيح بين 0 و 3";
            inputElement.classList.add("input-error");
            return false;
        }
    } else if (inputElement.classList.contains("previous-cumulative-percentage")) {
        if (isNaN(value) || value < 0 || value > 100) {
            errorMessageElement.textContent = translations[currentLang].invalidPercentage || "يرجى إدخال نسبة تراكمية صحيحة بين 0 و 100";
            inputElement.classList.add("input-error");
            return false;
        }
    } else if (inputElement.classList.contains("previous-cumulative-points")) {
        const maxPoints = currentGradingSystem === "4.0" ? 4 : 5;
        if (isNaN(value) || value < 0 || value > maxPoints) {
            errorMessageElement.textContent = translations[currentLang].invalidPoints || `يرجى إدخال نقاط تراكمية صحيحة بين 0 و ${maxPoints}`;
            inputElement.classList.add("input-error");
            return false;
        }
    }

    return true;
}

function showToast(message, type) {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}