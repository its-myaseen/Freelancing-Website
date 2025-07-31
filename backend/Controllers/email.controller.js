//Controller for handling email-related requests
const nodemailer = require('nodemailer');



// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS  // Your email password or app password
    }
})

const sendContactRequest = async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.query;

    if (!firstName || !lastName || !email || !phone || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }


    const mailOptions = {
        from: process.env.EMAIL_USER, // Your email address
        to: "itsmyaseen2040@gmail.com", // Recipient's email address
        subject: `Contact Request from ${firstName} ${lastName}`,
        html: `
        <div id="mail-container" style="display: block; width: 600px; margin: 0 auto; background-color: black; padding-top: 50px; padding-bottom: 20px; padding-left: 30px; padding-right: 30px;">
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQGina4ZEx0tFA/profile-displayphoto-scale_400_400/B4EZghAv3TGYAg-/0/1752900503970?e=2147483647&v=beta&t=pk3IGmenpaASDfdQXYjuUZcfb8WMwl49X86gpiDBXkQ" alt="Profile Picture" style="width: 130px; height: 130px; border-radius: 50%;">
            <h1 style="display: block; position: relative; color: white; font-family: Arial, Helvetica, sans-serif; padding-bottom: 0px; margin-bottom: 0px;">Muhammad Yaseen</h1>
            <p style="display: block; position: relative; color: rgb(211, 211, 211); font-family: Arial, Helvetica, sans-serif; font-size: 15px; margin-top: 2px;">PORTFOLIO</p>
            <table
                border="0"
                cellpadding="10"
                cellspacing="0"
                style="width: 100%; margin-top: 35px; border-top-left-radius: 10px; border-top-right-radius: 10px; overflow: hidden; border-collapse: collapse; color: rgb(235, 235, 235); font-family: Arial, Helvetica, sans-serif;"
            >
                <thead>
                    <tr style="background-color: #1a1a1a;">
                        <th style="text-align: left;">Name</th>
                        <th style="text-align: left;">Email</th>
                        <th style="text-align: left;">Phone</th>
                    </tr>
                </thead>
                <tbody style="color: rgb(206, 206, 206); font-size: 14px;">
                    <tr style="background-color: rgb(14, 14, 14);">
                        <td>${firstName} ${lastName}</td>
                        <td>${email}</td>
                        <td>${phone}</td>
                    </tr>
                </tbody>
            </table>
            <div style="display: block; position: relative; width: 100%; margin-top: 40px;">
                <h1 style="display: block; position: relative; color: rgb(243, 243, 243); font-family: Arial, Helvetica, sans-serif; font-size: 15px; font-weight: 550;">Message:</h1>
                <p style="display: block; position: relative; color: rgb(221, 221, 221); font-family: Arial, Helvetica, sans-serif; ">${message}</p>
            </div>

            <p style="display: block; position: relative; margin: 0 auto; color: rgb(173, 173, 173); text-align: center; font-family: Arial, Helvetica, sans-serif; font-size: 12px; width: 50%; margin-top: 50px;">This is a Contact Request, Sended from Portfolio website of Muhammad Yaseen</p>
        </div>`
    };

    try {
        const info = await transporter.sendMail(mailOptions)
        console.log('Request info: ' + info.response);
        res.json({ success: true, message: 'Request Submitted!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send contact request' });
    }
}

module.exports = {
    sendContactRequest
}