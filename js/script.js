$('body').on('click keypress', function(){

    if($('.input').val() != ""){
        if($('.label').hasClass('.deixar_ativo') == false){
            $('.label').addClass('deixar_ativo')
        }
    } else {
        $('.label').removeClass('deixar_ativo')
    }
})

$('body').on('mouseleave', '.input', function(){
    //Se tiver algo digitado ou o input focado ao tirar o mouse, deixa ativo
    if($('.input').val() != "" || $('.input').is(':focus') == true){
        if($('.label').hasClass('.deixar_ativo') == false){
            $('.label').addClass('deixar_ativo')
        }
    } else {

            $('.label').removeClass('deixar_ativo')
        
    }
})