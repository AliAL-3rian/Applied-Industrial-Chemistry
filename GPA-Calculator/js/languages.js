const translations = {
    en: {
        title: "GPA Calculator",
        description: "Calculate your GPA easily and accurately",
        previousCumulative: "Previous Cumulative Data",
        cumulativeTerm: "Cumulative Terms",
        termResult: "Term Result",
        total: "Total",
        percentage: "Percentage",
        grade: "Grade",
        points: "Points",
        hours: "Hours",
        subjectName: "Course Name",
        degree: "Degree",
        addTerm: "Add New Term",
        export: "Export as PDF",
        reset: "Reset Data",
        share: "Share Results",
        deleteTerm: "Delete Term",
        addSubject: "Add Course",
        undefined: "Not Specified",
        statistics: "GPA Statistics",
        tips: "Tips to Improve Your GPA",
        tip1: "Focus on courses with higher credit hours as they impact your GPA more.",
        tip2: "Improve your grades in courses where you scored low.",
        tip3: "Organize your time well to review all subjects before exams.",
        previousCumulativeTip: "Enter your previous cumulative data to update the overall GPA.",
        cumulativeTermTip: "This section shows the cumulative GPA based on all terms.",
        invalidDegree: "Please enter a valid degree between 0 and 100.",
        invalidHours: "Please enter valid hours between 0 and 3.",
        invalidPercentage: "Please enter a valid cumulative percentage between 0 and 100.",
        invalidPoints: "Please enter valid cumulative points between 0 and 4 or 5 depending on the system.",
        exportSuccess: "Data saved as PDF successfully!",
        shareMessage: "My Cumulative GPA Results:",
        shareError: "Failed to share results.",
        copySuccess: "Results copied to clipboard!",
        gradingSystem: "Grading System",
        gradingSystem4: "4.0 System",
        gradingSystem5: "5.0 System",
    },
    ar: {
        title: "حاسبة المعدل التراكمي",
        description: "احسب معدلك الدراسي بسهولة ودقة",
        previousCumulative: "بيانات التراكمي السابق",
        cumulativeTerm: "تراكمي الفصول",
        termResult: "نتيجة الفصل",
        total: "المجموع",
        percentage: "النسبة",
        grade: "التقدير",
        points: "النقاط",
        hours: "عدد الساعات",
        subjectName: "اسم المقرر",
        degree: "الدرجة",
        addTerm: "إضافة فصل دراسي جديد",
        export: "تصدير كملف PDF",
        reset: "إعادة تعيين",
        share: "مشاركة النتائج",
        deleteTerm: "حذف الفصل",
        addSubject: "أضف مادة",
        undefined: "غير محدد",
        statistics: "إحصائيات المعدل",
        tips: "نصائح لتحسين معدلك",
        tip1: "ركز على المواد ذات الساعات العالية لأنها تؤثر بشكل أكبر على المعدل.",
        tip2: "حاول تحسين درجاتك في المواد التي حصلت فيها على تقدير منخفض.",
        tip3: "نظم وقتك جيدًا لتتمكن من مراجعة جميع المواد قبل الامتحانات.",
        previousCumulativeTip: "أدخل بياناتك التراكمية السابقة لتحديث المعدل الكلي.",
        cumulativeTermTip: "هذا القسم يعرض المعدل التراكمي الكلي بناءً على جميع الفصول.",
        invalidDegree: "يرجى إدخال درجة صحيحة بين 0 و 100.",
        invalidHours: "يرجى إدخال عدد ساعات صحيح بين 0 و 3.",
        invalidPercentage: "يرجى إدخال نسبة تراكمية صحيحة بين 0 و 100.",
        invalidPoints: "يرجى إدخال نقاط تراكمية صحيحة بين 0 و 4 أو 5 حسب النظام.",
        exportSuccess: "تم حفظ البيانات كملف PDF بنجاح!",
        shareMessage: "نتائج معدلي التراكمي:",
        shareError: "فشل في مشاركة النتائج.",
        copySuccess: "تم نسخ النتائج إلى الحافظة!",
        gradingSystem: "نظام الدرجات",
        gradingSystem4: "نظام 4.0",
        gradingSystem5: "نظام 5.0",
    },
};

let currentLang = localStorage.getItem("language") || "ar";

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    updateText();
}

function updateText() {
    document.querySelectorAll("[data-translate]").forEach((el) => {
        const key = el.getAttribute("data-translate");
        el.textContent = translations[currentLang][key] || key;
    });

    document.querySelectorAll("input[placeholder]").forEach((el) => {
        const key = el.getAttribute("placeholder");
        if (translations[currentLang][key]) {
            el.setAttribute("placeholder", translations[currentLang][key]);
        }
    });

    document.getElementById("current-language").textContent = currentLang === "ar" ? "العربية" : "English";
    document.getElementById("current-grading-system").textContent = translations[currentLang][`gradingSystem${currentGradingSystem.replace(".", "")}`] || `نظام ${currentGradingSystem}`;
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
});

document.getElementById("language-button").addEventListener("click", () => {
    const dropdownMenu = document.querySelector(".language-dropdown .dropdown-menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
});

document.querySelectorAll(".language-dropdown .dropdown-item").forEach((item) => {
    item.addEventListener("click", () => {
        const selectedLang = item.getAttribute("data-lang");
        setLanguage(selectedLang);
        document.querySelector(".language-dropdown .dropdown-menu").style.display = "none";
    });
});