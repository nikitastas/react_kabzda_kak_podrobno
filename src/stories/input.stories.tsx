import type {Meta, StoryObj} from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {useRef, useState} from 'react';
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
    return <input />
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(event) => {
        setValue(event.currentTarget.value)
    }
    }/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef} /><button onClick={save}>Save</button> - actual value: {value}</>
}

export const ControlledInputWithFiexedValue = () => {
    return <input value={'it-incubator.by'} />
}