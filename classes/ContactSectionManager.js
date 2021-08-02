class contactSectionManager{

    constructor(language) {

        this.language = language;
        this.confirmationMessages = this.setLabels().sentConfirmation;
        this.sendButtonLabels = this.setLabels().sendButton;
        this.setContactSection();
    }

    setContactSection(){
        document.getElementById('Contact-me-tittle').innerText = this.setContactSectionTitle();

        document.getElementById('Name-field_form').innerText = this.setLabels().nameField;
        document.getElementById('Message-field_form').innerText = this.setLabels().messageField;
        document.getElementById('Submit-button').value = this.setLabels().sendButton.send;
    }

    setContactSectionTitle(){
        switch (this.language){


            case 'english':
                return 'Contact me!'
            case 'spanish':
                return 'Contáctame!'

            default:
                return 'Contact me!'
        }
    }

    setLabels(){

        switch (this.language){

            case 'english':
                return {
                    nameField : 'Name',
                    messageField : 'Message',
                    sendButton : {
                        send : 'Send',
                        sending : 'Sending'
                    },
                    sentConfirmation: {
                        sendConfirmationLabel : 'Message sent successfully',
                        sendConfirmationMessage : 'Thanks for contacting me. I will reply soon'
                    }
                }
                case 'spanish':
                return {
                    nameField : 'Nombre',
                    messageField : 'Mensaje',
                    sendButton : {
                        send : 'Enviar',
                        sending : 'Enviado'
                    },
                    sentConfirmation: {
                        sendConfirmationLabel : 'Tu mensaje se ha enviado correctamente',
                        sendConfirmationMessage : 'Gracias por contactarme. Te responderé prontamente.'
                    }
                }
        }
    }

    setMessageResponse(response){
        switch (this.language){

            case 'english':
                if(response === 'successful'){
                    return`
                    
                    <div id="Message-sending-response-titles-container message-successful">
                        <h1>Message sent successfully!</h1>
                        <h2>Thank you very much!</h2>
                    </div>
               `
                }else {
                    return `
                    <div id="Message-sending-response-titles-container message-fail">
                        <h1>Message couldn't be send</h1>
                        <h2>So sorry!</h2>
                    </div>
               `
                }
                case 'spanish':
                if(response === 'successful'){
                    return`
                    
                    <div id="Message-sending-response-titles-container message-successful">
                        <h1>Mensaje enviado satisfactoriamente!</h1>
                        <h2>Muchísimas Gracias!</h2>
                    </div>
               `
                }else {
                    return `
                    <div id="Message-sending-response-titles-container message-fail">
                        <h1>El mensaje no se pudo enviar</h1>
                        <h2>Lo siento muchísimo!</h2>
                    </div>
               `
                }

            
        }
}
}


export default contactSectionManager