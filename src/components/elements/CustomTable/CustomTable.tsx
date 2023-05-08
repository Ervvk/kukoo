import { Table, Pagination } from '@mantine/core';
import { useState } from 'react';

import styles from './CustomTable.module.scss';

type tableSchemaElement = {
  id: number;
  name: string;
  key: string;
  extra?: any;
};

type CustomTableProps = { schema: tableSchemaElement[]; elements: any[] };

export const CustomTable = ({ schema, elements }: CustomTableProps) => {
  const [activePage, setPage] = useState(1);

  const rows = elements.map((element) => (
    <tr key={element.warehouse_id}>
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
        horizontalSpacing={'3rem'}
        verticalSpacing=".5rem"
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
        <tbody>{rows}</tbody>
      </Table>
      <div className={styles['table-pagination-wrapper']}>
        <Pagination value={activePage} onChange={setPage} total={10} />
      </div>
    </div>
  );
};
