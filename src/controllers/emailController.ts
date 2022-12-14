import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import  { templateEmail }  from "../views/pages/email";

export const email =  (req: Request, res: Response) => {

    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "9ccbda08ab2625",
          pass: "92b09042112e60"
        }
      });

    let message = {
        from: 'teste <email@email.com>',
        to: 'teste@emaiul.com',
        subject: 'Teste',
        html:  templateEmail
    }

    transport.sendMail(message);

   res.render('pages/email-obrigado');
};