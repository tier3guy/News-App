async function get_data(subject,date){
  let url = `https://newsapi.org/v2/everything?q=${subject}&from=${date}&sortBy=publishedAt&apiKey=4022fcfd87e84da89dff12b78226daf1`
  let response = await fetch(url);
  let response_text = await response.text();
  response_text = JSON.parse(response_text);

  return response_text;
}

export default get_data;