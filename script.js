const circle = document.querySelector('#circle');
const article = document.querySelectorAll('article');

article.forEach(function(el,index){
  el.addEventListener('mouseenter',f=>{
    circle.style.animationPlayState = "paused"; 
  });

  el.addEventListener('mouseleave',f=>{
    circle.style.animationPlayState = "running"; 
  }); 
})