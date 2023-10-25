import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, message } = request.body;

    // Validate input data
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // your domain email address
            pass: process.env.EMAIL_PASSWORD, // your password
        },
    });

    const emailContents = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `New contact from request from: ${name}`,
        text: `You have a new message from ${name}:

        Message contents:
        
        ${message}`,
    };

    transporter.sendMail(emailContents, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
    // emailjs
    //     .send(
    //         process.env.EMAILJS_SERVICE_ID as string,
    //         process.env.EMAILJS_TEMPLATE_ID as string,
    //         {
    //             from_name: name,
    //             message,
    //             reply_to: email,
    //         },
    //         process.env.EMAILJS_PUBLIC_KEY,
    //     )
    //     .then(result => {
    //         console.log(result.text);
    //     })
    //     .catch(error => {
    //         console.log(error.text);
    //     });
}
