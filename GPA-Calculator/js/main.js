document.addEventListener("DOMContentLoaded", () => {
    let termCount = 0;

    // Initialize grading system
    currentGradingSystem = localStorage.getItem("gradingSystem") || "4.0";
    document.getElementById("current-grading-system").textContent = translations[currentLang][`gradingSystem${currentGradingSystem.replace(".", "")}`] || `نظام ${currentGradingSystem}`;

    // Initialize banners
    document.getElementById("previous-cumulative-container").insertAdjacentHTML("beforeend", createPreviousCumulativeBanner());
    document.getElementById("cumulative-term-container").insertAdjacentHTML("beforeend", createCumulativeTermBanner());

    // Load auto-saved data
    loadAutoSavedData();

    // Add term button
    document.getElementById("add-term").addEventListener("click", (event) => {
        event.preventDefault();
        termCount++;
        document.getElementById("terms-container").insertAdjacentHTML("beforeend", createTerm(termCount));
        reassignTermNumbers();
        autoSave();
    });

    // Export to PDF
    document.getElementById("export-pdf").addEventListener("click", exportToPDF);

    // Share results
    document.getElementById("share-results").addEventListener("click", shareResults);

    // Reset data
    document.getElementById("reset-data").addEventListener("click", () => {
        localStorage.removeItem("gpaData");
        document.getElementById("terms-container").innerHTML = "";
        document.querySelector(".previous-cumulative-percentage").value = "";
        document.querySelector(".previous-cumulative-points").value = "";
        document.querySelector(".previous-cumulative-hours").value = "";
        document.querySelector(".cumulative-term-percentage").textContent = "0.000%";
        document.querySelector(".cumulative-term-grade").textContent = "-";
        document.querySelector(".cumulative-term-points").textContent = "0.00";
        document.querySelector(".cumulative-term-hours").textContent = "0";
        termCount = 0;
        showToast(translations[currentLang].resetSuccess || "Data reset successfully!", "success");
    });

    // Grading system toggle
    document.getElementById("grading-system-button").addEventListener("click", () => {
        const dropdownMenu = document.querySelector(".grading-system-dropdown .dropdown-menu");
        dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
    });

    document.querySelectorAll(".grading-system-dropdown .dropdown-item").forEach((item) => {
        item.addEventListener("click", () => {
            const selectedGradingSystem = item.getAttribute("data-grading");
            currentGradingSystem = selectedGradingSystem;
            localStorage.setItem("gradingSystem", selectedGradingSystem);
            document.getElementById("current-grading-system").textContent = translations[currentLang][`gradingSystem${selectedGradingSystem.replace(".", "")}`] || `نظام ${selectedGradingSystem}`;
            document.querySelector(".grading-system-dropdown .dropdown-menu").style.display = "none";

            // Recalculate everything when grading system changes
            document.querySelectorAll(".term").forEach((term) => {
                const termId = term.id.split("-")[1];
                calculateTermResults(termId);
            });
            calculateCumulativeGPA();
        });
    });

    // Event delegation for dynamic elements
    document.body.addEventListener("click", (event) => {
        if (event.target.closest(".add-subject")) {
            event.preventDefault();
            const termTable = event.target.closest(".term").querySelector("tbody");
            const rowCount = termTable.querySelectorAll("tr").length + 1;
            termTable.insertAdjacentHTML("beforeend", createSubjectRow(rowCount));
            autoSave();
        }

        if (event.target.closest(".delete-term")) {
            event.preventDefault();
            const term = event.target.closest(".term");
            term.remove();
            reassignTermNumbers();
            calculateCumulativeGPA();
            autoSave();
        }

        if (event.target.closest(".delete-subject")) {
            event.preventDefault();
            const row = event.target.closest("tr");
            const term = event.target.closest(".term");
            const termId = term.id.split("-")[1];
            row.remove();
            calculateTermResults(termId);
            calculateCumulativeGPA();
            autoSave();
        }
    });

    // Input validation and calculations
    document.body.addEventListener("input", (event) => {
        if (event.target.classList.contains("subject-degree") || event.target.classList.contains("subject-hour")) {
            if (validateInput(event.target)) {
                const row = event.target.closest("tr");
                const term = event.target.closest(".term");
                const termId = term.id.split("-")[1];
                calculateSubjectPoints(row);
                calculateTermResults(termId);
                calculateCumulativeGPA();
                autoSave();
            }
        }

        if (event.target.classList.contains("previous-cumulative-percentage") ||
            event.target.classList.contains("previous-cumulative-points") ||
            event.target.classList.contains("previous-cumulative-hours")) {
            if (validateInput(event.target)) {
                calculateCumulativeGPA();
                autoSave();
            }
        }
    });

    // Grade selection
    document.body.addEventListener("change", (event) => {
        if (event.target.classList.contains("subject-rating")) {
            const grade = event.target.value;
            const row = event.target.closest("tr");
            const degreeField = row.querySelector(".subject-degree");
            degreeField.value = getDegreeFromGrade(grade);
            calculateSubjectPoints(row);
            const term = event.target.closest(".term");
            const termId = term.id.split("-")[1];
            calculateTermResults(termId);
            calculateCumulativeGPA();
            autoSave();
        }
    });

    // Add initial term
    if (document.querySelectorAll(".term").length === 0) {
        document.getElementById("add-term").click();
    }
});

function reassignTermNumbers() {
    const terms = document.querySelectorAll(".term");
    termCount = 0;
    terms.forEach((term) => {
        termCount++;
        const header = term.querySelector("h2");
        header.textContent = `${translations[currentLang].termResult} ${termCount}`;
        term.id = `term-${termCount}`;
    });
}