
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from '@arco-design/web-react';

const FormItem = Form.Item;

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/home');
  }
  return (
    <div>
      <h1>Login</h1>
      <Form style={{ width: 600 }} autoComplete='off'>
      <FormItem label='Username'>
        <Input placeholder='user' />
      </FormItem>
      <FormItem label='Password'>
        <Input.Password placeholder='password' />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type='primary' onClick={handleLogin}>Login</Button>
      </FormItem>
    </Form>
    </div>
  );
}

export default LoginPage;