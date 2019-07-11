function experience(anos){
    if(anosEstudo >= 0 && anosEstudo <= 1){
        return 'Iniciante'
    }
    else if (anosEstudo >=1 && anosEstudo <=3){
        return 'Intermediário'
    }
    else if (anosEstudo >= 3 && anosEstudo <=6){
        return'Avançado'
    }
    else{
    return 'Jedi Master'
    }

    //if(anos <=1){
    //    return 'Iniciante';
    //} else if (anos <= 3){
    //    return 'Intermediário'
    //} else if(anos <= 6){
    //    return 'Avançado'
    //} else{
    //    return 'Jedi Master'
    //}

}

let anosEstudo = 7;
console.log(experience(anosEstudo));