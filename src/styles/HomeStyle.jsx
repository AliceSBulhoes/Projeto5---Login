import styled from 'styled-components';
import Colors from '../constant/Colors';
import bg from '../assets/bg.jpg'

export const HomeStyle = styled.section`
    .img-bg{
        background-image: url(${bg});
        background-size: cover;
        height: 85vh;
        display: flex;
        justify-content: center;

        .content{
            backdrop-filter: blur(22px) saturate(200%);
            -webkit-backdrop-filter: blur(22px) saturate(200%);
            background-color: rgba(255, 255, 255, 0.31);
            border: 1px solid rgba(209, 213, 219, 0.3);
            padding: 2rem;
            height: 100%;
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .h1-home{
                font-weight: 900;
                font-size: 5rem;
                color: ${Colors.ft_color};
            }
            .p-home{
                font-weight: 600;
                font-size: 3rem;
                color: ${Colors.hd_color};
            }
        }
    }
`