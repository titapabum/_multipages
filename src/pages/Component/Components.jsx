import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Components.css';
import Counter from './Counter/Counter.jsx';
import Timer from './Timer/Timer';
import Add from './Add/Add';
import Temperatures from './Temperatures/Temperatures';
import { useRef } from 'react';

function Component() {
    const inputRef = useRef(null); // สร้าง useRef สำหรับ input

    return ( 
        <div className='component-container'>
            <div className='title'>
                <h1>REACT COMPONENTS</h1>
            </div>
            <div className='header'>
                <div className='left-column'>
                    <div className='counter-app'><Counter /></div>
                    <div className='timer-app'><Timer/></div>
                </div>
                <div className='add-app'><Add aValue={10} bValue={20} /></div>
            </div>
            <div className='temperatures-app'><Temperatures /></div>
            <div className='Sname'>
                <h2>นางสาวฐิตาภา บำรุงนา รหัส 66070075</h2>
            </div>
        </div>
    );
}

export default Component;
