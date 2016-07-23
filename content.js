const c = `y-${Date.now()}`

const s = document.createElement('style')
s.innerText = `.${c}__y{display:inline-block;transform:scale(-1,1)}`
document.head.appendChild(s)

run()
setInterval(run, 5000)

function run () {
    handle(document.body)
}

function handle (n) {
    if (!n || (n.classList && n.classList.contains(c))) { return }
    n.nodeType === 3 && n.textContent.match(/у/gui) ? fix(n) : (n.childNodes || []).forEach(handle)
}

function fix (n) {
    const p = document.createElement('span')
    p.classList.add(c)
    p.innerHTML = n.textContent.replace(/у/gui, `<span class="${c}__y">$&</span>`)
    n.parentNode.insertBefore(p, n)
    n.parentNode.removeChild(n)
}
