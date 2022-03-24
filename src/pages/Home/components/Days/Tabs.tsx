import classNames from 'classnames';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useCustomSelector } from '../../../../HOOKS/store';
import { fetchMonthWeather } from '../../../../store/thunks/fetchMonthWeather';




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
    { value: 'На месяц' },
    { value: 'На 10 дней' },
  ]

  const handleChange = (index: number) => {
    setActiveTab(index);
    console.log('hey');

    dispatch(fetchMonthWeather(currentLat, currentLon))
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