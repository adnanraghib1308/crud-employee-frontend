import { Table, Button, Layout, Menu } from 'antd';
import { getAllEmployee, deleteEmployee } from '../backend';
import React, { useState, useEffect } from "react";
import { Content, Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';

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
      <Header style={{ marginBottom: "10px" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" ><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/employee/list'>List</Link></Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Table style={{ margin: "30px" }} columns={columns} dataSource={employee} />
      </Content>
    </Layout>
  )
}

export default List;