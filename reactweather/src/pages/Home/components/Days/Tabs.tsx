import classNames from 'classnames';
import { useState } from 'react'




import s from './Days.module.scss';


type Props = {}

export type Tabs = { 
  value: string
}


const Tabs = (props: Props) => {


  const [activeTab, setActiveTab] = useState(0);

  const tabs: Array<Tabs> = [
    {value : 'На неделю'},
    {value : 'На месяц'},
    {value : 'На 10 дней'},
  ]

  const handleChange = (index: number) => {
    setActiveTab(index);
  }

  return (
    <section className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {
          tabs.map((tab, index) => (
            <div className={s.tab + ' ' + classNames({
              active : activeTab === index})} key={tab.value} onClick={() => handleChange(index)}>
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