import './SearchBar.css'

const SearchBar = ({inputHandler, GetResults, inputText}) => {

    return(
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' value={inputText} placeholder='Search for videos here...' onChange={inputHandler}/>
                <button onClick={() => {GetResults()}}>Search here!</button>
            </div>
        </div>
    )
}

export default SearchBar

let inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const GetResults = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${inputText}&part=snippet&maxResults=10`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.log(error.response.data);
    }
  };