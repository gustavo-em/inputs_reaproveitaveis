$('body').on('click keypress', function(){

    $('.input').each(function(){

        if($(this).val() != ""){
            console.log($(this))
            if($(this).parent('.div_input').find('label').hasClass('.deixar_ativo') == false){
                $(this).parent('.div_input').find('label').addClass('deixar_ativo')
            }
        } else {
            $(this).parent('.div_input').find('label').removeClass('deixar_ativo')
        }
    })
})

$('body').on('mouseleave', '.input', function(){
    //Se tiver algo digitado ou o input focado ao tirar o mouse, deixa ativo

    $('.input').each(function(){
        if($(this).val() != "" || $(this).is(':focus') == true){
            console.log($(this))
            if($(this).parent('.div_input').find('label').hasClass('.deixar_ativo') == false){
                $(this).parent('.div_input').find('label').addClass('deixar_ativo')
            }
        } else {
                $(this).parent('.div_input').find('label').removeClass('deixar_ativo')
        }
    })
})