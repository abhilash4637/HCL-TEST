import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DateYearMessage extends Component {
	render() {
        const {date, year} = this.props;

		return (
  <div className='info center-block'>
    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 date'>
      <strong>
        <h3>The current date is</h3> {date && date}
      </strong>
    </div>
    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 year'>
      <strong>
        <h3>The current year is</h3>{year && year}
      </strong>
    </div>
  </div>
);

	}
}

// Uncomment the below snippet
DateYearMessage.propTypes = {
	date: PropTypes.string,
	year: PropTypes.number
}

