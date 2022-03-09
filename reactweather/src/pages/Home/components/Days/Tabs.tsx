import React from 'react'




import s from './Days.module.scss';


type Props = {}

export type Tabs = { 
  value: string
}


const Tabs = (props: Props) => {


  const tabs: Array<Tabs> = [
    {value : 'На неделю'},
    {value : 'На месяц'},
    {value : 'На 10 дней'},
  ]

  return (
    <section className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {
          tabs.map((tab) => (
            <div className={s.tab} key={tab.value}>
              {tab.value}
            </div>
          ))
        }
      </div>
      <div className={s.cancel}>Отменить</div>
    </section>
  )
}

export default Tabs; 