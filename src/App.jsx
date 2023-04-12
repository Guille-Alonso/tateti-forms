import './App.css'
import Board from './components/Board/Board'
import ContactForm from './components/Form/ContactForm'
import MyCarousel from './components/MyCarousel/MyCarousel'
import styled from 'styled-components'
import { Button, Navbar } from 'react-bootstrap'

function App() {

  const MyNavbar = styled(Navbar)`background-color:red`

  const SpecialButton = styled(Button)`
  ${props => props.size == 'lg'?
  'font-size:50px':
  'font-size:15px'
  }
  `

  return (
    <>
    {/* <MyNavbar></MyNavbar> */}
    {/* <SpecialButton size='lg'>hola</SpecialButton> */}
    <ContactForm></ContactForm>
    {/* <MyCarousel items={[
      {foto:'https://picsum.photos/300/300',nombre: '1ra',descripcion:'no tiene'},
      {foto:'https://picsum.photos/300/300',nombre: '2da',descripcion:'si tiene'}
      ]}/> */}
    <Board/>
    </>
  )
}

export default App
