type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: () => void
    items?: ItemType[]
    onClick: (value: any) => void
}

function Accordion({titleValue, collapsed, setCollapsed, items, onClick}: AccordionPropsType) {
    console.log('Accordion rendering');
    return <div>
        <AccordionTitle title={titleValue} setCollapsed={setCollapsed}/>
        {!collapsed && <AccordionBody items={items} onClick={onClick} />}
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

type AccordionBodyPropsType = {
    items?: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody({items, onClick}: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return <ul>
        {items?.map((i, index) => <li onClick={() => {onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}

export default Accordion;