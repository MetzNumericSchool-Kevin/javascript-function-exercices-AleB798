const nom_sorcier = "Archibald 🧙‍♂️";
const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};
const inventaire = [
  {
    id: "potion_soin", // identifiant unique de la potion
    prix: 10,
    stock: 0,
  }
];

// ===== Salutation Aventurier ===== 

// function salutation (nameSorcer) {
//     console.log(`Salutations Aventurier ! Je me nomme ${nameSorcer} pour vous servir..`)
// }

// salutation("Archibald")


// ===== Quel est le tarif d'une potion ? =====

// function totalPrice (inventaire, id, quantity=1 ) {
//     let price = 0;
//     inventaire.forEach(potion => {
//         if(id === potion.id) {
//             price = potion.prix*quantity
//         }
//         else {
//             console.log("Nous ne trouvons pas cette potion dans notre inventaire") //Comment mieux gérer les erreurs ?
//         }
//     }); 
//     return price;
// }

// console.log(totalPrice(inventaire, "potion_soin", 3))
// console.log(totalPrice(inventaire, "potion_so", 3))


// // Autres solutions avec boucle for...of  & FIND //

//  function totalPrice (inventaire, id, quantity=1) {
//     for (let potion of inventaire) {
//         if(potion.id === id) {
//             return potion.prix*quantity
//         }
//         else {
//             console.log("Nous ne trouvons pas cette potion dans notre inventaire")
//         }
//     }
//  }

//  console.log(totalPrice(inventaire, "potion_soin", 3))
//  console.log(totalPrice(inventaire, "potion_courage", 5))

//  function totalPrice(inventaire, id, quantity = 1) {
//     const potion = inventaire.find(potion => potion.id === id);
//     if (potion) {
//         return potion.prix * quantity;
//     } else {
//         console.log("Nous ne trouvons pas cette potion dans notre inventaire")
//     }
// }

// console.log(totalPrice(inventaire, "potion_soin", 3));
// console.log(totalPrice(inventaire, "potion_foin", 5));


// ===== Fabrication de potion =====

function createPotion (id, prix=10, stock=1) {

    if (typeof id !== "string" || id.trim() === "") {
        throw new Error("Erreur : l'id de la potion est obligatoire et doit être une chaîne non vide !");
    } // vérifie que l'on entre un id de type string et que la chaine de caractère n'est pas vide sinon arrête l'éxé et affiche message d'erreur
    return {
        id: id,
        prix: prix,
        stock: stock
    }
}

// console.log(createPotion("potion_invisibilite", 15, 1));
// console.log(createPotion("potion_bouleFeu", 150));

// ===== Ajout de nouvelles potions dans l'inventaire =====

function addPotion (inventaire, createPotionFn, id, prix, stock) {

    // on Crée la nouvelle potion
    const newPotion = createPotionFn(id, prix, stock)

    //on vérifie si la potion existe déjà en parcourant la tableau avec la fonction native FIND
    let existingPotion = inventaire.find(elt => elt.id === newPotion.id);

    //si elle existe on ajuste le prix et le stock avec les nouvelles valeurs
    if (existingPotion) {
        existingPotion.prix = newPotion.prix;
        existingPotion.stock += newPotion.stock

      } else { // sinon on ajoute la nouvelle potion dans l'inventaire
        inventaire.push(newPotion)
      }
    
    //on utilise la fonction native SORT pour pouvoir trier le tableau : du + cher au - cher.
    inventaire.sort(function (a, b) {
      return b.prix - a.prix;
    });
}; 

addPotion(inventaire, createPotion, "potion_arrettemps", 250, 3);
addPotion(inventaire, createPotion, "potion_grandir")
addPotion(inventaire, createPotion, "potion_soin", 20, 16)
addPotion(inventaire, createPotion, "potion_soin", 40, 16)
addPotion(inventaire, createPotion, "potion_immortalite", 3000, 1)

console.log(inventaire)
