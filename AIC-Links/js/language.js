const translations = {
    en: {
        title: "Applied Industrial Chemistry",
        description: "Faculty of Science - Zagazig University",
        studentNumber: "Get Student Code",
        payFees: "Pay Tuition Fees",
        registerCourses: "Register Courses",
        results: "Results",
        militaryEducation: "Military Education Registration",
        gpaCalculator: "GPA Calculator",
    },
    ar: {
        title: "الكيمياء التطبيقية الصناعية",
        description: "كلية العلوم - جامعة الزقازيق",
        studentNumber: "الحصول على كود الطالب",
        payFees: "دفع الرسوم الدراسية",
        registerCourses: "تسجيل المقررات الدراسية",
        results: "النتيجة",
        militaryEducation: "التسجيل في التربية العسكرية",
        gpaCalculator: "حساب المعدل الفصلي",
    },
};

const languageButton = document.getElementById("language-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const arabicBtn = document.getElementById("arabic-btn");
const englishBtn = document.getElementById("english-btn");

function updateTranslations(language) {
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[language][key];
    });
}

function setLanguage(language) {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    languageButton.innerHTML = `<i class="fas fa-globe"></i> ${language === "ar" ? "العربية" : "English"}`;
    updateTranslations(language);
    localStorage.setItem("language", language);
}

const savedLanguage = localStorage.getItem("language") || "ar";
setLanguage(savedLanguage);

languageButton.addEventListener("click", () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
});

arabicBtn.addEventListener("click", () => {
    setLanguage("ar");
    dropdownMenu.style.display = "none";
});

englishBtn.addEventListener("click", () => {
    setLanguage("en");
    dropdownMenu.style.display = "none";
});

document.addEventListener("click", (e) => {
    if (!languageButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = "none";
    }
});