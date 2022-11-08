meusGatos = {
    gato: [
        {
            "id": 1,
            "nome": "Chico",
            "descricao": "O Chico cansou de ser Gato e virou Dinossauro.",
            "fotoURL": "images/gato-01.jpg",
            "linkExterno": "https://www.instagram.com/canseidesergato/"
        },

        {
            "id": 2,
            "nome": "Hamilton",
            "descricao": "Hamilton é o gato mais hipster que você vai ver hoje.",
            "fotoURL": "images/gato-02.jpg",
            "linkExterno": "https://www.instagram.com/hamilton_the_hipster_cat/"
        },

        {
            "id": 3,
            "nome": "Nala",
            "descricao": "Nala é uma gatinha muito simpática e extrovertida.",
            "fotoURL": "images/gato-03.jpg",
            "linkExterno": "https://www.instagram.com/nala_cat/"
        },
    ]
}

var cardGato = document.getElementById('card');
var btn = document.getElementById('btn');
console.log('ronaldo')

//Pegamos o valor do Input Field 
var inputGato = document.getElementById('myInput').value
console.log(inputGato)

//Fazemos um loop para checar se existe um gato com este nome 

function getGato() {
    for (var i = 0; meusGatos.gato.lenght > i; i++) {
        if (inputGato == meusGatos.gato[i].nome) {
            console.log('Gato encontrado')
        } else {
            console.log('Não Encontramos esse gato')
        }
    }
}

//Rodamos a Função getGato ao clicar no botao
btn.addEventListener('click', getGato)