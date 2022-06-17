import React from 'react'
import './index.scss'
import greenImg from '@/assets/green.png'

export default function Green() {
    return (
        <div className='GreenCode'>
            <div className='midWord'>
                通大进出校码
            </div>
            <div className='imgGreen'>
                <img src={greenImg} alt="LV" />
            </div>
        </div>
    )
}
