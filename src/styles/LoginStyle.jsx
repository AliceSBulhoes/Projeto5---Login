// Importando dependencias
import styled from 'styled-components';
// Importando cores
import Colors from '../constant/Colors'

export const LoginStyle = styled.section`
    .container{
        width: 100%;
        height: 85vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${Colors.bg_color};

        .container-login{
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: ${Colors.hd_color};
            width: 55%;
            height: 75%;
            padding: 2.5rem 3rem;
            border-radius: 10px;
            box-shadow: 10px 10px 10px #00000057;

            .login{
                width: 40%;

                /* Estilo do forms */
                .login-form{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;

                    .titulo-login{
                        font-size: 24px;
                        font-weight: 800;
                        text-transform: uppercase;
                        color: ${Colors.ft_color};
                    }

                    /* Estilo dos inputs */
                    .w-input{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .input-form{
                            width: 90%;
                            padding: 0.5rem 0.3rem;
                            background-color: ${Colors.hd_color};
                            border: solid 2px ${Colors.bg_color};
                            border-radius: 4px;
                            color: ${Colors.bg_color};
                        }

                        .input-form::placeholder{
                            color: ${Colors.bg_color};
                        }

                        .input-form:focus{
                            background-color: ${Colors.bg_color};
                            border: solid 2px ${Colors.hd_color};
                            color: ${Colors.hd_color};
                        }
                    }

                    /* Estilo do botão */
                    .login-btn{
                        .login-form-btn{
                            padding: 0.5rem 1rem;
                            background-color: ${Colors.ft_color};
                            color: ${Colors.bg_color};
                            text-transform: uppercase;
                            font-weight: 800;
                            border: solid 1px ${Colors.bg_color};
                            border-radius: 4px;
                            transition: ease 0.5s;
                        }
                        .login-form-btn:hover{
                            transform: scale(1.1);
                            transition: ease 0.5s;
                            background-color: ${Colors.bg_color};
                            color: ${Colors.ft_color};
                        }
                    }

                    /* Estilo utils */
                    .utils{
                        list-style: none;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        li{
                            display: flex;
                            gap: 0.5rem;
                            .text1{
                                color: ${Colors.ft_color};
                                font-weight: 500;
                            }

                            .text2{
                                color: ${Colors.bg_color};
                                text-transform: uppercase;
                                font-weight: 700;
                                text-decoration: none;
                            }
                        }
                    }
                }
            }

            .img-logo{
                position: relative;
                left: 2px;
                width: 250px;
                border: solid 2px ${Colors.bg_color};
                border-radius: 4px;
            }
        }
    }
`