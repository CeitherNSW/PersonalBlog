import { Form, Input, Button } from '@arco-design/web-react';
import React from 'react';
const FormItem = Form.Item;

const LoginForm = () => {
  return (
    <Form style={{ width: 600 }} autoComplete='off'>
      <FormItem label='Username'>
        <Input placeholder='user' />
      </FormItem>
      <FormItem label='Password'>
        <Input.Password placeholder='password' />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type='primary'>Login</Button>
      </FormItem>
    </Form>
  );
};

export default LoginForm;