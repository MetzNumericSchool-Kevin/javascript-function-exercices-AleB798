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

function totalPrice (inventaire, id, quantity=1 ) {
    let price = 0;
    inventaire.forEach(potion => {
        if(id === potion.id) {
            price = potion.prix*quantity
        }
        else {
            console.log("Nous ne trouvons pas cette potion dans notre inventaire") //Comment mieux gérer les erreurs ?
        }
    }); 
    return price;
}

console.log(totalPrice(inventaire, "potion_soin", 3))
console.log(totalPrice(inventaire, "potion_so", 3))


// Autres solutions avec boucle for...of  & FIND //

 function totalPrice (inventaire, id, quantity=1) {
    for (let potion of inventaire) {
        if(potion.id === id) {
            return potion.prix*quantity
        }
        else {
            console.log("Nous ne trouvons pas cette potion dans notre inventaire")
        }
    }
 }

 console.log(totalPrice(inventaire, "potion_soin", 3))
 console.log(totalPrice(inventaire, "potion_courage", 5))

 function totalPrice(inventaire, id, quantity = 1) {
    const potion = inventaire.find(potion => potion.id === id);
    if (potion) {
        return potion.prix * quantity;
    } else {
        console.log("Nous ne trouvons pas cette potion dans notre inventaire")
    }
}

console.log(totalPrice(inventaire, "potion_soin", 3));
console.log(totalPrice(inventaire, "potion_foin", 5));

