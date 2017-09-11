import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress(){
    const { email, password } = this.props;
    this.props.loginUser({email,password});
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner size="large"/>;
    }
    return <Button onPress={this.onButtonPress.bind(this)}> Login </Button>
  }

  render(){
    return(
      <View style={styles.container}>

      <Card>
        <CardSection>
          <Input
            label = "Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value = {this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label = "Password"
            placeholder="********"
            onChangeText={this.onPasswordChange.bind(this)}
            value = {this.props.password}
          />
        </CardSection>

        <View style={{backgroundColor: '#fff'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>


        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'DINPro-Bold'
  },
  container: {
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
    backgroundColor: '#34495e'
  },
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
