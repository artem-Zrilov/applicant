import './index.css'
import React from 'react'
import {connect} from "react-redux";

const Profile = ({picture, name, surname, role}) => {

  return (
   <div className="header__profile">
     <img className="header__profile-picture" src={!!picture ? picture : "/img/no-avatar.svg"}/>
     <div className="header__profile-data">
       {!!name && !!surname && <div className="header__profile-name">{name} {surname}</div>}
       {!!role && (
        <div className="header__profile-role">
          {role}
        </div>
       )}
     </div>
   </div>
  )
}

const mapStateToProps = state => ({
  picture: state.user.picture,
  name: state.user.name,
  surname: state.user.surname,
  role: state.user.role
});

export default connect(mapStateToProps, null)(Profile);