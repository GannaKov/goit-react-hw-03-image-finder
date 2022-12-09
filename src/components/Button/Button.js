import React from 'react';
//  import PropTypes from 'prop-types';
export function LoadMoreBtn ({onLoadMoreClick}){
    return( 
    <button className='Button' type="button" onClick={onLoadMoreClick} >Load More</button>)
}