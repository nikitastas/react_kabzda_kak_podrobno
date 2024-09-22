import type {Meta, StoryObj} from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {Rating} from './Rating';

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;

export default {
    component: Rating
}

type Story = StoryObj<typeof Rating>

export const FirstStory: Story = {
    args: {
        value: 4,
        onClick: () => {}
    }
}

export const SecondStory: Story = {
    args: {
        value: 3,
        onClick: () => {}
    }
}

export const ThirdStory: Story = {
    args: {
        value: 2,
        onClick: () => {}
    }
}
