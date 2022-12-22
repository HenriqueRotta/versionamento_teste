const nome = [
    'Henrique',
    'Fulano',
    'Fulana'
]

function lista_nome(name, index){
    return `${index} - ${name}`
}

const lista = nome.map(lista_nome)

console.log(lista)