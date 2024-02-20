import { Fragment } from 'react';
import DocsSection from '@/components/docs/DocsSection';
import CodeComponent from '@/components/docs/Code';
import TableComponent from '@/components/table/Table';
import { Title, DataObject, DATA } from './data';

import styles from './ApiDocs.module.scss';

type Keys = 'BILL' | 'QUOTE' | 'CERTIFICATE';

const renderContent = (section: Title & DataObject, headingLevel: number) => {
    switch (section.type) {
        case 'text':
            return <p className={styles.Text}>{section.content}</p>;
        case 'code':
            return (
                <DocsSection title={section.title} headingLevel={headingLevel}>
                    <CodeComponent content={section.content} />
                </DocsSection>
            );
        case 'table':
            return (
                <DocsSection title={section.title} headingLevel={headingLevel}>
                    <TableComponent headers={section.headers} data={section.data} />
                </DocsSection>
            );
        case 'section':
            return (
                <DocsSection title={section.title} headingLevel={headingLevel}>
                    {section.children.map((child, index) => (
                        <Fragment key={index}>{renderContent(child, headingLevel + 1)}</Fragment>
                    ))}
                </DocsSection>
            );
        default:
            return null;
    }
};

const DocsPage = ({ params }: { params: { endpoint: string } }) => {
    const { endpoint } = params;
    const key = endpoint.toUpperCase();
    const endpointData = DATA[key as Keys];

    if (endpointData) {
        return (
            <>
                {endpointData.map((section, index) => (
                    <Fragment key={index}>{renderContent(section, 2)}</Fragment>
                ))}
            </>
        );
    }
};

export default DocsPage;
