let afficheInfo = JSON.parse(localStorage.getItem("session"))
let acceuil = document.querySelector("#aff")
acceuil.innerText= afficheInfo.prenom
acceuil.style.fontSize = "1rem";
acceuil.style.color ="rgb(250, 156, 14)";