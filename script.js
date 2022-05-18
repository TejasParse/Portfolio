document.querySelectorAll(".nav-link").forEach(element=>{

    element.addEventListener("mouseover",()=>{
        console.log("Hover");
        rotate(document.querySelector("#brandImage"));
    });
})

let rotateAngle = 120;

function rotate(image) {
  image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
  rotateAngle = rotateAngle + 120;
}

// document.querySelector("#github").addEventListener("mouseover",()=>{
//   console.log("Hover kiya apun");
//   // document.querySelector("#github_contact").style.display = "inline"
//   document.querySelector("#github_contact").style.opacity = 1
// })

// document.querySelector("#github").addEventListener("mouseleave",()=>{
//   console.log("Hover nikala apun");
//   // document.querySelector("#github_contact").style.display = "none"
//   document.querySelector("#github_contact").style.opacity = 0
// })