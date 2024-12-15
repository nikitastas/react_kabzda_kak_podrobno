import React, {useEffect, useState} from 'react';

const get2DigitString = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TICK')
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <div>
        Time:
        <span>{get2DigitString(time.getMinutes())}</span>
        :
        <span>{get2DigitString(time.getMinutes())}</span>
        :
        <span>{get2DigitString(time.getSeconds())}</span>
    </div>
}