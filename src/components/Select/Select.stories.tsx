import {action} from '@storybook/addon-actions'
import {Select} from './Select';
import {useState} from 'react';

export default {
    component: Select
}


const onChangeHandler = action('onChange')

export const CustomSelect = () => {
    return <Select items={[{title: 'none', id: 0},
        {title: 'Minsk', id: 1},
        {title: 'Moscow', id: 2},
        {title: 'Kiev', id: 3}]}/>
}

/*
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Opened Accordion'}
                      collapsed={collapsed}
                      setCollapsed={() => {
                          setCollapsed(!collapsed)
                      }}
                      onClick={(value) => {alert(`user ${value}`)}}
                      items={[{title: 'Nikita', value: 1},
                          {title: 'Ilya', value: 2},
                          {title: 'Daria', value: 3}]}
    />
}*/