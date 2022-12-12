import styled from 'styled-components';

export const Gallery= styled.div `margin-bottom: 30px;`

export const ImageGallery = styled.ul`  
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 0;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;`


