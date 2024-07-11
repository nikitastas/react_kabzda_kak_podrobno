export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating({value, onClick}: RatingPropsType) {
    console.log('Rating rendering');
    return (
        <div>
            <Star value={1} selected={value >= 1} onClick={onClick}/>
            <Star value={2} selected={value >= 2} onClick={onClick}/>
            <Star value={3} selected={value >= 3} onClick={onClick}/>
            <Star value={4} selected={value >= 4} onClick={onClick}/>
            <Star value={5} selected={value >= 5} onClick={onClick}/>
        </div>
    )
}

type StarPropsType = {
    value: RatingValueType
    selected: boolean
    onClick: (value: RatingValueType) => void
}

function Star({selected, value, onClick}: StarPropsType) {
    console.log('Star rendering')

    return <span onClick={() => onClick(value)}>{selected ? <b>star </b> : 'star '}</span>

}