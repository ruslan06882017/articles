import React, {Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import styles from '../styles.css'

class DateRange extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = (day) => {
    console.log('day', day);
    const range = DateUtils.addDayToRange(day, this.state);
    //console.log('range', range);
    this.setState(range);
  }


  render(){
    const { from, to } = this.state;
    return(
      <div className="RangeExample">
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from && to && (
            <button className="link" onClick={this.handleResetClick}>
              Reset
            </button>
          )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
        />
        </div>
    );
  }

}

export default DateRange;