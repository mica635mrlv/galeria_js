'use stript'

const imagens = [
    {
        nome: 'Caledário 2025',
        url: './img/1.jpg'
    },
    {
        nome: 'Snoopy em Londres',
        url: './img/2.jpg'
    },
    {
        nome: 'Calendário Março',
        url: './img/3.jpg'
    },
    {
        nome: 'Calendário April',
        url: './img/4.jpg'
    },
    {
        nome: 'Frase para o mês de Maio',
        url: './img/5.jpg'
    },
    {
        nome: 'Snoopy em "A Noite Estrelada',
        url: './img/6.jpg'
    },
    {
        nome: 'Snoopy no Dia dos Namorados',
        url: './img/7.jpg'
    },
    {
        nome: 'Snoopy em Dia de Estudante',
        url: './img/8.jpg'
    }
]

function criarImagem(srcImagem) {
    const galeria = document.getElementById('galeria')
    const imagem = document.createElement('img')
    const legenda = document.createElement('div')
    const texto = document.createElement('label')

    imagem.src = srcImagem.url
    texto.textContent = srcImagem.nome

    galeria.appendChild(imagem)
    galeria.appendChild(legenda)
    legenda.appendChild(texto)

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