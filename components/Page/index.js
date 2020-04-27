import React from 'react'
import Head from "next/head";
import {connect} from "react-redux";
import Header from '../Header'
import Sidebar from "../Sidebar";


class Page extends React.Component {
  render() {
    const {
      title,
     children
    } = this.props;

    return(
     <>
       <Head>
         <title>{title}</title>
         <link rel="stylesheet" href='/css/normalize.css'/>
         <meta name="viewport"
               content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
       </Head>
       {children}
     </>
    )
  }
}

const mapStateToProps = state => ({
  title: state.app.title
});

export default connect(mapStateToProps, null)(Page);