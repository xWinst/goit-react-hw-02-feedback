import React from 'react';
import s from './Statistics.module.css'

export default class Statistics extends React.Component {

    render(){
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return(
            <>
                <div className={s.container}>
                    <p className={s.text}>Good : {good}</p>
                    <p className={s.text}>Neutral : {neutral}</p>
                    <p className={s.text}>Bad : {bad}</p>
                </div>
                <div className={s.container}>
                    <p className={s.stat}>Total : {total}</p>
                    <p className={s.stat}>Positive Feedback : {positivePercentage}%</p>
                </div>
            </>
        );
    }
}