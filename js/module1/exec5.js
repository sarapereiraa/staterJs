function exibirM(usuarios){

    for(let u of usuarios){    
    return (
        'O ' + u.nome + ' possui as habilidades: ' +
        u.habilidades.join(', ')
    );
    }

}
let usuarios = [
    {
        nome: 'Sara',
        habilidades: ['Java', 'Javascrip', 'ReactJs']
    },
    {
        nome: 'Bia',
        habilidades: ['NodeJs', 'Rails']
    }
];
exibirM(usuarios);