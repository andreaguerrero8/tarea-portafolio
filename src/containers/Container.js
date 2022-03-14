import React, { Component } from 'react'
import Componente1 from '../componentes/Componente1'
import Componente3 from '../componentes/Componente3'

export default class Container extends Component {
  render() {
    return (
      <div>
         
         <Componente3/>
          <Componente1/>
          
          
      </div>
    )
  }
}
