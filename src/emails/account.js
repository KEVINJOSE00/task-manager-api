const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'kevinjose199713@gmail.com',
        subject : 'Thanks for joining in',
        text : `Welocome to the app, ${name}. let me know how you get along the app.`
    })

}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'kevinjose199713@gmail.com',
        subject : 'Sorry to see you go!',
        text : `Goodbye ${name}. Is there anything we could have done to kept you on board?.`
    })

}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}