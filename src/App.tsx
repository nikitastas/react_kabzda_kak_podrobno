import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {useState} from 'react';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className={'App'}>
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
            {/*<OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
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
