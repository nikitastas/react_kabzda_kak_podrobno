import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';

function App() {
    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Users'} collapsed={true}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <OnOff on={true}/>
            <OnOff on={false}/>
            <OnOff on={true}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering');
    return <h1>{props.title}</h1>
}

export default App;
