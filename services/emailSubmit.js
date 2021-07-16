
function emailSubmit() {

    const templateParams = {

        user_id: 'user_5liDAaGg4XmWwFXcxuYQj',
        from_name: 'Jose',
        message: 'hola como vas',

    }

    emailjs.send('service_dg2aa8w', 'service_dg2aa8w', templateParams)
}

export default emailSubmit