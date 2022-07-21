
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