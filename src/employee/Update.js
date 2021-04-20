import { Form, Input, Button, Alert, Layout, Menu } from 'antd';
import { getEmployeeById, updateEmployee } from '../backend';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Content, Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from '../component/Navbar';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const Update = () => {
  const { id } = useParams()
  const [created, setCreated] = useState(false);

  const onFinish = (values: any) => {
    updateEmployee(id, values)
      .then((data) => {
        console.log(data);
      })
    setCreated(true);
  };
  return (
    <Layout>
      <Header style={{ marginBottom: "20px" }}>
        <Navbar />
      </Header>
      <Content>
      {created && <Alert style={{ marginTop: "10px", marginBottom: "10px" }} {...layout} message="Employee Updated Successfully" type="success" />}
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Designation"
            name="designation"
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
}

export default Update;
