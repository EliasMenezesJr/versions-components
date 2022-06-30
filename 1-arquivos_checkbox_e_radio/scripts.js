var components = [
  ".container_boxe_abertura",
  ".container_fica_a_dica"
]

$(components.join('')).each(function () {
  console.log("oi1 ");
  console.log($(this));
  $(this).on('click', function () {

    console.log("oi2 ");
    var randomId = Math.floor(Math.random() * 100000) + 1;

    if ($(this).find('input').attr('id').length == "0") {
      console.log('ID alterado');
      $(this).find('input').attr('id', randomId);
    } else {
      console.log('Ja contem ID');
    }

    if ($(this).find('label').attr('for').length == "0") {
      console.log('FOR alterado');
      $(this).find('label').attr('for', randomId);
    } else {
      console.log('Ja contem FOR');
    }
  });
});

<id>001155_lin_fo_c3_90047</id><tipo>audicao_e_oralidade</tipo><assunto></assunto><bncs></bncs><enem></enem>
