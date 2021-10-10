import React, { useState } from 'react'
import get_data from './Api'
import Card from './Card';
import Offcanva from './Offcanva';

function SearchBar(){

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

  const [article, setArticle] = useState([
    {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "John Sinnott, CNN",
      "title": "Tyson Fury knocks out Deontay Wilder to retain WBC title in heavyweight fight for the ages - CNN",
      "description": "In a fight that is being talked about as one of the all-time great heavyweight bouts, Tyson Fury retained his WBC title after knocking out Deontay Wilder at the T-Mobile Arena in Las Vegas on Saturday.",
      "url": "https://www.cnn.com/2021/10/10/sport/tyson-fury-deontay-wilder-wbc-heavyweight-fight-spt-intl/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211010073527-tyson-fury-super-tease.jpg",
      "publishedAt": "2021-10-10T07:26:00Z",
      "content": "(CNN)In a fight that is being talked about as one of the all-time great heavyweight bouts, Tyson Fury retained his WBC title after knocking out Deontay Wilder at the T-Mobile Arena in Las Vegas on Sa… [+709 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Frank Pallotta, CNN Business",
      "title": "'SNL' has the Facebook whistleblower help congress understand social media - CNN",
      "description": "Social media can be difficult to understand, but luckily for Congress they had the Facebook whistleblower walk them through it on \"Saturday Night Live.\"",
      "url": "https://www.cnn.com/2021/10/10/media/snl-facebook-whistleblower-cold-open/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211009233605-screengrab-saturday-night-live-10-09-2021-super-tease.jpg",
      "publishedAt": "2021-10-10T06:29:00Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "ESPN"
      },
      "author": "David M. Hale",
      "title": "Oklahoma's all-time comeback to Alabama's stunning loss - Week 6 turned college football upside down - ESPN",
      "description": "Beyond Alabama's loss, Week 6 gave us Oklahoma's remarkable comeback against Texas, Iowa's defense punishing an overwhelmed Penn State, Michigan and Notre Dame surviving on late field goals, and a showdown between the two worst teams in the country.",
      "url": "https://www.espn.com/college-football/story/_/page/gamedayfinal100921/oklahoma-all-comeback-alabama-stunning-loss-week-6-turned-college-football-upside-down",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1010%2Fr920742_1296x729_16%2D9.jpg",
      "publishedAt": "2021-10-10T06:28:16Z",
      "content": "Jimbo Fisher told us this day was coming, and we laughed.\r\nWe laughed because the idea that Texas A&amp;M, fresh off back-to-back losses, would somehow end Alabama's 100-game winning streak against u… [+14783 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "New York Post"
      },
      "author": "Yaron Steinbuch, Kathianne Boniello",
      "title": "'We're landing right now': Pilot in LaGuardia bomb scare heard asking for help - New York Post ",
      "description": "The pilot of Republic Airlines Flight 4817 is heard steadily declaring, “We’re landing right now,” as the crisis of a ”bomb” claim at LaGuardia Airport unfolded.",
      "url": "https://nypost.com/2021/10/10/pilot-in-laguardia-airport-bomb-claim-heard-asking-for-help-in-recording/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/10/laguardia-emergency-landing.png?w=1024",
      "publishedAt": "2021-10-10T05:49:00Z",
      "content": "The pilot of an airplane that made an emergency landing at LaGuardia Airport over fears of a bomb onboard was calm and cool in his recorded discussion with air-traffic controllers.\r\nThe pilot of Repu… [+1644 chars]"
      }
  ]);
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
      let data_text = await get_data(subject,date,0); 
      console.log(data_text);
      //setArticle(data_text.articles);
    }
  }

  const headlines = async () =>{
    let date = get__date();
    let data_text = await get_data(subject,date,1); 
    console.log(data_text);
    //setArticle(data_text.articles);
  }
  headlines();

  return (
    <div className = "SearchBar mt-4">
      <div className= "input-group w-50 m-auto">
        <input className= "form-control" id="search_bar" onChange = {onChangeSearchBar} value = {subject}/>
        <span className= "input-group-text btn btn-primary" id="search_btn" onClick ={() => search_function()}>Search</span>
      </div>

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
