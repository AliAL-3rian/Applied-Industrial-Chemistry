const taps = document.querySelectorAll('ul li');
const divs = document.querySelectorAll('.content > div');

taps.forEach((tab) => {
  //Add click for each li
  tab.addEventListener("click" , function(e){
    taps.forEach((tab) => {
      tab.classList.remove("active");
    });
    //
    e.currentTarget.classList.add("active");
    divs.forEach((div) => {
      div.style.display = 'none';
      document.querySelector('.' + e.currentTarget.dataset.content).style.display = 'flex';
    });
    
  });
})

