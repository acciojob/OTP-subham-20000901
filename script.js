//your JS code here. If required.

let codes = document.querySelectorAll(".code");

codes.forEach((code,index) => {
	
	code.addEventListener("input",function(e){
		
		if(e.target.value.length === 1 && index < codes.length-1){
			codes[index+1].focus();
		}
		
	});

	code.addEventListener("keydown",function(e){
		if(e.key === "Backspace" && code.value === "" && index > 0){
			codes[index-1].focus();
		}
	});
});