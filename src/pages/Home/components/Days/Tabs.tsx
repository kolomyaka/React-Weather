import classNames from 'classnames';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchTenDaysWeather } from '../../../../store/thunks/fetchTenDaysWeather';




import s from './Days.module.scss';


type Props = {}

export type TabsType = {
  value: string
}


const Tabs = (props: Props) => {

  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch();

  const tabsItem: Array<TabsType> = [
    { value: 'На неделю' },
    // { value: 'На 3 дня' },
  ]

  const handleChange = (index: number) => {
    setActiveTab(index);    
    if (index === 1) {
      dispatch(fetchTenDaysWeather('Saint-Petersburg'));
    }
  }

  return (
    <section className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {
          tabsItem.map((tab, index) => (
            <div className={s.tab + ' ' + classNames({
              active: activeTab === index
            })} key={tab.value} onClick={() => handleChange(index)}>
              {tab.value}
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Tabs; 