const toggleButton = document.getElementsByClassName("toggle-button")[0]
const listContainer = document.getElementsByClassName("list-container")[0]

toggleButton.addEventListener("click", () =>{
    listContainer.classList.toggle("active")
})

const login = document.getElementById('login')

login.innerHTML = 'Login'
const user_is_logedin = false

if(user_is_logedin) {
    login.innerHTML = 'Konto'
}

alert('Du bist nicht angemeldet')