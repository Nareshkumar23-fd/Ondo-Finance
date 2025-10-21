
/*
// onclick=document.getElementsByClassName('touch1').style.display='none';
// onclick=document.getElementById('demo').style.display='none';
// parent murugan
const parent = document.getElementById("murugan");

// get all children inside murugan
const children = document.getElementById("vanny1");
// console.log(children);



// ✅ make the first touch child active
// document.getElementById("touch1").classList.add("active");

// add event to each child
// children.forEach(child => {
//   child.addEventListener("click", function () {
//     child.forEach(c => c.classList.remove("active"));

//     child.classList.add("active");
//   });
// });

children.addEventListener("click",(e) => {

children.classList.toggle("active")
 
}) */


let vans = document.querySelectorAll(".vans");
let defaultCard = document.querySelectorAll(".default");
let touch = document.querySelectorAll(".touch");

for (let i = 0; i < vans.length; i++) {
  vans[i].addEventListener("click", () => {
    // Remove "active" from all
    for (let j = 0; j < vans.length; j++) {
      vans[j].classList.remove("active");
       touch[j].classList.remove("touch_block");
    defaultCard[j].classList.remove("default_none");
    }
    // Add "active" only to the clicked one
    vans[i].classList.add("active");
    touch[i].classList.add("touch_block")
    defaultCard[i].classList.add("default_none")
  });
}


 