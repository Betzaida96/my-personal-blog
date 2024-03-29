function handleSubmit(event) { //this function is for my submit button and what happens when you submit the form
event.preventDefault()
const userName = document.querySelector("#user").value.trim() //this returns the element user
const title =document.querySelector("#title").value.trim() //this returns the element title
const content = document.querySelector("#content").value.trim()//this returns the element content

if(!userName||!title||!content){ //this makes an error pop up and disappear within 4 seconds if there is a blank field in the form, prompting the user to fill out all fields in the form before submitting
    const errorEl=document.querySelector("#error")
    errorEl.textContent="Plese fill out all fields"
    setTimeout(() => {
        errorEl.textContent=""
    }, 4000);
    return
}
const data={userName:userName, title:title, content:content} //this handles the local storage of username, title, and content
handleLocalStorage(data)

location.href="blog.html"

function handleLocalStorage(data) { //this retrieves the current blogs from the local storage, if there are none it initializes an empty array
    const blogs = JSON.parse(localStorage.getItem("blogs"))||[]
    blogs.push(data)
    localStorage.setItem("blogs", JSON.stringify(blogs))
}
document.querySelector('#submit').addEventListener('submit', handleSubmit)
}