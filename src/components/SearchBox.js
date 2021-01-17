import React from 'react';


const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className='pa3'>
            <input className='pa3 ba b--green bg-lighest-blue  db w-100 br4'
                type='search'
                placeholder='Search robots'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;