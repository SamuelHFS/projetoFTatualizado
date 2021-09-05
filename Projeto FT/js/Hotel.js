hotel = {};

hotel.nome = 'Hotel 5 estrelas';
resultado = document.getElementById('NomedoHotel');
resultado.textContent = hotel.nome;

hotel.quartos = 30;
resultado = document.getElementById('QuartosHotel');
resultado.textContent = hotel.quartos;

hotel.reservados = 20;
resultado = document.getElementById('reservarQuarto');
resultado.textContent = hotel.reservados;

function calcularReserva() {
    resultado = hotel.reservados ++;
    resultado2 = hotel.quartos --;
    if(resultado<50){
        document.getElementById('reservarQuarto').textContent = resultado;
        document.getElementById('QuartosHotel').textContent = resultado2;
    }else{

        document.getElementById('QuartosHotel').textContent = 'Não há vagas';
        document.getElementById('reservarQuarto').textContent = 'Ocupado';
    }
}

resultado = calcularReserva(hotel.reservados);


var countDownDate = new Date("Jun 11, 2021 17:46:25").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("data").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("data").innerHTML = "EXPIRED";
  }
}, 1000);