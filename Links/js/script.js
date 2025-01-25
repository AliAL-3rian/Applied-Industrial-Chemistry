const themeToggle = document.getElementById('theme-toggle');
const darkStylesheet = document.getElementById('dark-mode-stylesheet');
const lightStylesheet = document.getElementById('light-mode-stylesheet');
const darkModeIcon = document.getElementById('darkModeIcon');

// تفعيل الوضع المحفوظ عند التحميل
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    darkStylesheet.disabled = false;
    lightStylesheet.disabled = true;
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.add('fa-moon');
    darkModeIcon.classList.remove('fa-sun');
} else {
    darkStylesheet.disabled = true;
    lightStylesheet.disabled = false;
    document.body.classList.add('light-mode');
    darkModeIcon.classList.add('fa-sun');
    darkModeIcon.classList.remove('fa-moon');
}

// تغيير الوضع عند النقر
themeToggle.addEventListener('click', () => {
    if (darkStylesheet.disabled) {
        darkStylesheet.disabled = false;
        lightStylesheet.disabled = true;
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        darkStylesheet.disabled = true;
        lightStylesheet.disabled = false;
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }
});



// وظيفة مشاركة الرابط
function shareLink(url, text) {
    if (navigator.share) {
        navigator.share({
            title: document.title, 
            text: text, 
            url: url, 
        })
        .then(() => console.log("تمت المشاركة بنجاح"))
        .catch((error) => console.error("فشل المشاركة:", error));
    } else {

        copyToClipboard(url);
        alert("تم نسخ الرابط إلى الحافظة.");
    }
}

// وظيفة نسخ الرابط إلى الحافظة
function copyToClipboard(url) {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = url;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

// إضافة أحداث زر المشاركة
document.querySelectorAll(".share-button").forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const link = button.closest(".card").querySelector(".card-link").href; 
        const text = button.closest(".card").querySelector(".card-link span").textContent;
        shareLink(link, text);
    });
});
