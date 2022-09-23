import React from 'react'
import Styles from '../styles/Home.module.css'

const Faq = () => {
    return (
        <section className={`${Styles.sectionSize} items-start pt-8 md:pt-36 bg-black text-white ${Styles.faq}`} id="faq" >
            <div>
                <h2 className={`${Styles.secondaryTitle} ${Styles.bgHighlight3} p-10 mb-0 bg-center bg-100%`}>
                    SSS
                </h2>
            </div>

            <div toggleelement="true" className="w-full py-4 px-2 lg:px-48 cursor-pointer">
                <div className="flex justify-between items-center">
                    <div question="true" className={`${Styles.montserrat} font-medium mr-auto`}>
                        Neden bir Web sitesine sahip olmalıyım?
                    </div>
                    <img src='/CaretRight.svg' alt="" className="transform transition-transform" />
                </div>
                <div answer="true" className={`${Styles.montserrat} text-sm font-extralight pb-8 hidden`}>
                    Neden web siteniz olmalı sorusunun en kısa cevabı, kişi ve kurumların büyük kitlelere tanıtılmasının
                    en kolay ve ekonomik yolu olmasıdır. Firmaların kendilerini tanıtabildikleri, ürün ve hizmetlerini
                    kolaylıkla sergileyebildikleri etkili bir iletişim kanalı olan web sitesi, büyük avantajlar sunmaktadır.
                </div>
                <hr className="w-full bg-white" />
            </div>


            <div toggleelement="true" className="w-full py-4 px-2 lg:px-48 cursor-pointer">
                <div className="flex justify-between items-center">
                    <div question="true" className={`${Styles.montserrat} font-medium mr-auto`}>
                        Neden E-Ticaret?
                    </div>
                    <img src='/CaretRight.svg' alt="" className="transform transition-transform" />
                </div>
                <div answer="true" className={`${Styles.montserrat} text-sm font-extralight pb-8 hidden`}>
                    Müşterinize sunduğu rahatlığın ve kolay erişimin yanı sıra, firmanınızın elde ettiği kâr ve geri dönüş
                    seviyelerinin yüksekliği gibi sebepler e-ticareti ön plana çıkaran özelliklerin başlıca nedenlerinden
                    sayılabilir. E-ticaret hacminin bu derece büyümesinden dolayı bu pazardan pay almak da önem arz ediyor.
                </div>
                <hr className="w-full bg-white" />
            </div>


            <div toggleelement="true" className="w-full py-4 px-2 lg:px-48 cursor-pointer">
                <div className="flex justify-between items-center">
                    <div question="true" className={`${Styles.montserrat} font-medium mr-auto`}>
                        Neden İyi Bir Alan Adı Seçmeliyim ?
                    </div>
                    <img src='/CaretRight.svg' alt="" className="transform transition-transform" />
                </div>
                <div answer="true" className={`${Styles.montserrat} text-sm font-extralight pb-8 hidden`}>
                    Kaliteli bir alan adına sahip olamak markanızı veya işletmenizi kurmanın en önemli adımlarından biri olarak nitelendirilir.
                    Ziyaretciler genellikle ilk temas olarak alan adınızı görür ve alan adı, web siteniz ile şireketiniz ve markanıza
                    dair kullanıcı deneyimleriniz etkiler. Özenle seçilmiş bir alan adı, kullanıcıların ilgisini daha
                    fazla çekerek sitenizin trafiğinin artırılmasına yardımcı olabilir.
                    Yeterli özen gösterilmeden seçilen bir alan adı ise tam tersi duruma yol açabilir.
                </div>
                <hr className="w-full bg-white" />
            </div>


        </section>
    )
}

export default Faq