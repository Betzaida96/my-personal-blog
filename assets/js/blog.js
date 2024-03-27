function renderBlogs () {
    const blogs = JSON.parse(localStorage.getItem("blogs"))||[]
    const blogsEl= document.querySelector("#blogs")

    blogsEl.innerHTML= ""
    
    for(let i=0; i<blogs.length; i++) {
        const cardEl = document.createElement("div")
        const titleEl = document.createElement("h4")
        const contentEl = document.createElement("p")
        const userEl = document.createElement("p")
        const hrEl = document.createElement("hr")
        
 cardEl.classList.add("card")
        titleEl.textContent = blogs[i].title
        contentEl.textContent = blogs[i].content
        userEl.textContent = `posted by: ${blogs[i].userName}`
        cardEl.append(titleEl, hrEl, contentEl, userEl)
        blogsEl.append(cardEl)
    }
}
renderBlogs()