import React from 'react';
import Search from "../icons/Search";


const SongsSearchField = (props) => {








    return (
        <div className='mt-4'>
            
      
                <form className='d-flex'>
                    <input type="text" className='w-100' placeholder='The Beatles' onChange={props.inputHandler}/>
                    <button onClick={props.searchHandler}>
                        <Search />
                    </button>
                </form>

  


        </div>
    );
};

export default SongsSearchField;