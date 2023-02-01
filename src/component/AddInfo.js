
function formData(value){
  const date1 = new Date(value);
  return(
    `
    ${date1.getFullYear()}.
    ${date1.getMonth()+1}.
    ${date1.getDate()}
    `
  )
}


function AddInfo ({appointment,onDeleteAppoint}){
  
  return(
    <li>
      <dl>
        <dt>{appointment.people}</dt>
        <dd>{formData(appointment.date)}</dd>
        <dd>{appointment.title}</dd>
        <dd>{appointment.body}</dd>
      </dl>
      <p><button type="button" onClick={()=> onDeleteAppoint(appointment.id)}>delete</button></p>
    </li>
  )
}
export default AddInfo;