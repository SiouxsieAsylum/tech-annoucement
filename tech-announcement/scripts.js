var background1 = document.getElementById("first-photo");
var background2 = document.getElementById("second-photo");
var background3 = document.getElementById("third-photo");
// var backgrounds = document.getElementsByClassName("background-photos");

var content1 = document.getElementById("first-paragraph");
var content2 = document.getElementById("second-paragraph");
var content3 = document.getElementById("third-paragraph");
var content4 = document.getElementById("fourth-paragraph");


//accepts a function reference and executes on next available screen repaint
window.requestAnimationFrame = window.requestAnimationFrame
||window.mozRequestAnimationFrame
||window.webkitRequestAnimationFrame
||window.msRequestAnimationFrame
||function(f) {setTimeout(f, 1000/60)};


//function
function parallax(){
	var scrolltop = window.pageYOffset;

		background1.style.top = -scrolltop * .2 + "px";
		background1.style.top = -scrolltop * .5 + "px";
		background1.style.top = -scrolltop * .7 + "px";
		content1.style.top = -scrolltop * .9 + "px";
		content2.style.top = -scrolltop * .9 + "px";
		content3.style.top = -scrolltop * .9 + "px";
		content4.style.top = -scrolltop * .9 + "px";

}

window.addEventListener('scroll', function(){
	requestAnimationFrame(parallax);
}, false)

/*~~~~~~~~~~~~~~~~~~~~~~slideshow~~~~~~~~~~~~~~~~~~~*/

//picture order: specs, 1st lady w headset, remote, medical professional, sunset

var textArr = ["Samsung Gear VR transforms virtual reality with a new handheld controller that seamlessly responds to organic, human movements in virtual experiences.","Lighter and more comfortable, and supports two year&#8217;s worth of Samsung phones", "Powered by two AAA batteries, the small controller features a volume rocker, as well as a circular touchpad and the back and home button duo to mimic what&#8217;s found on the side of the headset. On its back, there&#8217;s a single trigger, which is nice to have for the inevitable onslaught of first-person shooters.","RCSI Medical Training Sim is designed for medical professionals and trainees.This app includes an alternative fully educational and didactic mode allowing those without medical training to learn from this experience in an immersive environment.","Explore thousands of exciting 360&#111; experiences from Samsung VR&#8217;s premium video service. Lose yourself in street festivals around the world, snag front-row seats to a concert, or kayak through a protected rainforest. Plus, when you create stories of your own on Gear 360, you can upload and share them on Samsung VR. "];

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n){
	var i;
	var text = document.getElementById("text");
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {slideIndex = 1};
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display="none";
	}
	slides[slideIndex - 1].style.display = "block";
		text.innerHTML = textArr[slideIndex - 1];
}