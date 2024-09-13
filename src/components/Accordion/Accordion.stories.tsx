import type {Meta, StoryObj} from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Accordion from './Accordion';
import {useState} from 'react';

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;

export default {
    component: Accordion
}

type Story = StoryObj<typeof Accordion>

export const FirstStory: Story = {
    args: {
        titleValue: 'hello',
        collapsed: true,
        setCollapsed: () => {}
    }
}

export const SecondStory: Story = {
    args: {
        titleValue: 'hello',
        collapsed: false,
        setCollapsed: () => {}
    }
}

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'}
                      collapsed={true}
                      setCollapsed={ onChangeHandler } />
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'}
                      collapsed={false}
                      setCollapsed={ () => {} } />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Opened Accordion'}
                      collapsed={collapsed}
                      setCollapsed={ () => {
                          setCollapsed(!collapsed)
                      } } />
}