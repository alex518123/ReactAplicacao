import React from 'react';
import './styles.css'

function Cards(){
    return (
        <div className='actor-cards-container'>
            <div className='cards-content'>
                <div class="card banner-1">Viggo Mortensen - Aragorn</div>
                <div class="card banner-2">Elijah Wood - Frodo</div>
                <div class="card banner-3">Ian McKellen - Gandalf</div>
                <div class="card banner-4">Orlando Bloom - Legolas</div>
                <div class="card banner-5">John Rhys-Davies - Gimli</div>
                <div class="card banner-6">Sean Astin - Samwise</div>
            </div>
        </div>
    )
}

export default Cards;