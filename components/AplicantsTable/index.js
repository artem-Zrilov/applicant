import './applicant-table.css';
import {connect} from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import React from "react"


const ApplicantsTable = () => {

  return(
   <div className="applicants-table">
     <Scrollbars
      autoHide
      universal
     >
       <table className="applicants-table__container">
         <thead>
         <tr>
           <td className="applicants-table__number">
             №
           </td>
           <td className="applicants-table__fullname">
             ФИО абитуриента
           </td>
           <td className="applicants-table__point">
             Ср.балл
           </td>
           <td className="applicants-table__volunteer">
             Волонтерская деятельность
           </td>
           <td className="applicants-table__olympiads">
             Олимпиады
           </td>
           <td className="applicants-table__sport">
             Физ.-спорт. мероприятия
           </td>
           <td className="applicants-table__status">
             Оригинал
           </td>
           <td className="applicants-table__reference">
             Справка
           </td>
           <td className="applicants-table__hostel">
             Общежитие
           </td>
           <td className="applicants-table__language">
             Иностранный язык
           </td>
           <td className="applicants-table__reference-college">
             Наличие заявления в "Электронный колледж"
           </td>
         </tr>
         </thead>
       </table>
     </Scrollbars>
   </div>
  )
}

export default connect(null, null)(ApplicantsTable);