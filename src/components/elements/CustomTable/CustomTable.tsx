import { Table, Pagination } from '@mantine/core';
import { useState } from 'react';

import styles from './CustomTable.module.scss';

type tableSchemaElement = {
  id: number;
  name: string;
  key: string;
  extra?: any;
};

type CustomTableProps = { schema: tableSchemaElement[]; elements: any[]; pageRows: number };

const paginate = (array: any[], page_size: number, page_number: number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

export const CustomTable = ({ schema, elements, pageRows }: CustomTableProps) => {
  const [activePage, setPage] = useState(1);

  const rows = elements.map((element, id) => (
    <tr key={id}>
      {schema.map((schemaElement) => (
        <td className={styles['table-cell']} key={schemaElement.id}>
          {schemaElement.key.length > 0
            ? element[schemaElement.key]
            : schemaElement.extra(element.extraValue)}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className={styles['table-wrapper']}>
      <Table
        horizontalSpacing={'2.5rem'}
        verticalSpacing="1rem"
        striped
        highlightOnHover
        className={styles['table']}
      >
        <thead>
          <tr>
            {schema.map((schemaElement) => (
              <th key={schemaElement.id} className={styles['table-cell']}>
                {schemaElement.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{paginate(rows, pageRows, activePage)}</tbody>
      </Table>
      <div className={styles['table-pagination-wrapper']}>
        <Pagination
          value={activePage}
          onChange={setPage}
          total={Math.round(elements.length / pageRows)}
        />
      </div>
    </div>
  );
};
