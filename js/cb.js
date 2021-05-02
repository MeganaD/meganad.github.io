let codes = document.querySelectorAll('code');
let countID = 0;
codes.forEach((code) => {

	code.setAttribute("id", "code" + countID);

	let btn = document.createElement('button');
	btn.innerHTML = "<img src='/img/clippy.svg' height='15' alt='Copy to clipboard' title='Copy to clipboard'>";
	btn.className = "btn-cb";
	btn.setAttribute("data-clipboard-action", "copy");
	btn.setAttribute("data-clipboard-target", "#code" + countID);
	$(btn).tooltip({
		trigger: 'click',
		placement: 'bottom'
	});


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

$('button').tooltip({
	trigger: 'click',
	placement: 'bottom'
  });

function setTooltip(btn, message) {
	$(btn).tooltip('hide')
	.attr('data-original-title', message)
	.tooltip('show');
}

function hideTooltip(btn) {
	setTimeout(function() {
		$(btn).tooltip('hide');
	}, 1000);
}

let clipboard = new ClipboardJS('.btn-cb');

clipboard.on('success', function(e) {
	e.clearSelection();
	setTooltip(e.trigger, 'Copied!');
	hideTooltip(e.trigger);
});

clipboard.on('error', function(e) {
	setTooltip(e.trigger, 'Failed!');
	hideTooltip(e.trigger);
});