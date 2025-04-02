function shareLink(url, text, button) {
    button.classList.add('loading');
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: text,
            url: url,
        }).then(() => {
            button.classList.remove('loading');
        }).catch((error) => {
            console.error("Share failed:", error);
            button.classList.remove('loading');
        });
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert("تم نسخ الرابط إلى الحافظة");
            button.classList.remove('loading');
        });
    }
}

document.querySelectorAll(".share-button").forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const link = card.querySelector(".card-link").href;
        const text = card.querySelector(".card-link span").textContent;
        shareLink(link, text, button);
    });
});