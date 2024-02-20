import { ReactNode } from 'react';
import Button from '@/components/button/Button';

import styles from './ApiDocs.module.scss';

interface TableSection {
    type: 'table';
    headers: string[];
    data: ReactNode[][];
}

interface Section {
    type: 'section';
    children: (Title & DataObject)[];
}

interface Content {
    type: 'code' | 'text';
    content: string;
}

export interface Title {
    title?: string;
}

export type DataObject = TableSection | Section | Content;

export interface Data {
    BILL: (Title & DataObject)[];
    QUOTE: (Title & DataObject)[];
    CERTIFICATE: (Title & DataObject)[];
}

export const DATA: Data = {
    BILL: [
        {
            title: 'Prod URL',
            type: 'section',
            children: [
                {
                    type: 'code',
                    content: 'https://api.thegreenplus.nl/api/prdbill',
                },
            ],
        },
        {
            title: 'Dev URL',
            type: 'section',
            children: [
                {
                    type: 'code',
                    content: 'https://api.thegreenplus.nl/api/devbill',
                },
            ],
        },
        {
            title: '1.0 Insert a trip',
            type: 'section',
            children: [
                {
                    title: '1.1 Flight',
                    type: 'section',
                    children: [
                        {
                            title: 'Example',
                            type: 'code',
                            content:
                                'https://api.thegreenplus.nl/api/prdbill?apikey=YOURAPIKEYHERE&action=insert&modality=flight&startend=JFK,LAX&trip=oneway&airline=AA&class=Economy&person=1&booking=ABC123&departure=2023-02-15&externalinvoicenumber=INV123&externalcustomernumber=CUST456',
                        },
                        {
                            title: 'Input parameters',
                            type: 'table',
                            headers: ['Name', 'Type', 'Value', 'Last Mod.'],
                            data: [
                                [
                                    'apikey',
                                    'String',
                                    'The Green Plus API key (unique per customer)',
                                    '02/01/2023',
                                ],
                                ['action', 'String', 'insert', '02/01/2023'],
                                ['modality', 'String', 'flight', '02/01/2023'],
                                [
                                    'startend',
                                    'String',
                                    'IATA 3 digit location code, start and end separated by ","',
                                    '02/01/2023',
                                ],
                                ['trip', 'String', 'oneway or retour', '02/01/2023'],
                                ['airline', 'String', 'IATA 2 digit airline code', '02/01/2023'],
                                ['class', 'String', 'IATA 1 digit class code', '02/01/2023'],
                                [
                                    'person',
                                    'Integer',
                                    'Number of persons included in calculation',
                                    '02/01/2023',
                                ],
                                [
                                    'booking',
                                    'String (100)',
                                    'Airliner booking reference (PNR)',
                                    '02/01/2023',
                                ],
                                ['departure', 'Date', 'YYYY-MM-DD', '02/01/2023'],
                                [
                                    'externalinvoicenumber',
                                    'String (50)',
                                    'Your invoice reference towards end customer',
                                    '02/01/2023',
                                ],
                                [
                                    'externalcustomernumber',
                                    'String (50)',
                                    'Your internal reference for end consumer',
                                    '02/01/2023',
                                ],
                            ],
                        },
                    ],
                },
                {
                    title: '1.2 Train or Boat',
                    type: 'section',
                    children: [
                        {
                            title: 'Example',
                            type: 'code',
                            content:
                                'https://api.thegreenplus.nl/api/prdbill?apikey=YOURAPIKEYHERE&action=insert&modality=train&startend=TGP,TGP&trip=oneway&person=1&booking=ABC123&departure=2023-02-15&externalinvoicenumber=INV123&externalcustomernumber=CUST456',
                        },
                        {
                            title: 'Input parameters',
                            type: 'table',
                            headers: ['Name', 'Type', 'Value', 'Last Mod.'],
                            data: [
                                [
                                    'apikey',
                                    'String',
                                    'The Green Plus API key (unique per customer)',
                                    '02/01/2023',
                                ],
                                ['action', 'String', 'insert', '02/01/2023'],
                                ['modality', 'String', 'train or boat', '02/01/2023'],
                                ['startend', 'String', 'Only use "TGP,TGP"', '02/01/2023'],
                                ['trip', 'String', 'oneway or retour', '02/01/2023'],
                                [
                                    'person',
                                    'Integer',
                                    'Number of persons included in calculation',
                                    '02/01/2023',
                                ],
                                ['booking', 'String (100)', 'Booking reference', '02/01/2023'],
                                ['departure', 'Date', 'YYYY-MM-DD', '02/01/2023'],
                                [
                                    'externalinvoicenumber',
                                    'String (50)',
                                    'Your invoice reference towards end customer',
                                    '02/01/2023',
                                ],
                                [
                                    'externalcustomernumber',
                                    'String (50)',
                                    'Your internal reference for end consumer',
                                    '02/01/2023',
                                ],
                            ],
                        },
                    ],
                },
                {
                    title: '1.3 Response',
                    type: 'section',
                    children: [
                        {
                            title: 'Example',
                            type: 'code',
                            content:
                                '{ "status": "insert success", "id": "12345", "emission": "123", "compensation": "1.23" }',
                        },
                        {
                            title: 'Input parameters',
                            type: 'table',
                            headers: ['Name', 'Type', 'Value', 'Last Mod.'],
                            data: [
                                ['status', 'String', 'insert success', '02/01/2023'],
                                ['id', 'String', '', '01/03/2023'],
                                ['emission', 'String', "Emission in kg's", '02/01/2023'],
                                [
                                    'compensation',
                                    'String',
                                    'Cost of compensation in EUR',
                                    '02/01/2023',
                                ],
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: '2.0 Delete a trip',
            type: 'section',
            children: [
                {
                    title: '2.1 Flight, Train or Boat',
                    type: 'section',
                    children: [
                        {
                            title: 'Example',
                            type: 'code',
                            content:
                                'https://api.thegreenplus.nl/api/prdbill?apikey=YOURAPIKEYHERE&action=delete&id=CALLID',
                        },
                        {
                            title: 'Input parameters',
                            type: 'table',
                            headers: ['Name', 'Type', 'Value', 'Last Mod.'],
                            data: [
                                [
                                    'apikey',
                                    'String',
                                    'The Green Plus API key (unique per customer)',
                                    '02/01/2023',
                                ],
                                ['action', 'String', 'delete', '02/01/2023'],
                                [
                                    'id',
                                    'String',
                                    <p key="link">
                                        id returned from{' '}
                                        <Button
                                            href="#1.3Response"
                                            variant="naked"
                                            className={styles.Link}>
                                            1.3
                                        </Button>
                                    </p>,
                                    '02/01/2023',
                                ],
                            ],
                        },
                    ],
                },
                {
                    title: '2.2 Response',
                    type: 'section',
                    children: [
                        {
                            title: 'Example',
                            type: 'code',
                            content:
                                '{ "status": "delete success", "id": "12345", "emission": "", "compensation": "" }',
                        },
                        {
                            title: 'Input parameters',
                            type: 'table',
                            headers: ['Name', 'Type', 'Value', 'Last Mod.'],
                            data: [
                                ['status', 'String', 'delete success', '02/01/2023'],
                                ['id', 'String', '', '01/03/2023'],
                                ['emission', 'String', '', '02/01/2023'],
                                ['compensation', 'String', '', '02/01/2023'],
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: '3.0 Error Response',
            type: 'section',
            children: [
                {
                    title: 'Example',
                    type: 'code',
                    content:
                        '{ "status": "error 601", "id": "", "emission": "", "compensation": "" }',
                },
                {
                    title: 'Input parameters',
                    type: 'table',
                    headers: ['Action type', 'Code', 'Explanation', 'Last Mod.'],
                    data: [
                        ['status', 'error 601', 'Access denied', '02/01/2023'],
                        ['', 'error 602', 'Unknown start location', '02/01/2023'],
                        ['', 'error 603', 'Unknown end location', '02/01/2023'],
                        ['', 'error 604', 'Unknown modality', '02/01/2023'],
                        ['', 'error 605', 'Unknown action', '02/01/2023'],
                        ['', 'error 606', 'Unknown format departure date', '02/01/2023'],
                        ['', 'error 607', 'Unknown airline and class combination', '02/01/2023'],
                        ['', 'error 608', 'Unknown call id', '02/01/2023'],
                        [
                            'id',
                            'String',
                            'Always empty string with the exception of error 607',
                            '02/01/2023',
                        ],
                        [
                            'emission',
                            'String',
                            'Always empty string with the exception of error 607',
                            '02/01/2023',
                        ],
                        [
                            'compensation',
                            'String',
                            'Always empty string with the exception of error 607',
                            '02/01/2023',
                        ],
                    ],
                },
            ],
        },
    ],
    QUOTE: [
        {
            title: 'Prod URL',
            type: 'section',
            children: [
                {
                    type: 'code',
                    content: 'https://api.thegreenplus.nl/api/prdquote',
                },
            ],
        },
        {
            title: 'Dev URL',
            type: 'section',
            children: [
                {
                    type: 'code',
                    content: 'https://api.thegreenplus.nl/api/devquote',
                },
            ],
        },
        {
            title: '1.0 Insert a trip',
            type: 'section',
            children: [
                {
                    title: '1.1 Flight',
                    type: 'section',
                    children: [
                        {
                            title: 'Example',
                            type: 'code',
                            content:
                                'https://api.thegreenplus.nl/api/prdquote?apikey=YOURAPIKEYHERE&action=insert&modality=flight&startend=&trip=&airline=&class=&person=&booking=&departure&externalcustomernumber=',
                        },
                        {
                            title: 'Input parameters',
                            type: 'table',
                            headers: ['Name', 'Type', 'Value', 'Last Mod.'],
                            data: [
                                [
                                    'apikey',
                                    'String',
                                    'The Green Plus API key (unique per customer)',
                                    '21/02/2023',
                                ],
                                ['action', 'String', 'insert', '21/02/2023'],
                                ['modality', 'String', 'flight', '21/02/2023'],
                                [
                                    'startend',
                                    'String',
                                    'IATA 3 digit location code, start and end separated by ","',
                                    '21/02/2023',
                                ],
                                ['trip', 'String', 'oneway or retour', '21/02/2023'],
                                ['airline', 'String', 'IATA 2 digit airliner code', '21/02/2023'],
                                ['class', 'String', 'IATA 1 digit class code', '21/02/2023'],
                                [
                                    'person',
                                    'Integer',
                                    'Number of persons included in calculation',
                                    '21/02/2023',
                                ],
                                [
                                    'booking',
                                    'String (100)',
                                    'Airliner booking reference (PNR)',
                                    '21/02/2023',
                                ],
                                ['departure', 'Date', 'YYYY-MM-DD', '21/02/2023'],
                                [
                                    'externalcustomernumber',
                                    'String (50)',
                                    'Your internal reference for end consumer',
                                    '21/02/2023',
                                ],
                            ],
                        },
                        {
                            type: 'text',
                            content:
                                'Please note that the API key is unique on customer level and should not be shared.',
                        },
                        {
                            type: 'text',
                            content: 'We advise to always calculate based on 1 person.',
                        },
                        {
                            type: 'text',
                            content:
                                'Calculation data on tickets that contain multiple segments are to be totalized within your application.',
                        },
                    ],
                },
                {
                    title: '1.2 Train or Boat',
                    type: 'section',
                    children: [
                        {
                            title: 'Example',
                            type: 'code',
                            content:
                                'https://api.thegreenplus.nl/api/prdquote?apikey=YOURAPIKEYHERE&action=insert&modality=train&startend=TGP,TGP&trip=&person=&booking=&departure=&externalcustomernumber=',
                        },
                        {
                            title: 'Input parameters',
                            type: 'table',
                            headers: ['Name', 'Type', 'Value', 'Last Mod.'],
                            data: [
                                [
                                    'apikey',
                                    'String',
                                    'The Green Plus API key (unique per customer)',
                                    '21/02/2023',
                                ],
                                ['action', 'String', 'insert', '21/02/2023'],
                                ['modality', 'String', 'train or boat', '21/02/2023'],
                                ['startend', 'String', 'Only use "TGP,TGP"', '21/02/2023'],
                                ['trip', 'String', 'oneway or retour', '21/02/2023'],
                                [
                                    'person',
                                    'Integer',
                                    'Number of persons included in calculation',
                                    '21/02/2023',
                                ],
                                ['booking', 'String (100)', 'Booking reference', '21/02/2023'],
                                ['departure', 'Date', 'YYYY-MM-DD', '21/02/2023'],
                                [
                                    'externalcustomernumber',
                                    'String (50)',
                                    'Your internal reference for end consumer',
                                    '21/02/2023',
                                ],
                            ],
                        },
                        {
                            type: 'text',
                            content:
                                'Please note that the API key is unique on customer level and should not be shared.',
                        },
                    ],
                },
                {
                    title: '1.3 Response',
                    type: 'section',
                    children: [
                        {
                            title: 'Example',
                            type: 'code',
                            content:
                                '{ "status": "insert success", "id": "12345", "emission": "123", "compensation": "1.23" }',
                        },
                        {
                            title: 'Input parameters',
                            type: 'table',
                            headers: ['Name', 'Type', 'Value', 'Last Mod.'],
                            data: [
                                ['status', 'String', 'insert success', '21/02/2023'],
                                ['id', 'String', '', '21/02/2023'],
                                ['emission', 'String', "Emission in kg's", '21/02/2023'],
                                [
                                    'compensation',
                                    'String',
                                    'Cost of compensation in EUR',
                                    '21/02/2023',
                                ],
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: '3.0 Error Response',
            type: 'section',
            children: [
                {
                    title: 'Example',
                    type: 'code',
                    content:
                        '{ "status": "error 6**", "id": "", "emission": "", "compensation": "" }',
                },
                {
                    title: 'Input parameters',
                    type: 'table',
                    headers: ['Action type', 'Code', 'Explanation', 'Last Mod.'],
                    data: [
                        ['status', 'error 601', 'Access denied', '21/02/2023'],
                        ['', 'error 602', 'Unknown start location', '21/02/2023'],
                        ['', 'error 603', 'Unknown end location', '21/02/2023'],
                        ['', 'error 604', 'Unknown modality', '21/02/2023'],
                        ['', 'error 605', 'Unknown action', '21/02/2023'],
                        ['', 'error 606', 'Unknown format departure date', '21/02/2023'],
                        [
                            'id',
                            'String',
                            'Always empty string with the exception of error 607',
                            '21/02/2023',
                        ],
                        [
                            'emission',
                            'String',
                            'Always empty string with the exception of error 607',
                            '21/02/2023',
                        ],
                        [
                            'compensation',
                            'String',
                            'Always empty string with the exception of error 607',
                            '21/02/2023',
                        ],
                    ],
                },
            ],
        },
    ],
    CERTIFICATE: [
        {
            title: 'Prod URL',
            type: 'section',
            children: [
                {
                    type: 'code',
                    content: 'https://api.thegreenplus.nl/api/prdcertificate',
                },
            ],
        },
        {
            title: 'Dev URL',
            type: 'section',
            children: [
                {
                    type: 'code',
                    content: 'https://api.thegreenplus.nl/api/devcertificate',
                },
            ],
        },
        {
            title: '1.0 Insert a trip',
            type: 'section',
            children: [
                {
                    title: '1.1 Flight, train or boat',
                    type: 'section',
                    children: [
                        {
                            title: 'Example',
                            type: 'code',
                            content:
                                'https://api.thegreenplus.nl/api/prdcertificate?apikey=YOURAPIKEYHERE&date=&name=&booking=&emission=&compensation=',
                        },
                        {
                            title: 'Input parameters',
                            type: 'table',
                            headers: ['Name', 'Type', 'Value', 'Last Mod.'],
                            data: [
                                [
                                    'apikey',
                                    'String',
                                    'The Green Plus API key (unique per customer)',
                                    '21/02/2023',
                                ],
                                ['date', 'Date', 'Date of departure (YYYY-MM-DD)', '11/06/2023'],
                                ['name', 'String', '', '21/02/2023'],
                                [
                                    'booking',
                                    'String (100)',
                                    'Booking reference (PNR)',
                                    '21/02/2023',
                                ],
                                ['emission', 'String', "Emission in kg's", '21/02/2023'],
                                [
                                    'compensation',
                                    'String',
                                    'Cost of compensation in EUR',
                                    '21/02/2023',
                                ],
                            ],
                        },
                        {
                            type: 'text',
                            content:
                                'Please note that the API key is unique on the customer level and should not be shared.',
                        },
                        {
                            type: 'text',
                            content: 'Booking is being projected in the response URL.',
                        },
                    ],
                },
                {
                    title: '1.2 Response',
                    type: 'section',
                    children: [
                        {
                            title: '',
                            type: 'text',
                            content: 'Url of certificate (String)',
                        },
                        {
                            title: 'Example',
                            type: 'code',
                            content:
                                'https://api.thegreenplus.nl/userfiles/file/TGP_certificate_test.pdf',
                        },
                    ],
                },
            ],
        },
    ],
};

export default DATA;
