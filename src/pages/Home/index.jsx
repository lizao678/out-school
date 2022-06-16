import React from 'react'
import Header from '@/components/Header'
import MainDate from '@/components/MainDate'
import Green from '@/components/Green'
import Footer from '@/components/Footer'
import { useSearchParams } from 'react-router-dom'


export default function Home() {
    const [params] = useSearchParams()

    return (
        <>
            <Header timeData={params.get('value')} />
            <MainDate />
            <Green />
            <Footer />
        </>
    )
}
