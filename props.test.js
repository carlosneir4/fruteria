import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from './List'

configure({
  adapter: new Adapter()
})

describe('Probando componente <List />', () => {
  test('Validar nodos', () => {
    const fruits = [
      { name: 'fresa', id: 1 },
      { name: 'manzana', id: 2 },
      { name: 'naranja', id: 3 },
      { name: 'mango', id: 4 },
    ]

    const wrapper = shallow(<List title='Frutas' list={fruits} />)

    // Validar si existe nodo
    expect(wrapper.find('h1').exists()).toBe(true)

    // Validar si tiene clase css
    expect(wrapper.find('h1').hasClass('big')).toBe(true)

    // Validar cantidad de elementos hijos
    expect(wrapper.find('ul').children().length).toBe(4)

    // Validar el contenido de texto
    expect(wrapper.find('ul').childAt(2).text()).toBe('naranja')

    // Validar el tipo de nodo / elemento
    expect(wrapper.find('ul').childAt(2).type()).toBe('li')

    // Validar html
    expect(wrapper.find('ul').childAt(2).html()).toBe('<li>naranja</li>')
  })

  test('Validar actualizaciones en props', () => {
    const fruits = [
      { name: 'fresa', id: 1 },
      { name: 'manzana', id: 2 },
      { name: 'naranja', id: 3 },
      { name: 'mango', id: 4 }
    ]

    const wrapper = shallow(<List title='Frutas' list={fruits} />)

    // Validar cantidad de elementos li
    expect(wrapper.find('li').length).toBe(4)

    wrapper.setProps({
      list: [
        { name: 'kiwi', id: 5 }
      ]
    })

    // Validar cantidad de elementos li
    expect(wrapper.find('li').length).toBe(1)

    wrapper.setProps({
      title: 'Super Frutas'
    })

    expect(wrapper.find('.big').text()).toBe('Super Frutas')
  })
})