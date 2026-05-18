function carregar(){

    var fundo = document.querySelector('section')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var periodo = document.getElementById('prd')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()


 
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

   
    if (hora >= 0 && hora < 12){

        img.src = '/aula-12ex/ex014/imagens/manha.jpg'
        periodo.innerHTML = 'Agora está de manhã'
        fundo.style.backgroundColor = 'yellow'
        
        


    } else if (hora >= 12 && hora < 18){

        img.src = '/aula-12ex/ex014/imagens/tarde.jpg'
        periodo.innerHTML = 'Agora está de tarde'
        fundo.style.backgroundColor = 'orange'


    } else{

        img.src = '/aula-12ex/ex014/imagens/noite.jpg'
        periodo.innerHTML = 'Agora está de noite'
        fundo.style.backgroundColor = 'grey'

    }


}
