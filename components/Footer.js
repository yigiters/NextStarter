import React from 'react'
import Styles from '../styles/Home.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <section className={`bg-black ${Styles.sectionSize}`}>
            <div className="mb-4">
                <img src='logo.png' alt="Logo" className="h-24" />
            </div>
            <div className="flex mb-8">
                <Link href={"https://github.com/yigiters"}>
                    <a target={"__blank"}>
                        <img src='/Github.svg' alt="Facebook logo" className="mx-4" />
                    </a>
                </Link>
            </div>
            <div className={`text-white ${Styles.montserrat} text-sm`}>
                © 2019 YS. All rights reserved
            </div>
        </section>
    )
}

export default Footer