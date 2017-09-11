import React from 'react';
import { Card, CardSection, Button } from './common';
import { employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';

class EmployeeCreate extends React.Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }

  render(){
    return(
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress= {this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  };
};

const mapStateToProps = ({employeeForm}) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift }
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
