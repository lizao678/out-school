import React from 'react'
import './index.scss'

export default function Footer() {
    return (
        <ul className='Footer'>
            <li>黄码：您当前处于进出校预警状态。</li>
            <li>绿码：您符合进校条件。</li>
        </ul>
    )
}
