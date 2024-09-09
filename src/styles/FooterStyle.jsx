import styled from 'styled-components';
import Colors from '../constant/Colors';

export const FooterStyle = styled.section`
    .footer-container{
        width: 100%;
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${Colors.hd_color};

        .footer-text{
            font-weight: 400;
            color: ${Colors.bg_color};
        }
    }
`