const navSlide = () => {
    const buger = document.querySelector(".burger");
    const nav = document.querySelector(".links");
  
    buger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      //animation
      // navlinks.forEach((link, index) => {
      //     if(link.style.animation){
      //     link.style.animation='';
      //     }
      //     else
      //     {
      //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      //     }
         
      // });
    });
  };
  
  navSlide();
  