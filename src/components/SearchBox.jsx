const SearchBox = ({ placeholder, onChangeHandler}) => {
    return (
        <>
            <div className='pa2'>
                <input 
                    className = 'pa3 ba b--green bg-lightest-blue'
                    type = 'search' 
                    placeholder = {placeholder}
                    onChange =  {onChangeHandler}
                />
            </div>
            
        </>
        
    );
}

export default SearchBox;