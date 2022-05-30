import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button.jsx';

// DRY: Don't repeat yourself
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const renderButtons = (onClickNumber) => {
    // <Button text="1" clickHandler={onClickNumber}/>
    return numbers.map(button => {
        return <Button key={button} text={button.toString()} clickHandler={onClickNumber}/>
    })
}

const Numbers = ({onClickNumber}) => {
    return (
        <section className="numbers">
            {renderButtons(onClickNumber)}
        </section>
    )
}

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;