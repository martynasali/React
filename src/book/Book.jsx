import React from 'react';
import './book.css';

function Book() {
    return (
        <div className='oneBook'>
            <Image/>
            <Author/>
            <Title/>
            <Price/>
        </div>
    )
}

const Image = () => <img src='https://lt2.pigugroup.eu/colours/341/148/31/34114831/nusikaltimas-ir-bausme-fiodoras-dostojevskis_xbig.jpg' />
const Author = () => <h2>Autoriaus knygos</h2>;
const Title = () => <h3>Knygos pavadinimas</h3>;
const Price = () => <p>12$</p>;

export default Book