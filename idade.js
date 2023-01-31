function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var resultado = document.querySelector('div#resultado')
  
  if(fano.value.length == 0 | Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
      genero = 'Homem'
      if(idade > 0 && idade <=12){
        //criança
        img.setAttribute('src', 'crianca-m.png')
      } else if (idade > 13 && idade <= 24){
        //jovem
        img.setAttribute('src', 'jovem-m.png')
      } else if (idade > 25 && idade <60){
        //adulto
        img.setAttribute('src', 'adulto.png')
      } else if (idade >= 60){
        img.setAttribute('src', 'idoso.png')
        //Idoso
      }
    }
    else if (fsex[1].checked){
      genero = 'Mulher'
      if(idade > 0 && idade <=12){
        //criança
        img.setAttribute('src', 'crianca-f.png')
      } else if (idade > 13 && idade <= 24){
        //jovem
        img.setAttribute('src', 'jovem-f.png')
      } else if (idade > 25 && idade <60){
        //adulto
        img.setAttribute('src', 'adulta.png')
      } else if (idade >= 60){
        //Idoso
        img.setAttribute('src', 'idosa.png')
      }
    }
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    resultado.appendChild(img)
  } 
 
}