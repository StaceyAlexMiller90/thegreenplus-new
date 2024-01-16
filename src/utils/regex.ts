export const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
export const nameRegex = /^[A-Za-z\s.,!?'"()-\-]+$/;
export const messageRegex = /^[0-9A-Za-z\s.,!?&*@€%$'"()\-\n\r]+$/;

export const isValidEmail = (email: string) => {
    return email && emailRegex.test(email);
};

export const isValidName = (name: string) => {
    return name && name.length <= 30 && nameRegex.test(name);
};

export const isValidMessage = (message: string) => {
    return message && message.length <= 1000 && messageRegex.test(message);
};
