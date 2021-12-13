// const emailUser = prompt("Inserisci la tua mail");
 
// const dbEmail = ["test1@gmail.com", "test2@gmail.com", "test3@gmail.com", "test4@gmail.com", "test5@gmail.com", "test6@gmail.com" ]


//  let logged = false;

//  for(let i = 0 ; i < dbEmail.length ; i++) {
//     if( emailUser === dbEmail[i]){
//         logged  = true;
//     }
//  }

//  if (logged) {
//     alert("Sei entrato con successo");
//     console.log("Sei entrato con successo");
//  } else {
//     alert("Non hai inserito l'email giusta");
//      console.log("Non hai inserito l'email giusta");
//  }

const play = document.getElementById("play");

const textPc = document.getElementById("points-pc");

const textUser = document.getElementById("points-user");

const result = document.getElementById("result");

play.addEventListener('click', function (){
    
    const userPoints = Math.floor(Math.random() * 6) + 1
    
    const pcPoints = Math.floor(Math.random() * 6) + 1
    
    if ( pcPoints > userPoints ) {
        result.innerHTML = "Hai perso!"
    } else {
        result.innerHTML = "Hai vinto!"
    }
    
    textPc.innerHTML =  `Punteggio del pc: ${pcPoints}`
    textUser.innerHTML = `Punteggio dell'utente: ${userPoints}` 
});