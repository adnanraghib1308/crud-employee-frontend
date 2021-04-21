import { Table, Button, Layout, Menu } from 'antd';
import { getAllEmployee, deleteEmployee } from '../services/backend';
import React, { useState, useEffect } from "react";
import { Content, Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import Navbar from './component/Navbar';

const List = () => {
  const [employee, setEmployee] = useState([]);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        return (
          <div>
            <Button onClick={() => {
              delEmpp(record._id)
            }}>Delete</Button>
            <Button><a href={`/employee/update/${record._id}`}>update</a></Button>
          </div>
        )
      },
    }
  ];

  const preload = () => {
    getAllEmployee().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setEmployee(data);
      }
    });
  };
  useEffect(() => {
    preload();
  }, []);

  const delEmpp = (id) => {
    deleteEmployee(id).then(data => {
      preload()
    });
  }
  return (
    <Layout>
      <Header style={{ marginBottom: "20px" }}>
        <Navbar />
      </Header>
      <Content>
        <Table style={{ margin: "30px" }} columns={columns} dataSource={employee} />
      </Content>
    </Layout>
  )
}

export default List;