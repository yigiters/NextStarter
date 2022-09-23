import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Styles from '../styles/Home.module.css'

const Navigation = () => {
    const router = useRouter()
    return (
        <section>
            <nav className={`fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center ${Styles.bgSecondary} z-10`}>
                <div className="flex items-center">
                    <img src='logo1.png' alt="Logo" className="h-14" />
                </div>
                <ul className={`${Styles.montserrat} items-center hidden md:flex`}>
                    <li className={`${Styles.growingUnderline} mx-3`}>
                        <button onClick={() => router.push("/")}>Başlangıç</button>
                    </li>
                    <li className={`${Styles.growingUnderline} mx-3`}>
                        <button onClick={() => router.push("#howitworks")}>
                            Nasıl çalışır
                        </button>
                    </li>
                    <li className={`${Styles.growingUnderline} mx-3`}>
                        <button onClick={() => router.push("#features")}>Özellikler</button>
                    </li>
                    <li className={`${Styles.growingUnderline} mx-3`}>
                        <button onClick={() => router.push("#services")}>Hizmetler</button>
                    </li>
                    <li className={`${Styles.growingUnderline} mx-3`}>
                        <button onClick={() => router.push("#faq")}>SSS</button>
                    </li>
                </ul>
                <div className={`${Styles.montserrat} hidden md:block`}>
                    <button onClick={() => router.push("mailto:info@yigitersalman.com.tr")} className="py-2 px-4 text-white bg-black rounded-3xl mt-2">
                        İletişim
                    </button>
                </div>
                <div id="showMenu" className="md:hidden mt-4">
                    <img src='/Menu.svg' alt="Menu icon" />
                </div>
            </nav>
            <div id='mobileNav' className={`hidden px-4 py-6 fixed top-0 left-0 h-full w-full ${Styles.bgSecondary} z-20 animate-fade-in-down`}>
                <div id="hideMenu" className="flex justify-end">
                    <img src='/Cross.svg' alt="" className="h-16 w-16" />
                </div>
                <ul className={`${Styles.montserrat} flex flex-col mx-8 my-24 items-center text-3xl`}>
                    <li className={`${Styles.growingUnderline} mx-3`}>
                        <button onClick={() => router.push("/")}>Başlangıç</button>
                    </li>
                    <li className={`${Styles.growingUnderline} mx-3`}>
                        <button onClick={() => router.push("#howitworks")}>
                            Nasıl çalışır
                        </button>
                    </li>
                    <li className={`${Styles.growingUnderline} mx-3`}>
                        <button onClick={() => router.push("#features")}>Özellikler</button>
                    </li>
                    <li className={`${Styles.growingUnderline} mx-3`}>
                        <button onClick={() => router.push("#services")}>Hizmetler</button>
                    </li>
                    <li className={`${Styles.growingUnderline} mx-3`}>
                        <button onClick={() => router.push("#faq")}>SSS</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Navigation