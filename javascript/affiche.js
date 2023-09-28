let afficheInfo = JSON.parse(localStorage.getItem("session"))
let acceuil = document.querySelector("#aff")
acceuil.innerText= afficheInfo.nom
acceuil.style.fontSize = "1rem";
acceuil.style.color ="rgb(250, 156, 14)";