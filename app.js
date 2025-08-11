'use stript'

const imagens = [
    {
        nome: 'Calendar',
        url: './img/1.jpg'
    },
    {
        nome: 'Street',
        url: './img/2.jpg'
    },
    {
        nome: 'March',
        url: './img/3.jpg'
    },
    {
        nome: 'April',
        url: './img/4.jpg'
    },
    {
        nome: 'May',
        url: './img/5.jpg'
    },
    {
        nome: 'van Gogh',
        url: './img/6.jpg'
    },
    {
        nome: 'Heart',
        url: './img/7.jpg'
    },
    {
        nome: 'Study',
        url: './img/8.jpg'
    }

    // "./img/1.jpg",
    // "./img/2.jpg",
    // "./img/3.jpg",
    // "./img/4.jpg",
    // "./img/5.jpg",
    // "./img/6.jpg",
    // "./img/7.jpg",
    // "./img/8.jpg"
]

function criarImagem(srcImagem) {
    const galeria = document.getElementById('galeria')
    const imagem = document.createElement('img')
    imagem.src = srcImagem.url
    galeria.appendChild(imagem)
}


function carregarImagens() {
    // const galeria = document.getElementById('galeria')

    // let contador = 0
    // const limite = imagens.length -1
    // while (contador <= 7) {
    //     const imagem = document.createElement('img')
    //     imagem.src = imagens[contador]
    //     galeria.appendChild(imagem)
    //     contador++
    // }

    imagens.forEach(criarImagem)
}

carregarImagens()