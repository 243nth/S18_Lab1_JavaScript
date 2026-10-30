function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p1
 let demo = document.getElementById("demo");

 let qty =document.getElementById("qty").value;
 let titre = document.getElementById("titre").value;
let texte=document.getElementById("contenu").value;

 let h2 = document.createElement("h2");
 for(let i =0 ;i<qty;i++ )
  {
   texte= demo.innerHTML+=  `<h2>${titre + (i + 1)}</h2>
      <p>${texte + (i + 1)}</p>`

}


}
 
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
let demo = document.getElementById("demo");
let paragraghes = demo.getElementsByTagName("p")

let couleur = document.getElementById("couleur").value;
let inputBtnClass = document.getElementById("btnClass").value
for(let i = 0; i < paragraghes.length; i++){
      paragraghes[i].style.color = couleur
  }

}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
}