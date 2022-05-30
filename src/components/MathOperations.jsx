import React from "react";
import PropTypes from 'prop-types';
import Button from './Button/Button.jsx';

const MathOperations = ({onClickOperation, onClickEqual}) => {
    return (
      <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation} />
        <Button text="-" clickHandler={onClickOperation} />
        <Button text="*" clickHandler={onClickOperation} />
        <Button text="/" clickHandler={onClickOperation} />
        <Button text="=" clickHandler={onClickEqual} />
      </section>
    );
}

MathOperations.propTypes = {
    onClickEqual: PropTypes.func.isRequired,
    onClickOperation: PropTypes.func.isRequired
}


export default MathOperations