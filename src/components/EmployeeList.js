import _ from 'lodash';
import React from 'react';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions/EmployeeAction';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends  React.Component {
  componentWillMount() {
    console.log('I am in componentWillMount');
    this.props.employeeFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('I am in compomentWillReceiveProps');
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <EmployeeListItem  employee={employee} />
  }

  render(){
    console.log(this.props);
    return(
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
}

export default connect(mapStateToProps,{ employeeFetch })(EmployeeList);
