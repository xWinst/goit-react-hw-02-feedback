import React from 'react';
import s from './FeedbackOptions.module.css'

export default class FeedbackOptions extends React.Component {
 
    constructor({options, onLeaveFeedback}){
        super();
        this.onClick = onLeaveFeedback;
        this.colors = ["#00ff00", "#00ffee", "#ff0000"];
        this.buttons = options.map((option, index) => <button key={option} 
                                                              className = {s.button}
                                                              type="button" 
                                                              onClick={() => this.onClick(option)} 
                                                              style = {{backgroundColor: this.colors[index]}}>
                                                            {option}
                                                       </button>)
    }

    render(){
        return(
                <div className={s.container}>
                    {this.buttons}
                </div>
        );
    }
}