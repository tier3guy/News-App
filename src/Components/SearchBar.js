import React, { useState } from 'react'
import get_data from './Api'
import Card from './Card';

function SearchBar(){

  const [article, setArticle] = useState([]);
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
      let date = get__date();
      let data_text = await get_data(subject,date); 
      await setArticle(data_text.articles);
    }
  }

  return (
    <div className = "SearchBar mt-4">
      <div className= "input-group w-50 m-auto">
        <input className= "form-control" id="search_bar" onChange = {onChangeSearchBar} value = {subject}/>
        <span className= "input-group-text btn btn-primary" id="search_btn" onClick ={() => search_function()}>Search</span>
      </div>

      <div className= "container mt-4 custom-container m-auto">
        {
          article.map((artl, idx) => {
            return <Card name = {artl.source.name} 
                         title = {artl.title}
                         urlToImage = {artl.urlToImage}
                         url = {artl.url}
                         key = {idx}/>
          })
        }
      </div>
    </div>
  )
}

export default SearchBar
