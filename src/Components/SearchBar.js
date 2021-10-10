import React, { useState } from 'react'
import get_data from './Api'

function SearchBar() {

  const [subject, setSubject] = useState("");

  const onChangeSearchBar = () => {
    setSubject(document.getElementById('search_bar').value);
  }

  const get__date = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    if(month < 10) month = '0' + month.toString();
    let currDate = date.getDate();
    if(currDate < 10) currDate = '0' + currDate.toString();

    let today_Date = `${year}-${month}-${currDate}`;
    return today_Date;
  }

  const search_function = async () => {
    if(subject === "") alert('Enter the subject please ..')
    else{
      //alert(subject);
      let date = get__date();
      let data_text = await get_data(subject,date); 
      console.log(data_text);
    }
  }

  return (
    <div className = "SearchBar d-flex justify-content-center mt-4">
      <div className= "input-group w-50">
        <input className= "form-control" id="search_bar" onChange = {onChangeSearchBar} value = {subject}/>
        <span className= "input-group-text btn btn-primary" id="search_btn" onClick ={() => search_function()}>Search</span>
      </div>
    </div>
  )
}

export default SearchBar
