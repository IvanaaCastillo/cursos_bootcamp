import { transporter } from '../../config/mail.config.js';
import { emailHtmlTemplate } from '../../errors/TypeError.js';


export const sendMailService = async({ to, subject, message, html = '' }) => {
    try {
        const htmlTemplate = emailHtmlTemplate(undefined, message)

        const mailOptions = {
            from: user,
            to,
            subject,
            message,
            html
        };

        const infoData = await transporter.sendMail(mailOptions);
        console.log('Correo enviado con éxito');
        return infoData;
    } catch (error) {
        throw new MailServiceError('Error al enviar el correo', 500, error);
    }
};