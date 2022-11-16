import React  from 'react';
import Moment from 'react-moment';
import 'moment/locale/fr';
import siriLogo from '../../../asset/img/siri.png';

export default class DateHour extends React.Component {
    
    render() {
        
        return (
            <div className='dateHour'>
            <img src={siriLogo} alt='siri' className='siriLogo'/>
            <Moment format="LLL">{this.props.dateToFormat}</Moment>
            </div>
        );
    }
}