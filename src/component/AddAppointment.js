import { useState } from "react";


function AddWrite({formData,setFormData,formPublish}){
  if (!formPublish) {
    return null;
  }
  return(
    <>
    <ul>
    <h4>내 의견 등록하기</h4>
      <li>
        <label  htmlFor="userPeople">고객이름</label>
        <input  type="text" id="userPeople" placeholder="&nbsp;name" onChange={(e)=>{setFormData({...formData,people:e.target.value})}}/>  
      </li>
      <li>
        <label  htmlFor="userTitle">숙소명</label>
        <input  type="text" id="userTitle"  placeholder="&nbsp;hotel" onChange={(e)=>{setFormData({...formData,title:e.target.value})}}/>  
      </li>
      <li>
        <label  htmlFor="userDate">투숙일</label>
        <input  type="date" id="userDate" onChange={(e)=>{setFormData({...formData,date:e.target.value})}}/>  
      </li>
      <li>
        <label  htmlFor="userBody">의견 보내기</label>
        <textarea  id="userBody" placeholder="&nbsp;content" onChange={(e)=>{setFormData({...formData,body:e.target.value})}}></textarea>  
      </li>
      <p><button type="submit" onClick={formPublish}>보내기</button></p>
    </ul>  
    </>
  )
}




function AddAppointment ({onSendAppointment,lastId}){
  const clearData = {
    "people":"",
    "date":"",
    "title":"",
    "body":""
  };

  const[formData,setFormData] = useState(clearData);
  function formPublish(){
    const appointmentInfo = {
      id : lastId + 1,
      people : formData.people,
      date : formData.date,
      title : formData.title,
      body : formData.body
    };
    // console.log(formData.date);
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
  }

  return(
      <AddWrite 
      formData={formData}
      formPublish = {formPublish}
      setFormData = {setFormData}
      />
 
  )
}
export default AddAppointment;