import React from 'react';
import Page from '../components/Page'
import {connect} from "react-redux";
import {initApp} from "../store/actions/appActions";
import witchData from '../components/_hoc/witchData'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


class App extends React.Component {

  render() {
    return (
      <Page>
        <Header/>
        <div className="page">
          <Sidebar/>
          <main>1232</main>
        </div>
      </Page>
   );
  }
}

export default witchData(App);