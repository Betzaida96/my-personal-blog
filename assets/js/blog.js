function renderBlogs () {
    const blogs = JSON.parse(localStorage.getItem("blogs"))||[] //retrieves blogs from local storage
    const blogsEl= document.querySelector("#blogs") //assigns "blogs" to the variable blogsEl

    blogsEl.innerHTML= "" //clears the content of blogs
    
    for(let i=0; i<blogs.length; i++) { //a for loop for the blogs array
        const cardEl = document.createElement("div") //this section creates new elements for the card that will be created when the user posts on the blog
        const titleEl = document.createElement("h4")
        const contentEl = document.createElement("p")
        const userEl = document.createElement("p")
        const hrEl = document.createElement("hr")
        
 cardEl.classList.add("card") //this creates the card that is posted when a user makes a post on the blog
        titleEl.textContent = blogs[i].title //title for the card
        contentEl.textContent = blogs[i].content //content for the card
        userEl.textContent = `posted by: ${blogs[i].userName}` //tells the reader of the blog which user posted the blog post
        cardEl.append(titleEl, hrEl, contentEl, userEl) 
        blogsEl.append(cardEl)
    }
}
renderBlogs()