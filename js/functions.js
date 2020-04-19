$(function(){
    $("input[type=checkbox]").click(function(){  
        if($(this).is(':checked')) {  
            $("input[name=telefono]").hide(200); 
        }else{  
            $("input[name=telefono]").show(200); 
        }  
    }); 
    $("form").submit(function(evt){
        evt.preventDefault(); 
        var numero = $("input[name=telefono]").val(); 
        var mensaje = $("textarea").val(); 
        if($("input[type=checkbox]").is(":checked")){
            if(mensaje.length > 0){
                window.location = "https://api.whatsapp.com/send?text="+mensaje;
            }else{
                $("textarea").effect("shake");
                $("textarea").addClass("error");
          }
        }else{
            if(numero.length > 8){
                window.location = "https://api.whatsapp.com/send?phone="+phone+"&text="+mensaje;
            }else{
                  $("input[type=number]").effect("shake");
                  $("input[name=telefono]").addClass("error");
            }
        }
    });
})
