import { ChangeEventHandler } from "react";

interface ISearchBoxProps {
    placeholder: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ placeholder, onChangeHandler}: ISearchBoxProps) => {
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