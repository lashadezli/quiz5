import React from 'react';
import classes from '../modules/SelectPlan.module.scss'

const SelectPlan = () => {
    return (
        <div className={classes["select-plan-wrapper"]}>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className={classes["options-wrapper"]}>
                <div
                    className={`${classes['option']}`}>
                    <figure>
                        {/*<img src={Arcade} alt=""/>*/}
                    </figure>
                    <h3>Arcade</h3>
                    <span>$9/mo</span>
                </div>
                <div
                    className={`${classes['option']}`}>
                    <figure>
                        {/*<img src={Advanced} alt=""/>*/}
                    </figure>
                    <h3>Advanced</h3>
                    <span>$12/mo</span>
                </div>
                <div
                    className={`${classes['option']}`}>
                    <figure>
                        {/*<img src={Pro} alt=""/>*/}
                    </figure>
                    <h3>Pro</h3>
                    <span>$15/mo</span>
                </div>
            </div>
            <div className={classes['actions-wrapper']}>
                <button className={classes['back']}>Go Back</button>
                <button className={classes['next']}>Next Step</button>
            </div>
        </div>
)

};

export default SelectPlan;