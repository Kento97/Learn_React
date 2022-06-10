// @flow
import React from 'react';
import { Table, Popconfirm, Button } from 'antd';

type Props = {
  products: { name: string }[];
  onDelete: (id: string) => void;
};
const ProductList: React.FC<Props> = ({ onDelete, products }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text: any, record: any) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

export default ProductList;
