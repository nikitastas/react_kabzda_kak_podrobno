import {useState, KeyboardEvent} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    id: number
}

type SelectPropsType = {
    value?: any
    setSelectedItem: (value: number) => void
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select({value, setSelectedItem, onChange, items}: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        onChange(value);
        toggleItems();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key)
        /*if (e.key === 'w' || e.key === 'ArrowUp') {
            if (hoveredElementValue === 0) {
                setHoveredElementValue(items.length - 1)
            } else {
                setHoveredElementValue(hoveredElementValue - 1)
            }
        } else if (e.key === 's' || e.key === 'ArrowDown') {
            if (hoveredElementValue === items.length - 1) {
                setHoveredElementValue(0)
            } else {
                setHoveredElementValue(hoveredElementValue + 1)
            }
        }*/
        if (e.key === 'w' || e.key === 'ArrowUp') {
            if (hoveredElementValue !== 0) {
                setHoveredElementValue(hoveredElementValue - 1)
                setSelectedItem(hoveredElementValue - 1)
            }
        } else if (e.key === 's' || e.key === 'ArrowDown') {
            if (hoveredElementValue !== items.length - 1) {
                setHoveredElementValue(hoveredElementValue + 1)
                setSelectedItem(hoveredElementValue + 1)
            }
        } else if (e.key === 'Escape' || e.key === 'Enter') {
            setActive(false)
        }

    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
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