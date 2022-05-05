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
