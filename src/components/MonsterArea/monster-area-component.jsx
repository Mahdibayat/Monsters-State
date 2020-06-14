import React from 'react'
import './monster-area-component.scss'

export const MonsterArea = (props) => (
    <div className='monster'>
        {
            props.data.map((item, i) => (
                <div className='cardes' key={item.id}>
                    <img src={`https://robohash.org/AY${item.id}.png?set=set2&size=180x180`} alt={`monster${item.id}`}/>
                    <h3>Name: {item.name}</h3>
                    <p>Email: {item.email}</p>
                </div>
            ))
        }
    </div>
)