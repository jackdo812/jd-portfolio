import React from 'react';

function NextIconSvg () {
    return (
        <svg className='fill-leaf' aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>Next Arrow Icon</title>
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
    )
}

function PrevIconSvg () {
    return (
        <svg className='fill-leaf' aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>Previous Arrow Icon</title>
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
    )
}

export { NextIconSvg, PrevIconSvg }