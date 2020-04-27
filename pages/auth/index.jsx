import React from 'react';
import Page from '../../components/Page'
import witchData from '../../components/_hoc/witchData'
import LoginRegistrationForm from "../../components/LoginRegistrationForm";
import './auth.css'

class Index extends React.Component {

  render() {
    return (
      <Page>
        <div className="auth-page">
          <LoginRegistrationForm />
        </div>
      </Page>
    );
  }
}

export default witchData(Index);