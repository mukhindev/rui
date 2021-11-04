import React from 'react';

import DemoWrapper from '@/components/demos/DemoWrapper';
import Row from '@/components/ui/Row';

import Table, {
  TableMap,
  TableRow,
  TableCell,
  TableHeadRow,
} from '@/components/ui/Table';
import Button from '@/components/ui/Button';

type User = {
  id: number,
  name: string,
  job: string
};

const users: User[] = [
  { id: 1, name: 'Сергей', job: 'Фронтенд-разработчик' },
  { id: 5, name: 'Максим', job: 'Начальник цеха' },
  { id: 7, name: 'Александр', job: 'Директор' },
];

type Order = {
  id: string,
  status: string,
  on: () => void,
};

const orders: Order[] = [
  /* eslint-disable no-console */
  { id: 'A-42', status: 'inWork', on: () => console.log('Нажал А-42') },
  { id: 'D-95', status: 'inWork', on: () => console.log('Нажал D-95') },
  { id: 'U-4', status: 'pending', on: () => console.log('Нажал U-4') },
  /* eslint-enable no-console */
];

function D() {
  return (
    <DemoWrapper>
      <Row gap={2}>
        <Table data={users}>
          <TableHeadRow>
            <TableCell>
              <div>ID</div>
            </TableCell>
            <TableCell>Имя</TableCell>
            <TableCell>Работа</TableCell>
          </TableHeadRow>
          <TableMap>
            <TableRow>
              <TableCell>{(value: User) => value.id}</TableCell>
              <TableCell>{(value: User) => value.name}</TableCell>
              <TableCell>{(value: User) => value.job}</TableCell>
            </TableRow>
          </TableMap>
        </Table>

        <Table data={orders}>
          <TableMap>
            <TableRow>
              <TableCell>
                {(value: Order) => (
                  value.status === 'inWork'
                    ? <big>👷‍</big>
                    : <big>⏰</big>
                )}
              </TableCell>
              <TableCell>{(value: Order) => value.id}</TableCell>
              <TableCell>
                {(value: Order) => (
                  value.status === 'inWork'
                    ? 'В работе'
                    : 'Ожидает'
                )}
              </TableCell>
              <TableCell>
                {(value: Order) => (
                  <Button onClick={value.on}>
                    Нажать {value.id}
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableMap>
        </Table>
      </Row>
    </DemoWrapper>
  );
}

export default D;
