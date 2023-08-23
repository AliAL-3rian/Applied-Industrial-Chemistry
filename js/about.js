var items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  var itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// الصلاه على النبي 


document.addEventListener('DOMContentLoaded', function () {
  const intervalDuration = 500000; // الفترة الزمنية بالميليثانية ( ثانية)  
  function showPrayerMessage() {
    alert('صلي على النبي');
  }

  // استدعاء الدالة كل فترة زمنية محددة
  setInterval(function () {
    showPrayerMessage();
  }, intervalDuration);
  });