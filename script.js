var sliderContent = document.querySelector(".sliderContent");
		var btn1 =document.querySelector("#btn1");
		var btn2 =document.querySelector("#btn2");
		var btn3 =document.querySelector("#btn3");
		var btn4 =document.querySelector("#btn4");
		var btn5 =document.querySelector("#btn5");

		var btn_1=document.querySelector("#btn_1");
		var btn_2=document.querySelector("#btn_2");
		var btn_3=document.querySelector("#btn_3");
		var btn_4=document.querySelector("#btn_4");
		var btn_5=document.querySelector("#btn_5");

		var btnSlider=document.querySelector(".btnSlider");
		function clear() {
			sliderContent.style.display = "none";
			btn1.style.display="none";
			btn2.style.display="none";
			btn3.style.display="none";
			btn4.style.display="none";
			btn5.style.display="none";

			btn_1.style.backgroundColor="transparent";
			btn_2.style.backgroundColor="transparent";
			btn_3.style.backgroundColor="transparent";
			btn_4.style.backgroundColor="transparent";
			btn_5.style.backgroundColor="transparent";

			btn_1.style.color="black";
			btn_2.style.color="black";
			btn_3.style.color="black";
			btn_4.style.color="black";
			btn_5.style.color="black";

		};
		function slide1(){
			clear();
			btn1.style.display="block";
			btn_1.style.backgroundColor="black";
			btn_1.style.color="white";
		};
		
		function slide2(){
			clear();
			btn2.style.display="block";
			btn_2.style.backgroundColor="black";
			btn_2.style.color="white";
		};
		function slide3(){
			clear();
			btn3.style.display="block";
			btn_3.style.backgroundColor="black";
			btn_3.style.color="white";
		};
		function slide4(){
			clear();
			btn4.style.display="block";
			btn_4.style.backgroundColor="black";
			btn_4.style.color="white";
		};
		function slide5(){
			clear();
			btn5.style.display="block";
			btn_5.style.backgroundColor="black";
			btn_5.style.color="white";
		};
		document.querySelector('#btn_1').onclick = function(){slide1();};
		document.querySelector('#btn_2').onclick = function(){slide2();};
		document.querySelector('#btn_3').onclick = function(){slide3();};
		document.querySelector('#btn_4').onclick = function(){slide4();}; 
		document.querySelector('#btn_5').onclick = function(){slide5();}; 
		var slides = [slide1, slide2, slide3, slide4, slide5];
		var num =0;
		var i = setInterval(next,7000);
		function next(){
			var slider =document.querySelector(".sliderContent");
			num++
			if(num >= slides.length){
				num = 0;
			}
			slides[num]();
		}
		function checker(){
			alert("Hi!");
		};

		

		var reg = document.querySelector('.form-content');
		var rw = document.querySelector('.reg-window');
		var lw = document.querySelector('.log-window');

function regToggle(){
	let fc = document.querySelector('.form-container');
	rw.style.height = 370 + "px";
	rw.style.display ="block";
	lw.style.display =" none";
};
function logToggle(){
	rw.style.display = "none";
	lw.style.display = "block";
};
function toggleMenu(){
			const login = document.querySelector('.regform');
			login.classList.toggle('active');
		};