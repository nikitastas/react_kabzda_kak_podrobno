import React, {useEffect, useState} from 'react';
import s from './AnalogClock.module.css'


export const AnalogClock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timerId); // Очистка интервала при размонтировании
    }, []);

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours() % 12; // Приведение к 12-часовому формату

    const secondStyle = {
        transform: `rotate(${seconds * 6}deg)`, // 360° / 60 секунд = 6°
    };
    const minuteStyle = {
        transform: `rotate(${minutes * 6 + seconds * 0.1}deg)`, // 360° / 60 минут = 6° + учитываем секунды
    };
    const hourStyle = {
        transform: `rotate(${hours * 30 + minutes * 0.5}deg)`, // 360° / 12 часов = 30° + учитываем минуты
    };

    return (
        <div className={s.clock}>
            <div className={`${s.hand} ${s.hour}`} style={hourStyle}></div>
            <div className={`${s.hand} ${s.minute}`} style={minuteStyle}></div>
            <div className={`${s.hand} ${s.second}`} style={secondStyle}></div>
        </div>
    )
}