import React from 'react'
import { useState } from 'react';

const Content = () => {

    const [name1, setName1] = useState("Earn");

    function handleNameChange1() {
        const names = ["Earns", "Grows", "Gives"];
        const int = Math.floor(Math.random() * 3);
        setName1(names[int])
    }

    function handleNameChange() {
        const names = ["Earn", "Grow", "Give"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    function namee() {
        return console.log("visit janushankan.com")
    }

    const [count, setCount] = useState(99);
    const [name, setName] = useState(() => namee());

    function decrementFunction() {
        // setCount(count - 1)
        setCount((prevCount) => { return prevCount - 1 })
    }

    function incrementFunction() {
        setCount((prevCount) => { return prevCount + 1 })
    }

    const handleClick = () => {
        console.log('Thanks for the support!');
    }

    const handleClick2 = (name) => {
        console.log(`Thanks for the support ${name}`);
    }

    const handleClick3 = (e) => {
        console.log(e); //SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
        console.log(e.target);  //<button> Subscribe </button>
        console.log(e.target.innerText);    //Subscribe
    }

    return (
        <main>
            <p onDoubleClick={() => handleClick2('Janu')}>Let's {handleNameChange()} Money.</p>
            <button onClick={handleClick}> Subscribe </button>
            <button onClick={() => handleClick2('Janus')}> Subscribe </button>
            <button onClick={(e) => handleClick3(e)}> Subscribe </button>
            <button onClick={decrementFunction}>-</button>
            <span>{count}</span>
            <button onClick={incrementFunction}>+</button>
            <p> Let's {name1} Money </p>
            <button onClick={handleNameChange1}> Subscribe </button>
        </main>
    )
}

export default Content