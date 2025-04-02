document.addEventListener("DOMContentLoaded", () => {
    // العناصر المطلوبة من الـ DOM
    const themeIcon = document.getElementById("theme-icon");
    const themeToggleButton = document.getElementById("theme-toggle");

    // دالة لتحديث الوضع بناءً على الثيم المختار
    const applyTheme = (theme) => {
        if (theme === "dark") {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        } else {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
        // حفظ الثيم في localStorage
        localStorage.setItem("theme", theme);
    };

    // استرجاع الثيم المحفوظ من localStorage أو استخدام الوضع الافتراضي (Light)
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // إضافة مستمع للحدث عند النقر على زر التبديل
    themeToggleButton.addEventListener("click", () => {
        const currentTheme = localStorage.getItem("theme") || "light";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(newTheme);
    });
});