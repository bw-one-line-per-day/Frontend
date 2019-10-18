import React from 'react';

function EntryForm() {
    return (
        <div className='EntryForm'>
        <h1> One Line A Day </h1> 
        <form>
            <label>
                <input type='text'/> 
            </label>

            <label>
                <input type='text'/> 
            </label>

            <button>Save</button>

        </form>
        </div>
    );
}

export default EntryForm; 