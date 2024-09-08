type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: () => void
}

function Accordion({titleValue, collapsed, setCollapsed}: AccordionPropsType) {
    console.log('Accordion rendering');
    return <div>
        <AccordionTitle title={titleValue} setCollapsed={setCollapsed}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle({title, setCollapsed}: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={setCollapsed}>-- {title} --</h3>
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

export default Accordion;