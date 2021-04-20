import React, { useState } from 'react'
import { Form, Input, Button, Alert, Layout, Menu } from 'antd';
import Navbar from '../component/Navbar';
import { Content, Header } from 'antd/lib/layout/layout';
import { signup } from '../authapicalls';
import { Redirect } from 'react-router-dom';

const layout = {
    labelCol: { span: 4, },
    wrapperCol: { span: 16 },

};
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};

const Signup = () => {
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState(false);

    const onFinish = (values: any) => {
        signup(values)
            .then(response => {
                if (response.error) {
                    setError(response.error);
                }
                else {
                    setRedirect(true)
                }
            })
    };
    return (
        <Layout>
            <Header style={{ marginBottom: "20px" }}>
                <Navbar />
            </Header>

            <Content>
                {error != "" && <Alert {...layout} style={{ marginBottom: "20px" }} message={error} type="error" />}
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Name is required' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Email is required!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter the password' }]}
                    >
                        <Input type="password" />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
            {redirect && <Redirect to="/" />}
        </Layout>
    )
}

export default Signup;
