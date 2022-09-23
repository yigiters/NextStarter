import { useRouter } from 'next/router'
import React from 'react'
import Styles from '../styles/Home.module.css'

const Services = () => {
    const router = useRouter()
    return (
        <section className={`${Styles.sectionSize} ${Styles.bgSecondary}`} id="services">
            <div>
                <h2 className={`${Styles.secondaryTitle} ${Styles.bgUnderline4} mb-0 bg-100%`}>Hizmetler</h2>
            </div>
            <div className="flex w-full flex-col md:flex-row lg:px-40">

                <div className={`flex-1 flex flex-col mx-6 shadow-2xl relative ${Styles.bgSecondary} rounded-2xl py-5 px-12 my-8 md:top-24`}>
                    <h3 className={`${Styles.ptSerif} font-normal text-2xl mb-4 text-center`}>
                        Web Tasarım
                    </h3>
                    <div className={`${Styles.montserrat} font-bold text-2xl mb-4`}>
                        <hr className='my-8'></hr>
                    </div>
                    <div className="flex">
                        <img src='/CheckedBox.svg' alt="" className="mr-1" />
                        <p>E-Ticaret #1</p>
                    </div>
                    <div className="flex">
                        <img src='/CheckedBox.svg' alt="" className="mr-1" />
                        <p>Kurumsal #2</p>
                    </div>
                    <div className="flex">
                        <img src='/CheckedBox.svg' alt="" className="mr-1" />
                        <p>Kişisel #3</p>
                    </div>

                    <button onClick={() => router.push("mailto:info@yigitersalman.com.tr")} className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
                        Detaylı Bilgi
                    </button>
                </div>

                <div className={`flex-1 flex flex-col mx-6 shadow-2xl relative ${Styles.bgSecondary} rounded-2xl py-5 px-8 my-8 md:top-12`}>
                    <h3 className={`${Styles.ptSerif} font-normal text-2xl mb-4 text-center`}>
                        Veri Merkezi Hizmetleri
                    </h3>
                    <div className={`${Styles.montserrat} font-bold text-2xl mb-4`}>
                        <hr className='my-8'></hr>
                    </div>

                    <div className="flex">
                        <img src='/CheckedBox.svg' alt="" className="mr-1" />
                        <p>Alan Adı #1</p>
                    </div>
                    <div className="flex">
                        <img src='/CheckedBox.svg' alt="" className="mr-1" />
                        <p>Web Hosting #2</p>
                    </div>
                    <div className="flex">
                        <img src='/CheckedBox.svg' alt="" className="mr-1" />
                        <p>Sunucu Barındırma #3</p>
                    </div>

                    <button onClick={() => router.push("mailto:info@yigitersalman.com.tr")} className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
                        Detaylı Bilgi
                    </button>
                </div>

                <div className={`flex-1 flex flex-col mx-6 shadow-2xl relative ${Styles.bgSecondary} rounded-2xl py-5 px-8 my-8 md:top-24`}>
                    <h3 className={`${Styles.ptSerif} font-normal text-2xl mb-4`}>
                        Danışmanlık
                    </h3>
                    <div className={`${Styles.montserrat} font-bold text-2xl mb-4`}>
                        <hr className='my-8'></hr>
                    </div>

                    <div className="flex">
                        <img src='/CheckedBox.svg' alt="" className="mr-1" />
                        <p>Güvenlik #1</p>
                    </div>
                    <div className="flex">
                        <img src='/CheckedBox.svg' alt="" className="mr-1" />
                        <p>Lisans #2</p>
                    </div>
                    <div className="flex">
                        <img src='/CheckedBox.svg' alt="" className="mr-1" />
                        <p>Optimizasyon #3</p>
                    </div>

                    <button onClick={() => router.push("mailto:info@yigitersalman.com.tr")} className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
                        Detaylı Bilgi
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Services