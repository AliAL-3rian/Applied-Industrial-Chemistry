// تعريف الترجمة
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

// تحديث النصوص بناءً على اللغة
function updateTranslations(language) {
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// تعريف عناصر واجهة المستخدم
const languageButton = document.getElementById("language-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const arabicBtn = document.getElementById("arabic-btn");
const englishBtn = document.getElementById("english-btn");

// وظيفة تبديل اللغة
function setLanguage(language) {
    if (language === "ar") {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        languageButton.innerHTML = '<i class="fas fa-globe"></i> العربية';
        updateTranslations("ar");
    } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        languageButton.innerHTML = '<i class="fas fa-globe"></i> English';
        updateTranslations("en");
    }
    localStorage.setItem("language", language);
}

// إظهار/إخفاء القائمة عند النقر على زر اللغة
languageButton.addEventListener("click", (e) => {
    e.stopPropagation(); // منع إغلاق القائمة عند النقر على الزر نفسه
    dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
});

// التحقق من اللغة المخزنة وتطبيقها عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "en"; // افتراضيًا الإنجليزية
    setLanguage(savedLanguage);
});

// إغلاق القائمة عند النقر في أي مكان خارجها
document.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
});

// تغيير اللغة عند النقر على زر اللغة داخل القائمة
arabicBtn.addEventListener("click", () => {
    setLanguage("ar");
    dropdownMenu.style.display = "none"; // إخفاء القائمة بعد الاختيار
});

englishBtn.addEventListener("click", () => {
    setLanguage("en");
    dropdownMenu.style.display = "none"; // إخفاء القائمة بعد الاختيار
});