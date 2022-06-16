import React from 'react'
import { useEffect, useState } from 'react'
import './index.scss'

export default function MainDate() {
    let [MDobj, setMDobj] = useState({
        month: 0,
        today: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const timeData = () => {
        const date = new Date()
        const newObj = {
            month: date.getMonth() + 1,
            today: date.getDate(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        }
        for (let key in newObj) {
            newObj[key] = newObj[key] >= 10 ? newObj[key] : '0' + newObj[key]
        }
        return newObj
    }
    useEffect(() => {
        setMDobj(timeData())
        const timer = setInterval(() => {
            setMDobj(timeData())
        }, 800)
        return () => {
            clearInterval(timer)
        }
    }, [])

    const { month, today, hours, minutes, seconds } = MDobj
    return (
        <div className='MainDate'>
            <div className="leftDate">
                {`${month}-${today}`}
            </div>
            <div className="rightDate">{`${hours}:${minutes}:${seconds}`}</div>
        </div>
    )
}
