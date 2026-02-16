//your JS code here. If required.

let codes = document.querySelectorAll(".code");

codes.forEach((code,index) => {
	code.addEventListener("input",function(){
		if(code.innerText.length > 1 ){
			code.innerText = code.innerText[0];
		}
		if(code.innerText.length === 1 && index < codes.length-1){
			codes[index+1].focus();
		}
		
	});

	code.addEventListener("keydown",function(e){
		if(e.key === "Backspace" && code.innerText === "" && index > 0){
			codes[index-1].focus();
		}
	});
});