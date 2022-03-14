import React, { Component } from 'react'
import { DivHeader, DivMiPerfil, DivEnlaces, Aenlaces } from '../styled/StyledComponentes';

export default class Componente3 extends Component {
  render() {
    return (
      <DivHeader>
        <DivMiPerfil>
          <p>Mi Perfil</p>
          </DivMiPerfil>

        <DivEnlaces>
          <Aenlaces href="#">¿Quién soy?</Aenlaces>
          <Aenlaces href="#"> ¿Que He Hecho?</Aenlaces>
          <Aenlaces href="#"> ¿A Dónde quiero llegar?</Aenlaces>
        </DivEnlaces>

      </DivHeader>

    )
  }
}
