import React from 'react';
import s from './Sections.module.css'
export default class Section extends React.Component {
    
    render(){
        const {title, children} = this.props; 
            return (<section className = {s.section}>
                        <h2>{title}</h2>
                        {children}
                    </section>)
    }
}