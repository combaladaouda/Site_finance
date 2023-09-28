let form = document.querySelector(".form");
let btn = document.querySelector("#btn");
let message = document.querySelector("#message");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
})

btn.addEventListener('click', (e)=>{
    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const email = document.querySelector("#email").value;
    const number = document.querySelector("#number").value;
    const motdepasse = document.querySelector("#motdepasse").value;
    const confirmation = document.querySelector("#confirmation").value;

    const data = {
        
        nom: nom,
        prenom : prenom,
        email : email,
        number : number,
        motdepasse : motdepasse,
        confirmation : confirmation
     }
     console.log(data);
   
    let user = localStorage.getItem('user');
    if(user === null){
        user = [];
        user.push(data);
        localStorage.setItem('user',JSON.stringify(user));
        
        window.location.href ="./connexion.html"
        
        console.log(user);
    }else{
        user = JSON.parse(user);
        //window.location.href ="./connexion.html"
        window.location.href ="../Corporates/connexion.html"
        user.forEach((element) => {
            if(data.email !== element.email){
                console.log('test',(data.email !== element.email))
                user.push(data)
                localStorage.setItem('user', JSON.stringify(user));
                message.textContent = "Bienvenue";
                message.style.color = "green";
                window.location.href ="./connexion.html"           
            }else{
                alert("utilisateur existant verifiez vos coordonner")
                window.location.href ="../Corporates/inscription.html"  
                message.textContent = "utilisateur existant";
                message.style.color = "red";
            }
            console.log(element.nom);
        })
    }

});


/* const fond = document.querySelector("#balnace");
console.log(fond);
const tableau = localStorage.getItem("fondInitial") ? JSON.parse(localStorage.getItem("fondInitial")) : [];
tableau.push(fond);

localStorage.setItem('fondInitial',JSON.stringify(tableau));
  */