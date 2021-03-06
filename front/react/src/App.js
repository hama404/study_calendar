import React, { useState, useEffect, useCallback } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { First, Home, Todo } from './components'
import { FormDialog, Header, Message } from './components/modules'
import { Login, Signup } from './components/devise'

const App = () => {
  const [openDialog, setOpenDialog] = useState(false),
    [openDrower, setOpenDrower] = useState(false)

  const toggleDialog = useCallback(
    (bool) => () => {
      setOpenDialog(bool)
    },
    []
  )

  const toggleDrower = useCallback(
    (bool) => () => {
      setOpenDrower(bool)
    },
    []
  )

  const [date, setDate] = useState(new Date()),
    [lists, setLists] = useState([]),
    [user, setUser] = useState(null),
    [message, setMessage] = useState(null)
  const history = useHistory()

  const changeDate = (n) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + n)
    setDate(newDate)
  }

  const addList = (data) => {
    axios
      .post('http://localhost:3000/api/v1/lists', data)
      .then((resp) => {
        console.log(resp)
        setLists((prevLists) => {
          return [...prevLists, resp.data]
        })
        setMessage({ text: 'successfully add list!' })
      })
      .catch((err) => {
        setMessage({ text: 'please try again' })
        console.log(err)
      })
  }

  const updateList = (id, data) => {
    axios
      .patch(`http://localhost:3000/api/v1/lists/${id}`, data)
      .then((resp) => {
        console.log(resp)
        setLists((prevLists) => {
          return prevLists.map((value) => {
            if (value.id === id) return resp.data
            return value
          })
        })
        setMessage({ text: 'successfully update list!' })
      })
      .catch((err) => {
        setMessage({ text: 'please try again' })
        console.log(err)
      })
  }

  const deleteList = (id) => {
    const sure = window.confirm('Are you sure?')
    if (sure) {
      axios
        .delete(`http://localhost:3000/api/v1/lists/${id}`)
        .then((resp) => {
          console.log(resp)
          setLists((prevLists) => {
            return prevLists.filter((value) => value.id !== id)
          })
          setMessage({ text: 'successfully delete list!' })
        })
        .catch((err) => {
          setMessage({ text: 'please try again' })
          console.log(err)
        })
    }
  }

  const signup = (name, email, password, password_confirmation) => {
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      password_confirmation === ''
    ) {
      alert('required items are not entered')
      return false
    } else if (password !== password_confirmation) {
      alert("passwords doesn't match, please try again")
      return false
    }

    const data = { name, email, password, password_confirmation }
    axios
      .post('http://localhost:3000/auth', data)
      .then((resp) => {
        const headers = resp.headers
        const { uid, name, email, nickname, image } = resp.data.data
        const session = JSON.stringify({
          'access-token': headers['access-token'],
          client: headers['client'],
          uid: headers['uid'],
        })

        localStorage.setItem('session', session)
        setUser({ uid, name, email, nickname, image })
        setMessage({ text: 'successfully sign up!' })
        history.push('/')
      })
      .catch((err) => {
        setMessage({ text: 'please try again' })
        console.log(err)
      })
  }

  const login = (email, password) => {
    if (email === '' || password === '') {
      alert('required items are not entered')
      return false
    }

    const data = { email, password }
    axios
      .post('http://localhost:3000/auth/sign_in', data)
      .then((resp) => {
        const headers = resp.headers
        const { uid, name, email, nickname, image } = resp.data.data
        const session = JSON.stringify({
          'access-token': headers['access-token'],
          client: headers['client'],
          uid: headers['uid'],
        })

        localStorage.setItem('session', session)
        setUser({ uid, name, email, nickname, image })
        setMessage({ text: 'successfully log in!' })
        history.push('/')
      })
      .catch((err) => {
        console.log(err)
        setMessage({ text: 'please try again' })
      })
  }

  const signout = () => {
    const sure = window.confirm('Are you sure?')
    if (sure) {
      const headers = JSON.parse(localStorage.getItem('session'))
      axios
        .delete('http://localhost:3000/auth/sign_out', { headers })
        .then(() => {
          localStorage.removeItem('session')
          setUser(null)
          toggleDrower(false)()
          setMessage({ text: 'good bye!' })
          history.push('/')
        })
        .catch((err) => {
          setMessage({ text: 'please try again' })
          console.log(err)
        })
    } else return false
  }

  const makeKey = (date) => {
    const y = date.getFullYear()
    const m = ('00' + (date.getMonth() + 1)).slice(-2)
    const d = ('00' + date.getDate()).slice(-2)
    return y + '-' + m + '-' + d
  }

  const dateLists = lists.filter((list) => list.date === makeKey(date))

  const changeColorCode = (color) => {
    if (color.slice(0, 1) === '#') {
      color = color.slice(1)
      if (color.length === 3) {
        color =
          color.slice(0, 1) +
          color.slice(0, 1) +
          color.slice(1, 2) +
          color.slice(1, 2) +
          color.slice(2, 3) +
          color.slice(2, 3)
      }
      const r = parseInt(color.slice(0, 2), 16)
      const g = parseInt(color.slice(2, 4), 16)
      const b = parseInt(color.slice(4, 6), 16)
      return `rgb(${r}, ${g}, ${b})`
    } else if (color.slice(0, 3) === 'rgb') {
      color = color.slice(3).replace('(', '').replace(')', '')
      color = color.split(',').map((i) => {
        return ('0' + Number(i.trim()).toString(16)).slice(-2)
      })
      return '#' + color.join('')
    }
  }

  useEffect(() => {
    // axios.defaults.withCredentials = true;
    axios
      .get('http://localhost:3000/api/v1/lists.json')
      .then((resp) => {
        setLists(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })

    const headers = JSON.parse(localStorage.getItem('session'))
    axios
      .get('http://localhost:3000/api/v1/whoami', { headers })
      .then((resp) => {
        const { uid, name, email, nickname, image } = resp.data
        setUser({ uid, name, email, nickname, image })
        setMessage({ text: 'welcome!!' })
      })
      .catch((err) => {
        setMessage({ text: 'please login\n(you can login as test user)' })
        console.log(err)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header
        user={user}
        signout={signout}
        openDrower={openDrower}
        toggleDrower={toggleDrower}
        toggleDialog={toggleDialog}
      />
      <main>
        <Switch>
          <Route exact path="/" component={First} />
          <Route
            exact
            path="/calendar"
            render={() => (
              <Home date={date} setDate={setDate} dateLists={dateLists} />
            )}
          />
          <Route
            exact
            path="/lists"
            render={() => (
              <Todo
                date={date}
                dateLists={dateLists}
                changeDate={changeDate}
                changeColorCode={changeColorCode}
                updateList={updateList}
                deleteList={deleteList}
              />
            )}
          />
          <Route exact path="/login" render={() => <Login login={login} />} />
          <Route
            exact
            path="/signup"
            render={() => <Signup signup={signup} />}
          />
        </Switch>
      </main>
      {openDialog && (
        <FormDialog
          date={date}
          makeKey={makeKey}
          changeColorCode={changeColorCode}
          addList={addList}
          onClose={toggleDialog(false)}
        />
      )}
      {message && <Message message={message} setMessage={setMessage} />}
    </div>
  )
}

export default App
