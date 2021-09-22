import React from 'react'
import MailTo from '../../components/contact/MailTo'
import RedesSociales from '../../components/contact/RedesSociales'
import Header from '../../components/estructura/Header'

const Index = () => {
    return (
        <>
            <Header title={"Contáctenos"} />
            <MailTo />
            <RedesSociales />
        </>
    )
}

export default Index
