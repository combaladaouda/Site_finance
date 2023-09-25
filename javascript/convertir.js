//Recuperr les deux champs
const eurgbpInput = document.getElementById('input-eurgbp')
const gbpeurInput = document.getElementById('input-gbpeur')


// Associerun evenement qui correspond au changement
// de la valeur du champs

eurgbpInput.addEventListener('input', () =>{
//recuperer la valeur saisie par l'utilisateur

const eur = eurgbpInput.value

//convertir la valeur en nombre

const eurNombre = parseFloat(eur)

//recuperer le taux
const taux = gbpeurInput.getAttribute('data-taux')

//convertir le taux en nombre
const tauxNombre = parseFloat(taux)

//calculer la nouvelle conversion

const nouvelleConverssion = eurNombre * tauxNombre

console.log(nouvelleConverssion)

//convertir le nouveau nombre en text avec 5 digits

const nouvelleConverssionTexte = nouvelleConverssion.toFixed(5)

console.log(nouvelleConverssionTexte)

//mettre à jour le champ

gbpeurInput.value = nouvelleConverssion

})

gbpeurInput.addEventListener('input', () =>{

    //recuperer la valeur saisie par l'utilisateur

const gbp = gbpeurInput.value

//convertir la valeur en nombre

const gbpNombre = parseFloat(gbp)

//recuperer le taux
const taux = gbpeurInput.getAttribute('data-taux')

//convertir le taux en nombre
const tauxNombre = parseFloat(taux)

//calculer la nouvelle conversion

const nouvelleConverssion = gbpNombre / tauxNombre

console.log(nouvelleConverssion)

//convertir le nouveau nombre en text avec 5 digits

const nouvelleConverssionTexte = nouvelleConverssion.toFixed(5)

console.log(nouvelleConverssionTexte)

//mettre à jour le champ

eurgbpInput.value = nouvelleConverssionTexte
    
})