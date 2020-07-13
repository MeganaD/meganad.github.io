let codes = document.querySelectorAll('.highlight > pre > code');
let countID = 0;
codes.forEach((code) => {
	code.setAttribute("id", "code" + countID);
	let clipButton = '<button class="btn btn-sm cb_b" data-clipboard-target="#code' + countID 
		+ '"><img src="/img/clippy.svg" width="13" alt="Copy to clipboard"></button>';
	$(code).after(clipButton);
	countID++; 
}); 

let clipboard = new ClipboardJS('.btn');
