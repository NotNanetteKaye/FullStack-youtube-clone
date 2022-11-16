import './SearchBar.css'

const SearchBar = ({inputHandler, GetResults, inputText}) => {

    return(
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' value={inputText} placeholder='Search for videos here...' onChange={inputHandler}/>
                <button onClick={() => {GetResults()}}>Search here!</button>
            </div>
            <div className='youtubeResults'>
            </div>
        </div>
    )
}

export default SearchBar

