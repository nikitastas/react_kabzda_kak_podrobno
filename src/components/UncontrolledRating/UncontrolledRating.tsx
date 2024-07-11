import {useState} from 'react';

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering');

    const [value, setValue] = useState(0)

    return (
        <div>
            <Star id={1} selected={value >= 1} setValue={setValue}/>
            <Star id={2} selected={value >= 2} setValue={setValue}/>
            <Star id={3} selected={value >= 3} setValue={setValue}/>
            <Star id={4} selected={value >= 4} setValue={setValue}/>
            <Star id={5} selected={value >= 5} setValue={setValue}/>
        </div>
    )
}

type StarPropsType = {
    id: number
    selected: boolean
    setValue: (newValue: number) => void
}

function Star({selected, id, setValue}: StarPropsType) {
    console.log('Star rendering');

    return <span onClick={() => setValue(id)}>{selected ? <b>star </b> : 'star ' }</span>

}