import styled from 'styled-components';
import { Link } from 'react-router-dom'


 export const DashboardDiv = styled.div` 
    margin-top: 20px;
    font-family: ''Cantarell', serif;`

export const ProfileLink = styled(Link)`
font-family: 'Oxygen', sans-serif; 
font-style: none;
color: black;
:hover { font-style: italic;
    color: black } 
`

 export const CustomButton = styled.button`
position: relative;
display: inline-block;
white-space: nowrap;
background: transparent;
border-radius: 5px;
border: 02px solid #121212;
border-width: 01px 01px 01px 01px;
padding: 5px 10px 5px 10px;
  font-size: 1em;
  cursor: pointer;
  :focus { outline-color: black;}
`
