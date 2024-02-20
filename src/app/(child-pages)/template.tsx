import PageWrapper from '@/components/page-wrapper/PageWrapper';
import { PropsWithChildren } from 'react';

const Template = ({ children }: PropsWithChildren) => {
    return <PageWrapper>{children}</PageWrapper>;
};

export default Template;
