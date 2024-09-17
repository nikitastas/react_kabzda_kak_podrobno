import type {Meta, StoryObj} from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {UncontrolledAccordion} from './UncontrolledAccordion';

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;

export default {
    component: UncontrolledAccordion
}

type Story = StoryObj<typeof UncontrolledAccordion>

export const FirstStory: Story = {
    args: {
        titleValue: 'Users'
    }
}
