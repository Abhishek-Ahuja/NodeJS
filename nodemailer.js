const nodemailer = require(nodemailer);

async function sendMail() {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    })

    const mailOptions = {
        from: 'senderemail',
        to: 'receiveremail',
        subject: 'Nodemailer mail sent',
        text: 'The world has enough coders; be a coder!'
    }

    try{
        const res = await transport.sendMail(mailOptions)
        console.log("Mail sent. ", res);
    }catch(err){
        console.log(err.message)
    }
}