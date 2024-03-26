function handleSubmit(event) {
event.preventDefault()
const userName = document.querySelector("#user").value.trim()
const title =document.querySelector("#title").value.trim()
const content = document.querySelector("#content").value.trim()

if(!userName||!title||!content){
    const errorEl=document.querySelector("#error")
    errorEl.textContent="Plese fill out all fields"
    setTimeout(() => {
        errorEl.textContent=""
    }, 4000);
    return
}
const data={userName:userName, title:title, content:content}
handleLocalStorage(data)

location.href="blog.html"
}

function handleLocalStorage(data) {
    const blogs = JSON.parse(localStorage.getItem("blogs"))||[]
    blogs.push(data)
    localStorage.setItem("blogs", JSON.stringify(blogs))
}
document.querySelector('#submit').addEventListener('submit', handleSubmit)