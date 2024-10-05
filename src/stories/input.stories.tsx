import type {Meta, StoryObj} from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {useState} from 'react';
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
