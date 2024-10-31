import {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
    titleValue: string;
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const setCollapsedHandler = () => {
        //setCollapsed(!collapsed)
        dispatch({type: TOGGLE_COLLAPSED})
    }

    return <div>
        <AccordionTitle title={props.titleValue} setCollapsedHandler={setCollapsedHandler}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    setCollapsedHandler: () => void
}

function AccordionTitle({title, setCollapsedHandler}: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={setCollapsedHandler}>{title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}