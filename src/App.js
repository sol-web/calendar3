import React from 'react'
import { useSelector } from 'react-redux'
import Calendar from './components/Calendar'
import AddNote from './components/AddNote'
import UpdateNote from './components/UpdateNote'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Notes from './components/Notes'
import { Col, Container, Row } from 'react-bootstrap'
import GoogleLogin from './components/google'

function App() {
  const showUpdateNote = useSelector((state) => state.note.showUpdateNote)

  return (
    <body>
      <>
        <header>
          <h1>MENU</h1>
          <nav>
            <span>Menu1</span>
            <span>Menu2</span>
            <span>Menu3</span>
          </nav>
        </header>
        <div className="App">
          <Container>
            <Row>
              <Col xs={100} md={80}>
                <Calendar />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Notes />
              </Col>
              <Col xs={12} md={6}>
                <AddNote />
              </Col>
              <Col xs={12} md={6}>
                {showUpdateNote && <UpdateNote />}
              </Col>
            </Row>
          </Container>
        </div>

        <div className="App">
          <GoogleLogin
            success={(res) => console.log(res)}
            fail={(res) => console.log(res)}
          />
        </div>

        <footer>
          Copyright &copy; 2020 by Sumit Jangir. All Rights Reserved.
        </footer>
      </>
    </body>
  )
}

export default App
