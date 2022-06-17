import React from 'react'
import {
    Card,
    Form,
    Input,
    Button,
} from 'antd-mobile'

import { useNavigate } from 'react-router-dom';


import './index.scss'

export default function Login() {
    const navigate = useNavigate()
    const onFinish = (values) => {
        navigate(`/home?value=${JSON.stringify(values)}`)
    };

    /*  const onFinishFailed = (errorInfo) => {
         console.log('Failed:', errorInfo);
     }; */
    return (
        <div className='Login'>
            <Card
                title="设置时间"
                bordered={false}
                className='loginCard'
            >

                <Form
                    onFinish={onFinish}
                    layout='horizontal'
                    footer={
                        <Button block type='submit' color='primary' size='large'>
                            提交
                        </Button>
                    }
                >
                    <Form.Header>请输入离校时间：</Form.Header>
                    <Form.Item
                        label="姓名"
                        name="stuName"
                        initialValue="张泸月"
                        rules={[
                            { required: true, message: '不能为空' },
                            {
                                pattern: /^[\u4e00-\u9fa5]{0,}$/,
                                message: '请输入汉字,中间不要有空格',
                                validateTrigger: 'onBlur' // 触发这个正则的事件
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="学号"
                        name="stuNum"
                        initialValue="1815041038"
                        rules={[
                            { required: true, message: '不能为空' },
                            {
                                pattern: /^[0-9]+$/,
                                message: '输入格式为数字,中间不要有空格',
                                validateTrigger: 'onBlur' // 触发这个正则的事件
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="离校日期"
                        name="outDay"
                        initialValue="06-18"
                        rules={[
                            { required: true, message: '不能为空' },
                            {
                                pattern: /^([0-9]{1,2})+\-[0-9]{1,2}$/,
                                message: '输入格式为XX-XX,中间不要有空格',
                                validateTrigger: 'onBlur' // 触发这个正则的事件
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="离校时间"
                        name="outDate"
                        initialValue="12:00"
                        rules={[
                            { required: true, message: '不能为空' },
                            {
                                pattern: /^([0-9]{2})+\:[0-9]{2}$/,
                                message: '输入格式为XX:XX,中间不要有空格',
                                validateTrigger: 'onBlur' // 触发这个正则的事件
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="返校日期"
                        name="inDay"
                        initialValue="06-21"
                        rules={[
                            { required: true, message: '不能为空' },
                            {
                                pattern: /^([0-9]{2})+\-[0-9]{2}$/,
                                message: '输入格式为XX-XX,中间不要有空格',
                                validateTrigger: 'onBlur' // 触发这个正则的事件
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="返校时间"
                        name="inDate"
                        initialValue="12:00"
                        rules={[
                            { required: true, message: '不能为空' },
                            {
                                pattern: /^([0-9]{2})+\:[0-9]{2}$/,
                                message: '输入格式为XX:XX,中间不要有空格',
                                validateTrigger: 'onBlur' // 触发这个正则的事件
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <div style={{ fontSize: '3.704vw', textAlign: 'center' }}>
                    皮皮章出品，仅供学习使用
                </div>
            </Card >
        </div >
    )
}
