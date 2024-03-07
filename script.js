var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    // effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
  
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".fa-arrow-right",
      prevEl: ".fa-arrow-left",
    },
  });
  
  // scroll
  
  $(document).ready(function (){
  
  
    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
        $(".nav-bar").addClass('nav-scroll');
        }else{
        $(".nav-bar").removeClass('nav-scroll');
        }
    });
  
  });
  
  
  

  
  // navbar toggle
  
  var toggleBtn = document.querySelector(".toggle-icon")
  var close = document.querySelector(".close-btn")
  var links = document.querySelector(".nav-links")
  
  toggleBtn.addEventListener("click", nav_toggle);
  close.addEventListener("click", nav_toggle);
  links.addEventListener("click", nav_toggle);
  
  function nav_toggle() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".close-btn").classList.toggle("close-btn-act");
  }
  
  var toggleBtn = document.querySelector(".toggle-btn")
  
  // *************************
  
  AOS.init({
    duration: 900,
    delay: 300,
  });
  
  // slide animation lading
  
  let slides = document.querySelectorAll(".slide");
  let index = 0;
  
  function next() {
    slides[index].classList.remove("act");
    index = (index + 1) % slides.length;
    slides[index].classList.add("act");
  }
  
  function prev() {
    slides[index].classList.remove("act");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("act");
  }
  setInterval(prev, 10000);
  
  // ******************
  
  window.addEventListener("load", () => {
    const loder = document.querySelector(".loader-div");
  
    loder.classList.add("loder-hide");
  
    loder.addEventListener("transitionend", () => {
      document.body.removeChild(loader-div)
    });
  });
  
   
  
  
  // google translat
  
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      autoDisplay: false,
      includedLanguages: 'en,fr,ar,ur'
    }, 'google_translate_element');
  }
  
  
  
  // const lenis = new Lenis()

  // function raf(time) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }
  
  // requestAnimationFrame(raf)



  
  
  

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".text-scroll",
    start:"50% 70%",
    end:"50% 20%",
    // markers:true,
    scrub: 2,
  },
});
tl.to(".text-h1-2",{
  width: "100%",
});
tl.to(".text-h2-2",{
  delay: -0.3,
  width: "100%",
});





let pl = gsap.timeline({
  scrollTrigger:{
    trigger:".text-scroll",
    start:"50% 50%",
    end:"140% 50%",
    // markers:true,
    scrub: 1,
  },
});
pl.to(".powder",{
  y:750,
  x:-700,
  rotateZ: 0,
  scale: .8,
});



let mm = gsap.matchMedia();

mm.add("(max-width: 1300px)",() =>{
 
  
  let pl = gsap.timeline({
    scrollTrigger:{
      trigger:".text-scroll",
      start:"50% 50%",
      end:"140% 50%",
      // markers:true,
      scrub: 1,
    },
  });
  pl.to(".powder",{
    y:680,
    x:-500,
    rotateZ: 0,
    scale: .7,
  });


});

mm.add("(max-width: 768px)",() =>{
 
  
  let pl = gsap.timeline({
    scrollTrigger:{
      trigger:".text-scroll",
      start:"50% 50%",
      end:"140% 50%",
      // markers:true,
      scrub: 1,
    },
  });
  pl.to(".powder",{
    y: 790,
    x: 5,
    rotateZ: 0,
    scale: .5,
  });


})


