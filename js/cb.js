let codes = document.querySelectorAll('code');
let countID = 0;
codes.forEach((code) => {

	code.setAttribute("id", "code" + countID);

	let btn = document.createElement('button');
	btn.innerHTML = "<img src='/img/clippy.svg' height='15' alt='Copy to clipboard'>";
	btn.className = "btn-cb";
	btn.setAttribute("data-clipboard-action", "copy");
	btn.setAttribute("data-clipboard-target", "#code" + countID);


	if(code.parentElement.className == "highlight") {
		let div = document.createElement('div');
		div.className = "cb-div";
		div.appendChild(btn);
		code.before(div);
	}
	else
		code.after(btn);

	countID++;
});

let clipboard = new ClipboardJS('.btn-cb');
// clipboard.on('success', function(e) {
//     e.clearSelection();
// });