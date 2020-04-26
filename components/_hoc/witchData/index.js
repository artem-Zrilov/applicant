import React from 'react'
import {initApp} from "../../../store/actions/appActions";

export default (Component) => {
  return class extends React.Component {
    static async getInitialProps({store}) {

      const data = {
        app: {
          title: "Рейтинг абитуриентов"
        },
        user: {
          picture: 'https://sun1-99.userapi.com/FLGS5RdQ8CB7R02QTYfo-AS5_T8D_gbuSKQMEQ/LhamPJaW67I.jpg?ava=1',
          name: 'Артем',
          surname: 'Зрилов',
          role: 'Абитуриент'
        }
      };

      store.dispatch(initApp(data));

      return {
        isServer: typeof window === "undefined"
      };
    }

    render() {
      return(
       <Component
        {...this.props}
       />
      )
    }
  }
}