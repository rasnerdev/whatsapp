# Envío de mensajes de WhatsApp desde HTML con JavaScript
Una pequeña interfaz desde la que podrás enviar mensajes de Whatsapp a tus amig@s!

![Muestra de la página](https://github.com/rasnerdev/whatsapp/blob/master/img/example.png)

## Funcionamiento
Basta con cambiar el nombre del destinatario por el número de teléfono al que quieras escribir, escribir un mensaje y pulsar el botón de enviar. 
Automáticamente, se redirigirá a la Web de WhatsApp, desde la que te permitirá abrir WhatsappWeb o la aplicación de WhatsApp para enviar el mensaje. 

### Internamente...
Básicamente, lo que hace el programa es, capturar con JavaScript el número de teléfono y el mensaje escrito, y mediante las URLs que proporciona Whatsapp, redirigirlos a la misma. 

**Ejemplo con solo texto**

`https://api.whatsapp.com/send?text=Mensaje%20de%20prueba`

**Ejemplo con número de teléfono y texto**

`https://api.whatsapp.com/send?phone=+34123456789&text=Mensaje%20de%20prueba`

## Demo en funcionamiento
Aquí te dejo la [Demo](https://rasnerdev.github.io/whatsapp/) para enviar mensajes de Whatsapp.

Encuentra más proyectos desarrollados por mi en [Rasnerdev](https://github.com/rasnerdev) 😊
