import React, {Component} from 'react';
import API from '../services/dateAPI';
import DateYearClick from './DateYearClick';
import DateYearMessage from './DateYearMessage';

export default class DateYear extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      response: {}
    }
  }


	handleClickButton=()=> {
    API.getAPIResponse().then(data=> {
      this.setState({response: data.data})
    });
 
	}

	render() {
      const {date} = this.state.response;
      const d = date && new Date(date);
      const year = d && d.getFullYear();
		return (
  <div className='container-fluid'>
    <div>
      <center>
        <h2>Date/Year Server</h2>
      </center>
    </div>
    <div className='text-center page-title'>
      <DateYearClick onClickButton={this.handleClickButton}/>
      <DateYearMessage date={this.state.response.date} year={year}> </DateYearMessage>
    </div>
  </div>
);

	}
}

