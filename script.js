// const image = document.getElementById('rotatingimg');
// let currentscroll = 0;

// window.addEventListener('scroll',() =>{
//     const scrollY = window.scrollY;

//     const rotationAngle = scrollY;

//     image.style.transform = `rotate(${rotationAngle}deg)`;
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const rotatingImg = document.querySelector(".rotatingimg");
//     let rotation = 0;
  
//     window.addEventListener("wheel", function (event) {
//       rotation += event.deltaY * 0.5; // You can adjust the rotation speed as needed
//       rotatingImg.style.transform = `rotate(${rotation}deg)`;
//     });
//   });
  

// document.addEventListener("DOMContentLoaded", function () {
//     const rotatingImg = document.querySelector(".rotatingimg");
//     let rotation = 0;
  
//     window.addEventListener("wheel", function (event) {
//       rotation += event.deltaY * 0.5;
//       rotatingImg.style.transform = `rotate(${rotation}deg)`;
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const rotatingImg = document.querySelector(".rotatingimg");
//     let rotation = 0;

//     window.addEventListener("scroll", function () {
//         rotation = window.scrollY / 2; // You can adjust the speed here
//         rotatingImg.style.transform = `rotate(${rotation}deg)`;
//     });
// });
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.querySelector(".rotatingimg");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}
let menu=document.querySelector(".repo");
let kk=document.querySelector(".kk");
let flag=0;
 function hello(){
    if(flag==0){
        console.log(flag);
        menu.style.display="block";
        kk.style.display="none";
        
        flag=1;
    }
    else{
        console.log(flag);
        menu.style.display="none";
        kk.style.display="block";
        flag=0;
    }
 }