import React from 'react';
import Page from '../components/Page'
import {connect} from "react-redux";
import {initApp} from "../store/actions/appActions";
import witchData from '../components/_hoc/witchData'


class App extends React.Component {

  render() {
    return (
      <Page>
        1232
      </Page>
   );
  }
}

export default witchData(App);