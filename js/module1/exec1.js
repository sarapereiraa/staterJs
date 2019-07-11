function exibirM(){
    return (
        'O ' + end.nome + ' mora em ' + end.cidade + '/' + end.uf +
        ' no Bairro ' + end.bairro + ', na ' + end.rua + ' no numero ' + end.numero + '.' 
    );


}
let end = {
    nome:'Zé',
    uf:'SP',
    cidade:'São Paulo',
    bairro:'Chacará Flora',
    rua:'Santo Amaro',
    numero: 324
}
console.log(exibirM(end))