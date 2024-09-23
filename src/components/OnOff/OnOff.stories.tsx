import type {Meta, StoryObj} from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {OnOff} from './OnOff';
import {useState} from 'react';

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;

export default {
    component: OnOff
}

type Story = StoryObj<typeof OnOff>

export const FirstStory: Story = {
    args: {
        on: true,
        setOn: () => {}
    }
}

export const SecondStory: Story = {
    args: {
        on: false,
        setOn: () => {}
    }
}
