function locoScroll(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locoScroll()
function cursorAnimation(){
  var page1Content = document.querySelector("#page1-content")
  var cursor = document.querySelector("#cursor")

  page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
      x:dets.x-50,
      y:dets.y-70,
    })
  })

  page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
      opacity:1
    })
  })

  page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
      opacity:0
    })
  })
}
cursorAnimation()
function loader(){
  var tl = gsap.timeline()
  tl.from("#loader span",{
    x:30,
    duration:1,
    opacity:0,
    stagger:0.1,
  })
  tl.to("#loader span",{
    x:-30,
    duration:1,
    opacity:0,
    stagger:0.1,
  })
  tl.to("#loader",{
    opacity:0,
    display:"none"
  })
}
loader()
function page1Content(){
  gsap.from("#page1-content #bottom-h span",{
    y:"110%",
    delay:2.4,
    duration:0.7,
    stagger:0.03,
  })
  gsap.from("#page1-content #left>span",{
    x:30,
    opacity:0,
    delay:2.5,
    duration:1,
    stagger:0.1,
  })
  gsap.from("#page1-content #right>span",{
    opacity:0,
    delay:2.5,
    duration:1,
  })
}
page1Content()
function textAnimation(){
  gsap.to("#page2 #tophh>p",{
    y:0,
    duration:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page2",
      start:"top 500",
      end:"top 300",
      scrub:2
    }
  })
  gsap.to("#page2 #info span",{
    y:0,
    duration:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page2",
      start:"top 500",
      end:"top 300",
      scrub:2
    }
  })
  gsap.to("#page5 #tophh>p",{
    y:0,
  
    duration:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page5",
      start:"top 500",
      end:"top 300",
      scrub:2
    }
  })
  gsap.to("#page5 #info span",{
    y:0,
    duration:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page5",
      start:"top 500",
      end:"top 300",
      scrub:2
    }
  })
  gsap.to("#page7 #tophh>p",{
    y:0,
  
    duration:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page7",
      start:"top 500",
      end:"top 300",
      scrub:2
    }
  })
  gsap.to("#page7 #info span",{
    y:0,
    duration:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page7",
      start:"top 500",
      end:"top 300",
      scrub:2
    }
  })
}
textAnimation()
function textUnderline(){
  gsap.from("#page2 hr",{
    width:0,
    duration:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page2",
      start:"top 500",
      end:"top 300",
      scrub:2
    }
  })
  gsap.from("#page5 hr",{
    width:0,
    duration:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page5",
      start:"top 500",
      end:"top 300",
      scrub:2
    }
  })
  gsap.from("#page7 hr",{
    width:0,
    duration:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page7",
      start:"top 500",
      end:"top 300",
      scrub:2
    }
  })
}
textUnderline()
function hyperAni(){
  gsap.from("#page3 h4",{
    opacity:0,
    duration:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page3",
      start:"top 400",
      end:"top 200",
      scrub:2
    }
  })
  gsap.from("#page9 h4",{
    opacity:0,
    duration:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page9",
      start:"top 400",
      end:"top 200",
      scrub:2
    }
  })
}
hyperAni()
function btTextAni(){
  gsap.to("#bottom-hl span",{
    y:0,
    stagger:0.3,
    duration:2,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#footer",
      start:"top 600",
      end:"top 200",
      scrub:4
    }
  })
  gsap.to("#topdiv",{
    y:0,
    opacity:1,
    duration:2,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#topdiv",
      start:"top 600",
      end:"top 300",
      scrub:2,
    }
  })
  gsap.to("#middlediv",{
    opacity:1,
    duration:2,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#middlediv",
      start:"top 400",
      end:"top 500",
      scrub:2,
    }
  })
}
btTextAni()