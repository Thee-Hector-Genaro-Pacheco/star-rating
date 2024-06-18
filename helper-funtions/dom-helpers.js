const selectByTag = tag => document.getElementsByTagName(tag)
const getElemById = id => document.getElementById(id)
const createEl = el => document.createElement(el)
const createTxtNode = text => document.createTextNode(text)


function Header1(text) {
    const h1 = createEl("h1")
    h1.innerText = text
    return h1
}


function Input(type, val) {
    const input = createEl("input")
    input.type = type
    input.value
    return input
}


function Img(src, desc) {
    const img = createEl("img")
    img.src = src
    img.alt = desc
    return input
}

function Para(desc) {
    const p = createE("p")
    p.innerText = desc
    return p
}


function Anchor(hrefProp) {
    const a = createEl("a")
    a.href = hrefProp
    return a
}

function Input1(type, val, id, listener) {
    const input = createEl("input")
    input.type = type
    input.value = val
    input.id = id
    input.addEventListener("click", listener, false)
}

function appendsElems(parNode, ...els) {
    const pn = parNode
    const elements = [...els]

    elements.forEach(el => pn.appendChild(el))

    return pn
}

function addClassToEl(el, cl) {
    el.classList.add(cl)
}

function addClass2El(el, cl) {
    el.setAttribute("class", cl)
}









