import {
    Card,
    Form,
    Input,
    Button,
} from 'antd-mobile'

import { useNavigate } from 'react-router-dom';

import './index.scss'

export default function Login() {
    const navigate = useNavigate(),
        onFinish = (values) => {
            navigate(`/home?value=${JSON.stringify(values)}`)
        };

    const strDate = (date) => {
        const month = date.getMonth() + 1,
            day = date.getDate()
        return `${month < 10 ? '0' + month : month
            }-${day < 10 ? '0' + day : day}`
    }

    const date = new Date(),
        leaveDate = strDate(date)
    date.setDate(date.getDate() + 1)
    const backDate = strDate(date)

    /*  const onFinishFailed = (errorInfo) => {
         console.log('Failed:', errorInfo);
     }; */


    return (
        <div className='Login'>
            <Card
                title="离校报备"
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
                    <Form.Header>请填写以下信息：</Form.Header>
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
                        <Input clearable />
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
                        <Input clearable />
                    </Form.Item>
                    <Form.Item
                        label="离校日期"
                        name="outDay"
                        initialValue={leaveDate}
                        rules={[
                            { required: true, message: '不能为空' },
                            {
                                pattern: /^([0-9]{1,2})+\-[0-9]{1,2}$/,
                                message: '输入格式为XX-XX,中间不要有空格',
                                validateTrigger: 'onBlur' // 触发这个正则的事件
                            }
                        ]}
                    >
                        <Input clearable />

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
                        <Input clearable />
                    </Form.Item>
                    <Form.Item
                        label="返校日期"
                        name="inDay"
                        initialValue={backDate}
                        rules={[
                            { required: true, message: '不能为空' },
                            {
                                pattern: /^([0-9]{2})+\-[0-9]{2}$/,
                                message: '输入格式为XX-XX,中间不要有空格',
                                validateTrigger: 'onBlur' // 触发这个正则的事件
                            }
                        ]}
                    >
                        <Input clearable />
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
                        <Input clearable />
                    </Form.Item>
                </Form>
            </Card >
        </div >
    )
}
