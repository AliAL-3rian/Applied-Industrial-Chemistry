const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))




    
    document.addEventListener('DOMContentLoaded', function () {
        const intervalDuration = 120000; // الفترة الزمنية بالميليثانية (60 ثانية)  
        function showPrayerMessage() {
        alert('صلي على النبي');
        }
    
        // استدعاء الدالة كل فترة زمنية محددة
        setInterval(function () {
        showPrayerMessage();
        }, intervalDuration);
      });