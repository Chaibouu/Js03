var book = {
    Titre : "L'Enfant Noir",
    Auteur : "Camara Laye",
    année : "1953" 
};
function displayBookInfo(book){
    console.log("Titre : " + book.Titre +
                "\nAuteur : " +book.Auteur +
                "\nannée : " +book.année);
}
displayBookInfo(book);