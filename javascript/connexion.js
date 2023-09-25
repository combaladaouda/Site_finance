const mail = document.getElementById('mail')
const mdp = document.getElementById('motpasse')

const btn = document.querySelector('.btn')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let data = {
        email : mail.value,
        motDePasse : mdp.value
    }
    console.log(data)
    let user = localStorage.getItem('user')
    user = JSON.parse(user);
    console.log(user)

        user.forEach((element) => {
            if(data.email === element.email && data.motDePasse === element.motdepasse){
                window.location.href ="./acceuil.html"
                user.push(data)
                localStorage.setItem('session',JSON.stringify(element))
            }else{
                alert("verifiez vos informations")
                 window.location.href ="./connexion.html"
            }})
})
