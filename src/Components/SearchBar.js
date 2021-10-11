import React, { useState, useEffect } from 'react'
import Alert from './Alert';
import get_data from './Api'
import Card from './Card';
import Offcanva from './Offcanva';
import get__date from './get_date';

function SearchBar(){

  const [dply, setdply] = useState("none");
  const [offcanve, setOffcanve] = useState({});

  const setting_offcanve = (name, tittle, desc, url) => {
    let random = {
      name : name,
      title : tittle,
      description : desc,
      url : url
    }
    setOffcanve(random);
  }

  const [article, setArticle] = useState([]);
  const [subject, setSubject] = useState("");

  const onChangeSearchBar = () => {
    setSubject(document.getElementById('search_bar').value);
  }

  const search_function = async () => {
    if(subject === "") {
      setdply("block");
    }
    else{
      let date = get__date();
      let data_text = await get_data(subject,date,0); 
      console.log(data_text);
      setArticle(data_text.articles);
    }
  }

  const headlines = async () =>{
    let date = get__date();
    let data_text = await get_data(subject,date,1); 
    setArticle(data_text.articles);
  }
  useEffect(() => {headlines()},[])
  

  const close_alert = () => {
    setdply("none");
  }

  return (
    <div className = "SearchBar mt-4">


      <div className= "input-group w-50 m-auto">
        <input className= "form-control" id="search_bar" onChange = {onChangeSearchBar} value = {subject}/>
        <span className= "input-group-text btn btn-primary" id="search_btn" onClick ={() => search_function()}>Search</span>
      </div>


      <Alert display = {dply} func = {close_alert}/>


      <div className= "container mt-4 custom-container m-auto">
        {
          article.map((artl, idx) => {
            return <Card 
                      name = {artl.source.name} 
                      title = {artl.title}
                      urlToImage = {artl.urlToImage}
                      key = {idx}
                      func = {() => setting_offcanve(artl.source.name, artl.title, artl.description, artl.url)}
                    />
          })
        }
      </div>


      <Offcanva
      name = {offcanve.name} 
      title = {offcanve.title}
      description = {offcanve.description}
      url = {offcanve.url}
      />


    </div>
  )
}

export default SearchBar
