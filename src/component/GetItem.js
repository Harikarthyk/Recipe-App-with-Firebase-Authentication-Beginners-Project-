import React from 'react' ;

const GetItem = ( { item , setItem , fetchDetails } ) => {
    return(
        <div className="body">
            <div className="ip-field-wrapper" >
                <input className="ip-item" placeholder="Recipe Search .. " type="text" value={item} onChange={ e => setItem( e.target.value ) } />
                <button className="btn-item" onClick={ fetchDetails } >Search</button>
            </div>
        </div>
    );
}

export default GetItem ;