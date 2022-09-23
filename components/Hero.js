import { useRouter } from 'next/router'
import React from 'react'
import Styles from '../styles/Home.module.css'

const Hero = () => {
    const router = useRouter()
    return (
        <section
            className={`pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 ${Styles.bgSecondary}`} id="#start">
            <div className="md:flex-1 md:mr-10">
                <h1 className={`${Styles.ptSerif} text-5xl font-bold mb-7`}>
                    İnternette var olmanın tam
                    <br /><span className={`${Styles.bgUnderline1} bg-left-bottom bg-no-repeat pb-2 bg-100%`}>
                        zamanı!
                    </span>
                </h1>
                <p className={`${Styles.ptSerif} font-normal mb-7`}>
                    Günümüzde birçok şeyin taşınabilir olması ile beraber artık insanlar telefon,
                    tablet, bilgisayar ve diğer internet bağlantısı olan cihazlar yardımı ile aralıksız
                    olarak internette gezinmekte ve yaşamlarının hemen hemen her anında internet ile
                    vakit harcamaktadır.
                </p>
                <div className="font-montserrat">
                    <button onClick={() => router.push("mailto:info@yigitersalman.com.tr")} className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
                        Detaylı Bilgi
                    </button>
                </div>
            </div>
            <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
                <div className="relative">
                    <img src='/Highlight1.svg' alt="" className="absolute -top-16 -left-10" />
                </div>
                <img src='/MacBook Pro.png' alt="Macbook" />
                <div className="relative">
                    <img src='/Highlight2.svg' alt="" className="absolute -bottom-10 -right-6" />
                </div>
            </div>
        </section>
    )
}

export default Hero