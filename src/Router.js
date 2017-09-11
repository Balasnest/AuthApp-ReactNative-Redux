import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return(
    <Router sceneStyle={{marginTop:65}}>
        <Scene key="root" hideNavBar={true}>
        
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Login" />
          </Scene>

          <Scene key="main">
            <Scene
              onRight={() => Actions.employeeCreate()}
              rightTitle="Add"
              key="employeeList"
              component={EmployeeList}
              title="Employee List"
              initial={true}
            />
            <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Create" />
        </Scene>


      </Scene>
    </Router>
  );
};

export default RouterComponent;
