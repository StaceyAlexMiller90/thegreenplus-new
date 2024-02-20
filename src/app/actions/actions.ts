'use server';
import sgMail from '@sendgrid/mail';
import { FormInputs } from '@/components/contact-form/ContactForm';
import { isValidEmail, isValidName, isValidMessage } from '@/utils/regex';

interface ResponseData {
    success: boolean;
    type: 'auto-reply' | 'submission';
    error?: unknown;
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const sendSuccessAutoReply = async ({
    name,
    email,
}: Partial<FormInputs>): Promise<ResponseData> => {
    const msg = {
        to: email,
        from: process.env.HELLO_EMAIL as string,
        templateId: process.env.AUTO_REPLY_TEMPLATE as string,
        dynamicTemplateData: {
            name,
        },
    };

    try {
        const response = await sgMail.send(msg);

        if (response[0].statusCode !== 202) {
            throw new Error('something went wrong');
        }

        return { success: true, type: 'auto-reply' };
    } catch (error) {
        return { success: false, type: 'auto-reply', error };
    }
};

const sendContactFormSubmission = async ({
    name,
    email,
    message,
}: Omit<FormInputs, 'privacyConsent'>): Promise<ResponseData> => {
    const msg = {
        to: process.env.HELLO_EMAIL as string,
        from: process.env.HELLO_EMAIL as string,
        templateId: process.env.SUBMISSION_TEMPLATE as string,
        dynamicTemplateData: {
            name,
            email,
            message,
        },
    };

    try {
        const response = await sgMail.send(msg);

        if (response[0].statusCode !== 202) {
            throw new Error('something went wrong');
        }

        return sendSuccessAutoReply({ name, email });
    } catch (error) {
        return { success: false, error: error, type: 'submission' };
    }
};

export const submitForm = async ({ name, email, message }: Omit<FormInputs, 'privacyConsent'>) => {
    if (!isValidName(name) || !isValidEmail(email) || !isValidMessage(message)) {
        return { success: false, error: 'Invalid form fields', type: 'submission' };
    }
    return sendContactFormSubmission({ name, email, message });
};
