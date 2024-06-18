const View = {
    root: getElemById("root")
}


function createStarRating(numStars) {
    const fragment = createEl("div")
    fragment.className = `stars`

    for (let i = 0; i < numStars; i++) {
        let star = createEl("div")
        star.className = `star`
        star.addEventListener("click", rateHandler, false)

        fragment.appendChild(star)
    }
    return fragment
}

View.root.appendChild(createStarRating(5));




function rateHandler(e) {
    const stars = e.target.parentNode.childNodes
    const element = e.target
    const starIdx = [...stars].findIndex(el => el === element)

    // If the clicked star is already selected, remove the 'selected' class from it and all subsequent stars
    if (element.classList.contains("selected")) {
        for (let i = starIdx; i < stars.length; i++) {
            stars[i].classList.remove("selected")
        }
    } else {
        const previousStar = [...stars].filter((el, idx) => idx <= starIdx)
        const star = [...stars].filter(el => el.classList.contains("selected"))

        previousStar.forEach(el => el.classList.add("selected"))
        if(starIdx < star.length) {
            for(let i = star.length-1; starIdx < i; i--) {
                star[i].classList.remove("selected")
            }
        }
    }
}