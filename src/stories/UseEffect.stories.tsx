import React, {useEffect, useState} from 'react'

export default {
    title: 'useEffect demo',
}

export const Example1 = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('Simple example')

    useEffect(() => {
        console.log('useEffect is starting on every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect is starting only on first render (componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect is starting on first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    const [time, setTime] = useState(new Date())
    console.log('setTimeout example')

    useEffect(() => {

        setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000)
    }, [])

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
        <div>
            Clock: {`${time.getHours()}:${time.getMinutes()}:${time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()}`}
        </div>
        {/*<button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
    </>
}