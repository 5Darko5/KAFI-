document.getElementById("botunfash1").addEventListener("click", function() {
    document.getElementById("divfash").classList.remove("pomicanje1");
    document.getElementById("divfash").classList.remove("pomicanje2");
    document.getElementById("divfash").classList.remove("pomicanje3");
    document.getElementById("botunfash1").classList.add("vecibotun");
    document.getElementById("botunfash2").classList.remove("vecibotun");
    document.getElementById("botunfash3").classList.remove("vecibotun");
    document.getElementById("botunfash4").classList.remove("vecibotun");
    document.getElementsByClassName("unutarnjibotun")[0].classList.add("stisnut");
    document.getElementsByClassName("unutarnjibotun")[1].classList.remove("stisnut");
    document.getElementsByClassName("unutarnjibotun")[2].classList.remove("stisnut");
    document.getElementsByClassName("unutarnjibotun")[3].classList.remove("stisnut");

})

document.getElementById("botunfash2").addEventListener("click", function() {
    document.getElementById("divfash").classList.add("pomicanje1");
    document.getElementById("divfash").classList.remove("pomicanje2");
    document.getElementById("divfash").classList.remove("pomicanje3");
    document.getElementById("botunfash1").classList.remove("vecibotun");
    document.getElementById("botunfash2").classList.add("vecibotun");
    document.getElementById("botunfash3").classList.remove("vecibotun");
    document.getElementById("botunfash4").classList.remove("vecibotun");
    document.getElementsByClassName("unutarnjibotun")[0].classList.remove("stisnut");
    document.getElementsByClassName("unutarnjibotun")[1].classList.add("stisnut");
    document.getElementsByClassName("unutarnjibotun")[2].classList.remove("stisnut");
    document.getElementsByClassName("unutarnjibotun")[3].classList.remove("stisnut");
 })

 document.getElementById("botunfash3").addEventListener("click", function() {
    document.getElementById("divfash").classList.remove("pomicanje1");
    document.getElementById("divfash").classList.add("pomicanje2");
    document.getElementById("divfash").classList.remove("pomicanje3");
    document.getElementById("botunfash1").classList.remove("vecibotun");
    document.getElementById("botunfash2").classList.remove("vecibotun");
    document.getElementById("botunfash3").classList.add("vecibotun");
    document.getElementById("botunfash4").classList.remove("vecibotun");
    document.getElementsByClassName("unutarnjibotun")[0].classList.remove("stisnut");
    document.getElementsByClassName("unutarnjibotun")[1].classList.remove("stisnut");
    document.getElementsByClassName("unutarnjibotun")[2].classList.add("stisnut");
    document.getElementsByClassName("unutarnjibotun")[3].classList.remove("stisnut");
})

document.getElementById("botunfash4").addEventListener("click", function() {
    document.getElementById("divfash").classList.remove("pomicanje1");
    document.getElementById("divfash").classList.remove("pomicanje2");
    document.getElementById("divfash").classList.add("pomicanje3");
    document.getElementById("botunfash1").classList.remove("vecibotun");
    document.getElementById("botunfash2").classList.remove("vecibotun");
    document.getElementById("botunfash3").classList.remove("vecibotun");
    document.getElementById("botunfash4").classList.add("vecibotun");
    document.getElementsByClassName("unutarnjibotun")[0].classList.remove("stisnut");
    document.getElementsByClassName("unutarnjibotun")[1].classList.remove("stisnut");
    document.getElementsByClassName("unutarnjibotun")[2].classList.remove("stisnut");
    document.getElementsByClassName("unutarnjibotun")[3].classList.add("stisnut");
})


document.getElementsByClassName("botun")[0].addEventListener("mouseover", function() {
    document.getElementsByClassName("botun")[0].classList.add("hoveranbotun");
})
document.getElementsByClassName("botun")[0].addEventListener("mouseout", function() {
    document.getElementsByClassName("botun")[0].classList.remove("hoveranbotun");
})

document.getElementsByClassName("botun")[1].addEventListener("mouseover", function() {
    document.getElementsByClassName("botun")[1].classList.add("hoveranbotun");
})
document.getElementsByClassName("botun")[1].addEventListener("mouseout", function() {
    document.getElementsByClassName("botun")[1].classList.remove("hoveranbotun");
})

document.getElementsByClassName("botun")[2].addEventListener("mouseover", function() {
    document.getElementsByClassName("botun")[2].classList.add("hoveranbotun");
})
document.getElementsByClassName("botun")[2].addEventListener("mouseout", function() {
    document.getElementsByClassName("botun")[2].classList.remove("hoveranbotun");
})


document.getElementsByClassName("botun")[0].addEventListener("mousedown", function() {
    document.getElementsByClassName("botun")[0].classList.add("stisnutbotun");
})
document.getElementsByClassName("botun")[0].addEventListener("mouseup", function() {
    document.getElementsByClassName("botun")[0].classList.remove("stisnutbotun");
})

document.getElementsByClassName("botun")[1].addEventListener("mousedown", function() {
    document.getElementsByClassName("botun")[1].classList.add("stisnutbotun");
})
document.getElementsByClassName("botun")[1].addEventListener("mouseup", function() {
    document.getElementsByClassName("botun")[1].classList.remove("stisnutbotun");
})

document.getElementsByClassName("botun")[2].addEventListener("mousedown", function() {
    document.getElementsByClassName("botun")[2].classList.add("stisnutbotun");
})
document.getElementsByClassName("botun")[2].addEventListener("mouseup", function() {
    document.getElementsByClassName("botun")[2].classList.remove("stisnutbotun");
})
