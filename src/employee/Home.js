import { Form, Input, Button, Alert, Layout, Menu } from 'antd';
import { createEmployee } from '../backend';
import '../App.css';
import React, { useState } from "react";
import { Content, Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';

const layout = {
  labelCol: { span: 4, },
  wrapperCol: { span: 16 },

};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

function App() {
  const [created, setCreated] = useState(false);
  const onFinish = (values: any) => {
    setCreated(true);
    createEmployee(values)
      .then((data) => {
        console.log(data);
      })
  };
  return (
    <Layout>
      <Header style={{ marginBottom: "20px" }}>
        <Navbar/>
      </Header >
      <Content>
        {created && <Alert {...layout} style={{ marginBottom: "20px" }} message="Employee created Successfully" type="success" />}
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter employee name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter employee email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Designation"
            name="designation"
            rules={[{ required: true, message: 'Please enter employee designation!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
}

export default App;
