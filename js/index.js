/**
 * Deine o <title> padrão da página atual.
 **/
document.title = site.nome;

db.collection("artigos")
    .where("status", "==", "on")
    .where("data", "<=", agoraISO())
    .orderBy("data", "desc")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.error("Error getting documents: ", error);
    });