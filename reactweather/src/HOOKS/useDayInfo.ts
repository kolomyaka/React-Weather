import { selectCurrentPressure } from './../store/selectors';
import { selectCurrentWindDirection } from "../store/selectors";
import { useCustomSelector } from "./store";

export const useWindDirection = (deg: number) => {

  if (deg >= 337.6 && deg <= 22.5) {
    return 'север';
  } else if (deg >= 22.6 && deg <= 67.5) {
    return 'северо-восток';
  } else if (deg >= 67.6 && deg <= 112.5) {
    return 'восточный';
  } else if (deg >= 112.6 && deg <= 157.5) {
    return 'юго-восточный';
  } else if (deg >= 157.6 && deg <= 202.5) {
    return 'юг';
  } else if (deg >= 202.6 && deg <= 247.5) {
    return 'юго-западный';
  } else if (deg >= 247.6 && deg <= 292.5) {
    return 'западный';
  } else {
    return 'северо-западный'
  }
}


// Функция для перевода давления из Па в мм ртутного столба
export const usePressure = (pressure: number) => {

  let pressureToView = Math.round(pressure * 0.00750063755419211 * 1000 / 10);

  if (pressureToView > 763) {
    return pressureToView + 'мм ртутного столба - повышенное';
  } else if (pressureToView >= 757 && pressureToView <= 763) {
    return pressureToView + 'мм ртутного столба - нормальное';
  } else {
    return pressureToView + 'мм ртутного столба - пониженное'
  }

}