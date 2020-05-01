import React from 'react';
import Page from '../components/Page'
import witchData from '../components/_hoc/witchData'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ApplicantsTable from '../components/AplicantsTable'


class App extends React.Component {

  render() {
    return (
      <Page>
        <Header/>
        <div className="page">
          <Sidebar/>
          <main className="main">
            <ApplicantsTable/>
          </main>
        </div>
      </Page>
   );
  }
}

export default witchData(App);