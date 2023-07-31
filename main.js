const btns = window.document.querySelectorAll("button");
btns.forEach((i) => {
    i.addEventListener("click", (e) => {
        var btnA = btns[Number(e.target.classList[0]) - 1];
        if(btnA.classList[btnA.classList.length - 1] != "loading"){
            addAndRemove(btnA);
        }
    });
});

const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

async function addAndRemove(q) {
    var txtAnt = q.children[q.children.length - 1].innerText;
    q.classList.add("loading");
    q.children[0].classList.toggle('none');
    q.children[1].classList.toggle('none');
    if(q.classList[0] == "1"){
        q.children[q.children.length - 1].innerText = "Gerando...";
    }
    await sleep(2000);
    q.children[0].classList.toggle('none');
    q.children[1].classList.toggle('none');
    q.classList.remove('loading');
    q.children[q.children.length - 1].innerText = txtAnt;
}