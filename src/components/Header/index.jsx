import React from 'react'
import './index.scss'

export default function Header(props) {
    const { stuName, stuNum, outDay, outDate, inDay, inDate } = JSON.parse(props.timeData)
    return (
        <div className='Header'>
            <span className='stuName'>{stuName}</span>
            <span className='stuNum'>{stuNum}</span>
            <ul className='outTime'>
                <li>{outDay}</li>
                <li>{outDate}-{inDay}</li>
                <li>{inDate}</li>
            </ul>
        </div>
    )
}
