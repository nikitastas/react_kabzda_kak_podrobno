import {useState} from 'react';

type ItemType = {
    title: string
    id: number
}

type SelectPropsType = {
    value?: any
    onChange?: (value: any) => void
    items: ItemType[]
}

export function Select({value, onChange, items}: SelectPropsType) {
    const [editMode, setEditMode] = useState(false)
    const [selectedItem, setSelectedItem] = useState(0)

    const onItemsClickHandler = (id: number) => {
        setSelectedItem(id)
    }

    const onSelectedItemHandler = () => {
        setEditMode(!editMode)
    }

    return (
        <div>
            <div onClick={onSelectedItemHandler}>{items[selectedItem].title}</div>
            {editMode && items.map(i => <div key={i.id} onClick={() => onItemsClickHandler(i.id)} onBlur={() => setEditMode(false)}>{i.title}</div>)}
        </div>
    )
}