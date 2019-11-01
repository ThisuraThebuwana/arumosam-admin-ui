import React, {Component} from 'react';
import './styles.css';
import Button from "react-bootstrap/Button";
import AddNewItem from "./AddNewItem";

class AppBody extends Component {
    render() {
        return (
            <div className='root'>
                <div className={'appOptions'}>
                    <Button className={'optBtn'}>option1</Button>
                    <Button className={'optBtn'}>option2</Button>
                    <Button className={'optBtn'}>option3</Button>
                    <Button className={'optBtn'}>option4</Button>
                </div>
                <div className={'appBody'}><AddNewItem/></div>
            </div>
        );
    }
}

export default AppBody;