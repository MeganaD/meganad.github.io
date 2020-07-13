let codes = document.querySelectorAll('code');
let countID = 0;
codes.forEach((code) => {

    code.setAttribute("id", "code" + countID);

    let btn = document.createElement('button');
    btn.innerHTML = "Copy";
    btn.className = "btn-cb";
    btn.setAttribute("data-clipboard-action", "copy");
    btn.setAttribute("data-clipboard-target", "#code" + countID);

    let div = document.createElement('div');
    div.className = "cb-div";
    div.appendChild(btn);

    if(code.parentElement.className == "highlight")
        code.after(div);
    else
        code.before(div);

    countID++;
});

let clipboard = new ClipboardJS('.btn-cb');
// clipboard.on('success', function(e) {
//     e.clearSelection();
// });