import type {Meta, StoryObj} from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {UncontrolledRating} from './UncontrolledRating';

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;

export default {
    component: UncontrolledRating
}

type Story = StoryObj<typeof UncontrolledRating>

export const FirstStory: Story = {
    args: {

    }
}
