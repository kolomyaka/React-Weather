import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useCustomSelector } from '../../HOOKS/store';
import { selectCurrentWeatherData, selectWeeklyWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { fetchWeeklyWeather } from '../../store/thunks/fetchWeeklyWeather';
import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

type Props = {}

const Home = (props: Props) => {

  const dispatch = useDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData);  

  const { weeklyWeather } = useCustomSelector(selectWeeklyWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather('Sankt-Peterburg'));
    dispatch(fetchWeeklyWeather(59.8944, 30.2642));
  }, [])

  return (
    <div className={s.home}>
        <div className={s.wrapper}>
            <ThisDay weather={weather} />    
            <ThisDayInfo weather={weather} />
        </div>
        <Days weeklyWeather={weeklyWeather} weather={weather} />
    </div>
  )
}

export default Home;