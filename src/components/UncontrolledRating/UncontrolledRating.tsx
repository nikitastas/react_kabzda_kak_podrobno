import {useState} from 'react';

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering');

    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value >= 1} setValue={() => setValue(1)}/>
            <Star selected={value >= 2} setValue={() => setValue(2)}/>
            <Star selected={value >= 3} setValue={() => setValue(3)}/>
            <Star selected={value >= 4} setValue={() => setValue(4)}/>
            <Star selected={value >= 5} setValue={() => setValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star({selected, setValue}: StarPropsType) {
    console.log('Star rendering');

    return <span onClick={setValue}>{selected ? <b>star </b> : 'star ' }</span>

}