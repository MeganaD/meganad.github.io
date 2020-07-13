let codes = document.querySelectorAll('code');
let countID = 0;
codes.forEach((code) => {

  code.setAttribute("id", "code" + countID);
  
  let btn = document.createElement('button');
  btn.innerHTML = "📋";
  btn.className = "btn-cb";
  btn.setAttribute("data-clipboard-action", "copy");
  btn.setAttribute("data-clipboard-target", "#code" + countID);
  
  let div = document.createElement('div');
  div.classNam = "cb-div";
  div.appendChild(btn);
  
  code.before(div);

  countID++;
}); 

let clipboard = new ClipboardJS('.btn-cb');