$("textarea").keyup(function(){
    valor = $(this).val();
    if(valor.length > 0){
        $(".converMessageUser").show(100);
    }else{
        $(".converMessageUser").hide(100);
    }
    $(".converMessageUser").text(valor); 
})
$(".enviar").click(function(){
    var mensaje = $("textarea").val();
    if(mensaje.length > 0){
        var phone = $("input[name=telefono]").val();
        if (!isNaN(phone)){
            window.location = "https://api.whatsapp.com/send?phone="+phone+"&text="+mensaje;
        }else{
            window.location = "https://api.whatsapp.com/send?text="+mensaje;
        }
    }  
})
