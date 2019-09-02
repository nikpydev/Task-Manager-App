const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

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