import './SearchBar.css'

const SearchBar = ({getVideos}) => {

  let inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

    return(
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' value={inputText} placeholder='Search for videos here...' onChange={inputHandler}/>
                <button onClick={() => {getVideos()}}>Search here!</button>
            </div>
        </div>
    )
}

export default SearchBar
