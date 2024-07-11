import {useState} from 'react';

type AccordionPropsType = {
    titleValue: string;
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    const [collapsed, setCollapsed] = useState(true)

    const setCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return <div>
        <AccordionTitle title={props.titleValue} setCollapsedHandler={setCollapsedHandler}/>
        {!collapsed && <AccordionBody/>}
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