const form = document.querySelector(".form-quizz");
const nombreQuestions = document.querySelectorAll(".form-quizz .question-block").length;
let tableauResultats = [];
const reponses = ['a', 'b', 'd', 'd', 'b', 'c', 'b', 'b', 'c', 'b'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector(".resultats h2");
const texteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".question-block");
let verifTableau = [];


form.addEventListener("submit", (e) => {
    e.preventDefault();

    for(i = 1; i <= nombreQuestions; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats) {

    for(let a = 0; a < nombreQuestions; a++) {

        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }

    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabCheck) {

    const nombreFautes = tabCheck.filter(el => el !== true).length;
    console.log(nombreFautes)
    
    switch(nombreFautes) {

        case 0:
            titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans faute ! ${emojis[0]}`
            aideResultat.innerText = '';
            texteResultat.innerHTML = " 10 / 10";
            break;

        case 1:
            titreResultat.innerText = `${emojis[1]} Presque ! ${emojis[1]}`
            aideResultat.innerText = '';
            texteResultat.innerHTML = " 9 / 10";
            break;
        case 2:
            titreResultat.innerText = `${emojis[1]} Presque ! ${emojis[1]}`
            aideResultat.innerText = '';
            texteResultat.innerHTML = " 9 / 10";
            break;
        case 3:
            titreResultat.innerText = `${emojis[1]} 80%, c'est un bon début ! ${emojis[1]}`
            aideResultat.innerText = '';
            texteResultat.innerHTML = " 8 / 10";
            break;
        case 4:
            titreResultat.innerText = `${emojis[1]} C'est pas si mal ! ${emojis[1]}`
            aideResultat.innerText = 'Fait attention aux petits pièges !';
            texteResultat.innerHTML = " 7 / 10";
            break;
        case 5:
            titreResultat.innerText = `${emojis[2]} Juste, juste... ${emojis[2]}`
            aideResultat.innerText = 'Fait attention aux petits pièges !';
            texteResultat.innerHTML = " 6 / 10";
            break;
        case 6:
            titreResultat.innerText = `${emojis[3]} Presque la moitié. ${emojis[3]}`
            aideResultat.innerText = "Attention aux fautes d'innatention !";
            texteResultat.innerHTML = " 4 / 10";
            break;
        case 7:
            titreResultat.innerText = `${emojis[3]} Courage ? ${emojis[3]}`
            aideResultat.innerText = "Attention aux fautes d'innatention ! Ca peut faire remonter la note !";
            texteResultat.innerHTML = " 3 / 10";
            break;
        case 8:
            titreResultat.innerText = `${emojis[4]} Il va falloir ressortir les cartouches Pokémon ! ${emojis[4]}`
            aideResultat.innerText = 'As-tu déjà lancé un jeu Pokémon ?';
            texteResultat.innerHTML = " 2 / 10";
            break;
        case 9:
            titreResultat.innerText = `${emojis[4]} Si la perfection avait un nom, ce ne serait pas le tient... ${emojis[4]}`
            aideResultat.innerText = 'As-tu déjà lancé un jeu Pokémon ?';
            texteResultat.innerHTML = " 1 / 10";
            break;
        case 10:
            titreResultat.innerText = `${emojis[5]} 0 pointé, c'est mal barré ! ${emojis[5]}`
            aideResultat.innerText = 'As-tu déjà lancé un jeu Pokémon ?';
            texteResultat.innerHTML = " 0 / 10";
            break;

        default:
            "Oups, cas innatendu...";
    }

}

function couleursFonction(tabValBool) {

    for(let j = 0; j < tabValBool.length; j++){

        if(tabValBool[j] === true) {
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add("echec");

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove("echec");
            }, 500)
        }

    }

}

toutesLesQuestions.forEach(item => {
    item.addEventListener("click", () => {
        item.style.background = "white";
    })
})