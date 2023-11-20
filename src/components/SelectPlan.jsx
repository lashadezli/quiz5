import React, { useState } from 'react';
import classes from '../modules/SelectPlan.module.scss';
import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg';

const SelectPlan = (props) => {
  const { onNext, onBack } = props;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption) {
      handleOptionSelect('arcade'); 
    } else {
      onNext();
    }
  };

  return (
    <div className={classes['select-plan-wrapper']}>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className={classes['options-wrapper']}>
        <div
          className={`${classes['option']} ${selectedOption === 'arcade' ? classes['selected'] : ''}`}
          onClick={() => handleOptionSelect('arcade')}
        >
          <figure>
            <img src={Arcade} alt="" />
          </figure>
          <h3>Arcade</h3>
          <span>$9/mo</span>
        </div>
        <div
          className={`${classes['option']} ${selectedOption === 'advanced' ? classes['selected'] : ''}`}
          onClick={() => handleOptionSelect('advanced')}
        >
          <figure>
            <img src={Advanced} alt="" />
          </figure>
          <h3>Advanced</h3>
          <span>$12/mo</span>
        </div>
        <div
          className={`${classes['option']} ${selectedOption === 'pro' ? classes['selected'] : ''}`}
          onClick={() => handleOptionSelect('pro')}
        >
          <figure>
            <img src={Pro} alt="" />
          </figure>
          <h3>Pro</h3>
          <span>$15/mo</span>
        </div>
      </div>
      <div className={classes['actions-wrapper']}>
        <button className={classes['back']} onClick={onBack}>
          Go Back
        </button>
        <button className={classes['next']} onClick={handleNext} disabled={!selectedOption}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectPlan;
