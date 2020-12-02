import React from 'react';
import BooksList from '../booksList/BooksList'
import Contacts from "../contacs/Contacts"
const Main = () => {
    return (
        <div>
            <BooksList />
            <p>as esu main page</p>
            <div>
            <Contacts name='Martynas' email='alijosius.martynas@gmail.com'/>
            </div>
        </div>
    )
}
export default Main