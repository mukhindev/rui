import React from 'react';

import DemoWrapper from '@/components/demos/DemoWrapper';
import Table from '@/components/ui/Table';
import TableMap from '@/components/ui/Table/TableMap';
import TableCell from '@/components/ui/Table/TableCell';
import TableRow from '@/components/ui/Table/TableRow';

type User = {
  id: number,
  name: string,
  job: string
};

const data: User[] = [
  { id: 1, name: 'Сергей', job: 'Фронтенд-разработчик' },
  { id: 5, name: 'Максим', job: 'Начальник цеха' },
  { id: 7, name: 'Александр', job: 'Директор' },
];

function D() {
  return (
    <DemoWrapper>
      <Table data={data}>
        <TableRow>
          <TableCell>
            <div>ID</div>
          </TableCell>
          <TableCell>Имя</TableCell>
          <TableCell>Работа</TableCell>
        </TableRow>
        <TableMap>
          <TableRow>
            <TableCell>{(value: User) => value.id}</TableCell>
            <TableCell>{(value: User) => value.name}</TableCell>
            <TableCell>{(value: User) => value.job}</TableCell>
          </TableRow>
        </TableMap>
      </Table>
    </DemoWrapper>
  );
}

export default D;
