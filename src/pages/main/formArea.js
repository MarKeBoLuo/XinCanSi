import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
let handleSubmit = (e) => {
    console.log(e)
    return false
}

export default (
    <Form onSubmit={handleSubmit}>
        <Form.Item>
            <Input placeholder="请输入"></Input>
        </Form.Item>
        <Form.Item>
            <Input placeholder="请输入"></Input>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit" size="small">
                <Icon type="down" />保存
            </Button>
        </Form.Item>
    </Form>
)