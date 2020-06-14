import React from 'react'
import './search-bar-component.scss'


export const SearchBar = (props) => (
    <div className='input-area'>
        <input className='input' type='text' placeholder='search your killer here' value={props.input} onChange={props.handleChange} />
    </div>
)