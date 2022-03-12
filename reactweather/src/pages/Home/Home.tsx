import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useCustomSelector } from '../../HOOKS/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

type Props = {}

const Home = (props: Props) => {

  const dispatch = useDispatch();

  const { weather, isLoading, response } = useCustomSelector(selectCurrentWeatherData);  

  useEffect(() => {
    dispatch(fetchCurrentWeather('Sankt-Peterburg'))
  }, [])

  return (
    <div className={s.home}>
        <div className={s.wrapper}>
            <ThisDay weather={weather} />    
            <ThisDayInfo weather={weather} />
        </div>
        <Days />
    </div>
  )
}

export default Home;