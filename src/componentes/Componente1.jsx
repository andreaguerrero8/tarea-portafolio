import React, { Component } from 'react'
import  { DivDescription, DivStyled, ImagStyle, DivLenguajes, ImgLeng } from '../styled/StyledComponentes';

export default class Componente1 extends Component {

    render() {

        return (
            <div>
                <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1647294265/oficina_legf9k.png" width="100%" height="100%" />

                <DivStyled>

                    <h1>Andreina  L. Rodriguez  G.</h1>
                    <h5> Developer Frontend Junior </h5>
                    <ImagStyle src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1647293402/WhatsApp_Image_2022-03-14_at_4.24.41_PM_cwlepv.jpg" width="300px" height="300px" ></ImagStyle>
                    
                </DivStyled>

                <DivDescription>
                    <br></br><p>
                    Soy una chica apasionada por aprender cada día nuevas cosas que me ayuden a crecer tanto personal como profesionalmente.<br></br>
                    Técnico en Programación de software con 6 meses de experiencia, con conocimientos en lenguajes de programación :  JavaScript, .Net, .PHP, hojas de estilos como CSS y Lenguaje demarcado de Hipertexto (HTML)<br></br> 
                    Me concidero Trabajadora, Perseverante, Luchadora, Responsable, Colaboradora, Honesta, Carismática, Alegre y Sensible... <br></br> 
                    Amo reir y hacer feliz a quienes se encuentran a mi lado, me complace ayudar a quienes pueda hacerlo si esta en mis manos y anhelo poder ser muy útil en el lugar donde me encuentre desallorrando mi labor, de igual forma siempre estoy en superación contínua...!!<br></br></p>
                    
                </DivDescription>


                <DivLenguajes>
                    <ImgLeng src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocSsNCQud4ibqduQ2poqNBAvwSCZK6lRpe-BPcZlB1-ABERsYGLrXnm275HfRMo3YAbM&usqp=CAU" alt=""></ImgLeng>
                    <ImgLeng src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOKZFtDvTdONF0QHbJKyC3on27STWX-fLAspr3PWXVRZ3iapqWAPZNgCCISphpV58Uy0&usqp=CAU"></ImgLeng>
                    <ImgLeng src="https://cdn-icons-png.flaticon.com/512/919/919826.png"></ImgLeng>

                </DivLenguajes>

            </div>
        );
    }
}
