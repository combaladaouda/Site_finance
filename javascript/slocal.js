//alert()
const affiche = document.querySelector("#locale")
const button = document.querySelector(".bt");

console.log(button);

if(button){
    button.addEventListener("click",(e) =>{
    
        const inputg_bpeur = document.querySelector("#input-gbpeur").value;
        console.log(inputg_bpeur);
        const tab = localStorage.getItem("soldLocale") ? JSON.parse(localStorage.getItem("soldLocale")) : [];
        tab.push(inputg_bpeur);
    
        localStorage.setItem('soldLocale',JSON.stringify(tab));
    
        //window.location.href ='./corporates/transfert.html'

        //window. location.href = "../corporates/transfert.html"

        window. location.href = "../transfert.html"
        
    })
}

function somme (){
    const locale = localStorage.getItem('soldLocale')
    const valeur = document.querySelector("#locale");
    let vue = 0;
    if(locale && valeur){
        JSON.parse(locale).forEach(element => {
            vue +=Number(element)
        });
        console.log(vue);
        
        console.log(valeur);
        valeur.textContent =vue;
    }
    
}

somme()



