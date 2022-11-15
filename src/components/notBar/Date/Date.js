import React  from 'react';
import Moment from 'react-moment';
import 'moment/locale/fr';

export default class DateHour extends React.Component {
    
    render() {
        
        return (
            <div className='dateHour'>
            <Moment format="LLL">{this.props.dateToFormat}</Moment>
            </div>
        );
    }
}