const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nc1336282@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendFollowupEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nc1336282@gmail.com',
        subject: 'We hate to see you go :(',
        text: `Hi ${name}! Please let us know what made you leave and what could we have done to prevent it. This would help us improve our services.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFollowupEmail
}