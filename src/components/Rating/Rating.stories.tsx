import type {Meta, StoryObj} from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {Rating, RatingValueType} from './Rating';
import {useState} from 'react';

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

export const FourthStory: Story = {
    args: {
        value: 1,
        onClick: () => {}
    }
}

export const EmptyRating = () => <Rating value={0} onClick={x => x} />

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return <Rating value={rating} onClick={setRating} />
}
