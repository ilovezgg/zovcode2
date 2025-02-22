import React from 'react'
import z  from './WhyUs.module.css'
const WhyUs = () => {
  return (
    <div>
      <div className={z.whyUsMain}>
        <div className={z.backgroundBig}>
            <div>
            <div className={z.whyUsTitle}>
           Плюсы работы с нами
          </div>
          <div className={z.whyUsText}>
           Выбирая нас, вы выбираете удобство, скорость и надежность. Мы создаем те дома, в которых хочется жить, воплощая все ваши мечты об идеальном доме в реальность.
          </div>
            </div>
          
          <div className={z.containerForAll}>
          
          <div className={z.whyUsPanels}>
          <div className={z.panel1}>
           <div className={z.picPanel1}>

           </div>
           <div className={z.titlePanel1}>
            Контроль нашей работы на всех этапах
           </div>
           <div className={z.textPanel1}>
           Надежные срубы из бруса: строгий контроль качества на каждом этапе, от древесины до сборки.
           </div>
          </div>
          <div className={z.panel2}>
           <div className={z.picPanel2}>
            
           </div>
           <div className={z.titlePanel2}>
           Качественный материал
           </div>
           <div className={z.textPanel2}>
           Наши срубы строятся из качественного, экологичного бруса, обеспечивающего долговечность и минимальную усадку.
           </div>
          </div>
          <div className={z.panel3}>
           <div className={z.picPanel3}>
           
           </div>
           <div className={z.titlePanel3}>
           Финансовая прозрачность
           </div>
           <div className={z.textPanel3}>
           Финансовая прозрачность: детальная смета и отчетность на каждом этапе строительства. Полный контроль над бюджетом вашего проекта.
           </div>
          </div>
          <div className={z.panel4}>
           <div className={z.picPanel4}>
            
           </div>
           <div className={z.titlePanel4}>
           Полный пакет документов
           </div>
           <div className={z.textPanel4}>
           Мы предоставляем полный пакет документов: от проекта до разрешений, все для вашего спокойствия и уверенности.
           </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WhyUs
