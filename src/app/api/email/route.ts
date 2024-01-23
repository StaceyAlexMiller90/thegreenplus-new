import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { FormInputs } from '@/components/contact-form/ContactForm';
import { isValidEmail, isValidName, isValidMessage } from '../../../utils/regex';

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
        await sgMail.send(msg);
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
        await sgMail.send(msg);
    } catch (error) {
        return { success: false, error: error, type: 'submission' };
    }

    return sendSuccessAutoReply({ name, email });
};

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    if (!isValidName(name) || !isValidEmail(email) || !isValidMessage(message)) {
        return NextResponse.json(
            {
                success: false,
                error: 'Invalid form fields',
                type: 'submission',
            },
            { status: 400 },
        );
    }

    const response = await sendContactFormSubmission({ name, email, message });

    return NextResponse.json(response);
}
