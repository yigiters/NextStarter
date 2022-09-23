import React from 'react'
import Styles from '../styles/Home.module.css'

const Features = () => {
    return (
        <section className={`${Styles.sectionSize} ${Styles.bgSecondary}`} id="features">
            <div>
                <h2 className={`${Styles.secondaryTitle} ${Styles.bgUnderline3} bg-100%`}>Özellikler</h2>
            </div>
            <div className="md:grid md:grid-cols-2 md:grid-rows-2 px-6 lg:px-48">

                <div className="flex items-start font-montserrat my-6 mr-10">
                    <img src='/Heart.svg' alt='' className="h-7 mr-4" />
                    <div>
                        <h3 className="font-semibold text-2xl">Doğru Hosting Seçimi #1</h3>
                        <p>
                            Web sitesinin düzgün kodlanmış olmasının yanı sıra kullanıcılara hızlı
                            ve gecikmesiz hizmet verebilmesi için bulunduğunuz ya da hizmet
                            verdiğiniz ülkede hostingi almanız gerekmektedir. Google ve akıllı
                            arama motoru optimizasyonu sunucunuzun web sitenizin
                            hedef kitlesi ile aynı ülkede bulunmasını oldukça önemlidir.
                        </p>
                    </div>
                </div>

                <div className={`flex items-start ${Styles.montserrat} my-6 mr-10`}>
                    <img src='/Heart.svg' alt='' className="h-7 mr-4" />
                    <div>
                        <h3 className="font-semibold text-2xl">Organik İçerik #2</h3>
                        <p>
                            Web sitesi için organik içerik sitenin görselliği kadar önemli detaylardan biridir.
                            Mükemmel bir site tasarımı yapmak, kullanışlı bir arayüz oluşturmak ziyaretçileri sitede
                            bir süre tutabilse de içeriğin kaliteli ve okunabilir olmadığı durumlarda ziyaretçiler sitede
                            zaman geçirmeyecektir.
                        </p>
                    </div>
                </div>

                <div className={`flex items-start ${Styles.montserrat} my-6 mr-10`}>
                    <img src='/Heart.svg' alt='' className="h-7 mr-4" />
                    <div>
                        <h3 className="font-semibold text-2xl">Görsellik #3</h3>
                        <p>
                            Web sitesinin tasarımı ilk izlenim açısından oldukça önemlidir.
                            Bazı siteler ne kadar kaliteli içeriğe sahip olursa olsun, tasarımı yetersizse ya da eski duruyorsa
                            kullanıcı bu sitede vakit geçirmek istemeyecektir. Özenli şekilde yapılmış web siteler,
                            kullanıcıların sitede kalmasını sağlar.
                        </p>
                    </div>
                </div>

                <div className={`flex items-start ${Styles.montserrat} my-6 mr-10`}>
                    <img src='/Heart.svg' alt='' className="h-7 mr-4" />
                    <div>
                        <h3 className="font-semibold text-2xl">Kolay Kullanım #4</h3>
                        <p>
                            Web sitesinin arayüzü mutlaka kolay kullanım için tasarlanmış olmalıdır. Sitenin kullanılabilirliğini
                            etkileyen en önemli detay elbette hız olmaktadır. Şayet kullanıcı sitenizi bir ya da iki kez denedikten
                            sonra zorluk yaşıyor ya da aradığınız bulamıyorsa, üçüncü sefer sitenizi kullanmayacaktır.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Features