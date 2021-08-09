class contactSectionManager {

    constructor(language) {

        this.language = language;
        this.confirmationMessages = this.setLabels().sentConfirmation;
        this.sendButtonLabels = this.setLabels().sendButton;
        this.setContactSection();
    }

    setContactSection() {
        document.getElementById('Contact-me-tittle').innerText = this.setContactSectionTitle();

        document.getElementById('Name-field_form').innerText = this.setLabels().nameField;
        document.getElementById('Message-field_form').innerText = this.setLabels().messageField;
        document.getElementById('Submit-button').value = this.setLabels().sendButton.send;
        document.getElementById('Download-cv-title').innerText = this.setLabels().downloadCV;
    }

    setContactSectionTitle() {
        switch (this.language) {


            case 'english':
                return 'Contact me!'
            case 'spanish':
                return 'Contáctame!'

            default:
                return 'Contact me!'
        }
    }

    setLabels() {

        switch (this.language) {

            case 'english':
                return {
                    nameField: 'Name',
                    messageField: 'Message',
                    sendButton: {
                        send: 'Send',
                        sending: 'Sending'
                    },
                    sentConfirmation: {
                        sendConfirmationLabel: 'Message sent successfully',
                        sendConfirmationMessage: 'Thanks for contacting me. I will reply soon'
                    },
                    downloadCV: 'Download CV',
                }
            case 'spanish':
                return {
                    nameField: 'Nombre',
                    messageField: 'Mensaje',
                    sendButton: {
                        send: 'Enviar',
                        sending: 'Enviado'
                    },
                    sentConfirmation: {
                        sendConfirmationLabel: 'Tu mensaje se ha enviado correctamente',
                        sendConfirmationMessage: 'Gracias por contactarme. Te responderé prontamente.'
                    },
                    downloadCV: 'Descargar hoja de vida',
                }
        }
    }

    setMessageResponse(status) {
        switch (this.language) {

            case 'english':

                switch (status) {
                    case 'successful':
                        return `
                    
                    <div id="Message-sending-response-titles-container" class="message-successful">
                        <h1>Message sent successfully!</h1>
                        <h2>Thank you very much!</h2>
                    </div>
               `
                    case 'fail':
                        return `
                    <div id="Message-sending-response-titles-container" class="message-fail">
                        <h1>Message couldn't be send</h1>
                        <h2>So sorry!</h2>
                    </div>
               `
                    case 'inProgress':
                        return `
                    <div id="Message-sending-response-titles-container" class="message-fail">
                         <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden"> </span>
                        </div>
                            <h5>Sending...</h5>
                    </div>
                    `
                }

                break

            case 'spanish':
                switch (status) {
                    case 'successful':
                        return `
                    
                    <div id="Message-sending-response-titles-container" class="message-successful">
                        <h1>Mensaje enviado!</h1>
                        <h2>Muchísimas Gracias!</h2>
                    </div>
               `
                    case 'fail':
                        return `
                    <div id="Message-sending-response-titles-container" class="message-fail">
                        <h1>No se pudo enviar el mensaje</h1>
                        <h2>Lo siento mucho!</h2>
                    </div>
               `
                    case 'inProgress':
                        return `
                    <div id="Message-sending-response-titles-container" class="message-fail">
                         <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden"> </span>
                        </div>
                            <h5 class="text-warning">Enviando...</h5>
                    </div>
                    `
                }

                break


        }
    }
}


export default contactSectionManager