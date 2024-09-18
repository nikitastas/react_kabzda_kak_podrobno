import type {Meta, StoryObj} from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {UncontrolledOnOff} from './UncontrolledOnOff';

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;

export default {
    component: UncontrolledOnOff
}

type Story = StoryObj<typeof UncontrolledOnOff>

export const FirstStory: Story = {
    args: {

    }
}
