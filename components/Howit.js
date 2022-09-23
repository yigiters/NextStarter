import React from 'react'
import Styles from '../styles/Home.module.css'

const Howit = () => {
    return (
        <section className={`bg-black text-white ${Styles.sectionSize}`} id={'howitworks'}>
            <div>
                <h2 className={`${Styles.secondaryTitle} ${Styles.bgUnderline2} bg-100%`}>Nasıl çalışır</h2>
            </div>
            <div className="flex flex-col md:flex-row px-6 lg:px-48">
                <div className="flex-1 mx-8 flex flex-col items-center my-4">
                    <div className={`border-2 rounded-full ${Styles.bgSecondary} text-black h-12 w-12 flex justify-center items-center mb-3`}>
                        1
                    </div>
                    <h3 className={`${Styles.montserrat} font-medium text-xl mb-2`}>Projelendirme</h3>
                    <p className={`text-center ${Styles.montserrat}`}>
                        Doğru belirlenmiş strateji, analizler ve hedeflerin oluşturduğu bir proje
                        başarılı bir web tasarımının en önemli süreçlerinden birini oluşturur.
                    </p>
                </div>
                <div className="flex-1 mx-8 flex flex-col items-center my-4">
                    <div className={`border-2 rounded-full ${Styles.bgSecondary} text-black h-12 w-12 flex justify-center items-center mb-3`}>
                        2
                    </div>
                    <h3 className={`${Styles.montserrat} font-medium text-xl mb-2`}>Teknoloji Seçimi</h3>
                    <p className={`text-center ${Styles.montserrat}`}>
                        Web sitesinin projelendirilmesinden sonra projenin hazırlanacağı
                        platform ve teknolojilere karar verilir. Web sitesi en güncel teknolojilerle
                        ve ihtiyaçları karşılayacak şekilde hazırlanır.
                    </p>
                </div>
                <div className="flex-1 mx-8 flex flex-col items-center my-4">
                    <div className={`border-2 rounded-full ${Styles.bgSecondary} text-black h-12 w-12 flex justify-center items-center mb-3`}>
                        3
                    </div>
                    <h3 className={`${Styles.montserrat} font-medium text-xl mb-2`}>Yayınlanma</h3>
                    <p className={`text-center ${Styles.montserrat}`}>
                        Yayın öncesi testleri tamamlanan ve son kontrolleri yapılan websitesi uygun ve
                        performanslı bir hostingle birleştirilerek yayın hayatına başlamış olur.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Howit