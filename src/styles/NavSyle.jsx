import styled from 'styled-components';
import Colors from '../constant/Colors';

export const NavStyle = styled.section`
  .nav{
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    background-color: ${Colors.hd_color};

    .nav-link{
        text-decoration: none;
        text-transform: uppercase;
        color: ${Colors.bg_color};
        font-weight: 700;
        border-radius: 4px;
        padding: 10px 20px;
        transition: ease 1s;
    }
    .nav-link:hover{
        transition: ease 1s;
        transform: scale(1.1);
        background-color: ${Colors.ft_color};
    }
  }  
`