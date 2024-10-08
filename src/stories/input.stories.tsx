import type {Meta, StoryObj} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {ChangeEvent, useRef, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;

export default {
    component: input
}

// type Story = StoryObj<typeof input>
//
// export const FirstStory: Story = {
//     args: {
//     }
// }
//
// const onChangeHandler = action('onChange')

export const UncontrolledInput = () => {
    return <input/>
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return <><input onChange={onChange}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>Save</button>
        - actual value: {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} checked={parentValue}  onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option id={'1'}>Minsk</option>
        <option id={'2'}>Moscow</option>
        <option id={'3'}>Kiev</option>
    </select>
}

export const ControlledInputWithFixedValue = () => {
    return <input value={'it-incubator.by'}/>
}