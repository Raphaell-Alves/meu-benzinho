const prevBtn = document.querySelector ('.prev');
const nextBtn = document.querySelector ('.next');
const image = document.querySelector('.image');
const feedback = document.querySelector ('.feedback');

const users = [
    {
        name: 'NATHALIA APARECIDA',
        role: 'BRAVA',
        feedback: '“ Fase Faminta " Está seria a pior fase dessa espécie de Nathalia,Meu Benzinho por si só já é uma pessoinha Raivosa e Brava,e aqui vemos a minha fera de 1,40 m zangada por motivos de estômago vazio.',
        image: 'images/image-brava.png'
    },
    {
        name: 'NATHALIA APARECIDA',
        role: 'FELIZ',
        feedback: '“ Fase Feliz " Está sem sombra de duvidas é a melhor versão da minha fera de unhas e dentes, nota-se que a felicidade em seu olhar a cada mordinha em sua presa realça um sabor de vitória. TE AMO.',
        image: 'images/image-feliz.png'
    }
]

let slide = 0;

const navigation = () => {
    if(slide>users.length-1) {
        slide = 0;
    }
    image.innerHTML=`
    <img src="${users[slide].image}" alt="">`;

    feedback.innerHTML =`
    <img src="/images/pattern-quotes.svg" alt="">
    <p>${users[slide].feedback}</p>
    <h4 class="name">${users[slide].name}<span class="role">${users[slide].role}</span></h4>`;
    slide++;
}

navigation();

prevBtn.addEventListener('click',navigation)
nextBtn.addEventListener('click',navigation)