import { Component } from 'react'
import Cartsummery from '../Cartsummery/Cartsummery';
import Wish from '../Wish/Wish';
import Product from '../Product/Product'

export default class Body extends Component {
  render() {
      return <main className='app'>
        <Cartsummery />
        <Wish />
        <Product />
    </main>;
  }
}
