import classNames from 'classnames';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useCustomSelector } from '../../../../HOOKS/store';
import { fetchTenDaysWeather } from '../../../../store/thunks/fetchTenDaysWeather';




import s from './Days.module.scss';


type Props = {}

export type Tabs = {
  value: string
}


const Tabs = (props: Props) => {

  const { currentLat, currentLon } = useCustomSelector(state => state.currentWeatherSliceReducer)
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch();

  const tabs: Array<Tabs> = [
    { value: 'На неделю' },
    { value: 'На 10 дней' },
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
          tabs.map((tab, index) => (
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