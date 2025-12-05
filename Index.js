let nome = "Arthas";
let nivel = 8500;

let classHeroi = " ";


    if (nivel <= 1000) {
        classHeroi = "Ferro";
    }

    else if ((nivel >= 1001) && (nivel <= 2000)) {
        classHeroi = "Bronze";
    }      

    else if ((nivel >= 2001) && (nivel <= 5000)) {
        classHeroi = "Prata";
    }
    
    else if ((nivel >= 5001) && (nivel <= 7000)) {
        classHeroi = "Ouro";
    }
  
    else if ((nivel >= 7001) && (nivel <= 8000)) {
        classHeroi = "Platina"; 
    }
  
    else if ((nivel >= 8001) && (nivel <= 9000)) {
        classHeroi = "Ascendente";
    }
   
    else if ((nivel >= 9001) && (nivel <= 10000)) {
        classHeroi = "Imortal";
    }
    
    else { 
        classHeroi = "Radiante";
    }

console.log(`O Herói de nome ${nome} está no nível ${nivel} — Classificação: ${classHeroi}`); 
