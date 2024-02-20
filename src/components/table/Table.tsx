import { ReactNode } from 'react';
import styles from './Table.module.scss';

interface TableProps {
    headers: string[];
    data: ReactNode[][];
}

const Table = ({ headers, data }: TableProps) => {
    return (
        <table className={styles.Table}>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} className={styles.Header}>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className={styles.Row}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className={styles.Data}>
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
