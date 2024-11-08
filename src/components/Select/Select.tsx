import {useState} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    id: number
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select({value, onChange, items}: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        onChange(value);
        toggleItems();
    }

    return (
        <div className={styles.select}>
            <span className={styles.main} onClick={toggleItems}>{items[value] && items[value].title}</span>
            {
                active && <div className={styles.items}>
                    {items.map(i => <div onMouseEnter={() => setHoveredElementValue(i.id)}
                        className={styles.item + ' ' + (i.id === hoveredElementValue ? styles.selected : '')}
                        key={i.id} onClick={() => onItemClick(i.id)}
                        onBlur={() => setActive(false)}>{i.title}</div>)}
                </div>
            }

        </div>
    )
}