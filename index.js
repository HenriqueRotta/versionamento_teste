const nome = [
    'Henrique',
    'Fulano',
    'Fulana',
    'Ciclano',
    'Commit branch A',
    'Pequena alteração Branch senha',
    'Testando resivão publish',
]

function lista_nome(name, index){
    return `${index} - ${name}`
}

const lista = nome.map(lista_nome)

console.log(lista)

//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
