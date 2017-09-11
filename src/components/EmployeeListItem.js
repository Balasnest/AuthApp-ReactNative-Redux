import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common/CardSection';

class EmployeeListItem extends Component {
  render() {
    const { name } = this.props.employee;
    return(
      <CardSection>
        <Text style={{ fontSize: 18 }}>{name}</Text>
      </CardSection>
    );
  };
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } =  employeeForm;
}

export default EmployeeListItem;
