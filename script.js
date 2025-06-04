function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    hero-imgs/ezgif-frame-001.jpg
    hero-imgs/ezgif-frame-002.jpg
    hero-imgs/ezgif-frame-003.jpg
    hero-imgs/ezgif-frame-004.jpg
    hero-imgs/ezgif-frame-005.jpg
    hero-imgs/ezgif-frame-006.jpg
    hero-imgs/ezgif-frame-007.jpg
    hero-imgs/ezgif-frame-008.jpg
    hero-imgs/ezgif-frame-009.jpg
    hero-imgs/ezgif-frame-010.jpg
    hero-imgs/ezgif-frame-011.jpg
    hero-imgs/ezgif-frame-012.jpg
    hero-imgs/ezgif-frame-013.jpg
    hero-imgs/ezgif-frame-014.jpg
    hero-imgs/ezgif-frame-015.jpg
    hero-imgs/ezgif-frame-016.jpg
    hero-imgs/ezgif-frame-017.jpg
    hero-imgs/ezgif-frame-018.jpg
    hero-imgs/ezgif-frame-019.jpg
    hero-imgs/ezgif-frame-020.jpg
    hero-imgs/ezgif-frame-021.jpg
    hero-imgs/ezgif-frame-022.jpg
    hero-imgs/ezgif-frame-023.jpg
    hero-imgs/ezgif-frame-024.jpg
    hero-imgs/ezgif-frame-025.jpg
    hero-imgs/ezgif-frame-026.jpg
    hero-imgs/ezgif-frame-027.jpg
    hero-imgs/ezgif-frame-028.jpg
    hero-imgs/ezgif-frame-029.jpg
    hero-imgs/ezgif-frame-030.jpg
    hero-imgs/ezgif-frame-031.jpg
    hero-imgs/ezgif-frame-032.jpg
    hero-imgs/ezgif-frame-033.jpg
    hero-imgs/ezgif-frame-034.jpg
    hero-imgs/ezgif-frame-035.jpg
    hero-imgs/ezgif-frame-036.jpg
    hero-imgs/ezgif-frame-037.jpg
    hero-imgs/ezgif-frame-038.jpg
    hero-imgs/ezgif-frame-039.jpg
    hero-imgs/ezgif-frame-040.jpg
    hero-imgs/ezgif-frame-041.jpg
    hero-imgs/ezgif-frame-042.jpg
    hero-imgs/ezgif-frame-043.jpg
    hero-imgs/ezgif-frame-044.jpg
    hero-imgs/ezgif-frame-045.jpg
    hero-imgs/ezgif-frame-046.jpg
    hero-imgs/ezgif-frame-047.jpg
    hero-imgs/ezgif-frame-048.jpg
    hero-imgs/ezgif-frame-049.jpg
    hero-imgs/ezgif-frame-050.jpg
    hero-imgs/ezgif-frame-051.jpg
    hero-imgs/ezgif-frame-052.jpg
    hero-imgs/ezgif-frame-053.jpg
    hero-imgs/ezgif-frame-054.jpg
    hero-imgs/ezgif-frame-055.jpg
    hero-imgs/ezgif-frame-056.jpg
    hero-imgs/ezgif-frame-057.jpg
    hero-imgs/ezgif-frame-058.jpg
    hero-imgs/ezgif-frame-059.jpg
    hero-imgs/ezgif-frame-060.jpg
    hero-imgs/ezgif-frame-061.jpg
    hero-imgs/ezgif-frame-062.jpg
    hero-imgs/ezgif-frame-063.jpg
    hero-imgs/ezgif-frame-064.jpg
    hero-imgs/ezgif-frame-065.jpg
    hero-imgs/ezgif-frame-066.jpg
    hero-imgs/ezgif-frame-067.jpg
    hero-imgs/ezgif-frame-068.jpg
    hero-imgs/ezgif-frame-069.jpg
    hero-imgs/ezgif-frame-070.jpg
    hero-imgs/ezgif-frame-071.jpg
    hero-imgs/ezgif-frame-072.jpg
    hero-imgs/ezgif-frame-073.jpg
    hero-imgs/ezgif-frame-074.jpg
    hero-imgs/ezgif-frame-075.jpg
    hero-imgs/ezgif-frame-076.jpg
    hero-imgs/ezgif-frame-077.jpg
    hero-imgs/ezgif-frame-078.jpg
    hero-imgs/ezgif-frame-079.jpg
    hero-imgs/ezgif-frame-080.jpg
    hero-imgs/ezgif-frame-081.jpg
    hero-imgs/ezgif-frame-082.jpg
    hero-imgs/ezgif-frame-083.jpg
    hero-imgs/ezgif-frame-084.jpg
    hero-imgs/ezgif-frame-085.jpg
    hero-imgs/ezgif-frame-086.jpg
    hero-imgs/ezgif-frame-087.jpg
    hero-imgs/ezgif-frame-088.jpg
    hero-imgs/ezgif-frame-089.jpg
    hero-imgs/ezgif-frame-090.jpg
    hero-imgs/ezgif-frame-091.jpg
    hero-imgs/ezgif-frame-092.jpg
    hero-imgs/ezgif-frame-093.jpg
    hero-imgs/ezgif-frame-094.jpg
    hero-imgs/ezgif-frame-095.jpg
    hero-imgs/ezgif-frame-096.jpg
    hero-imgs/ezgif-frame-097.jpg
    hero-imgs/ezgif-frame-098.jpg
    hero-imgs/ezgif-frame-099.jpg
    hero-imgs/ezgif-frame-100.jpg
    `;
  return data.split("\n")[index];
}

const frameCount = 100;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#hero>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#hero>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});

  function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  };
