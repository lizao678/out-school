import React from 'react'
import './index.scss'

export default function Header(props) {
    const { outDay, outDate, inDay, inDate } = JSON.parse(props.timeData)
    return (
        <div className='Header'>
            <ul className='outTime'>
                <li>{outDay}</li>
                <li>{outDate}-{inDay}</li>
                <li>{inDate}</li>
            </ul>
        </div>
    )
}
