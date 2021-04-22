import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Header from './atoms/Header';
import First from './First';
import Home from './Home';
import Todo from './Todo';
import FormDialog from './FormDialog';

const App = () => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(new Date())
  const [lists, setLists] = useState([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const changeDate = (n) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + n)
    setDate(newDate)
  }

  const addList = (data) => {
    axios.post('/api/v1/lists', data)
    .then(resp => {
      console.log(resp)
      setLists((prevLists) => {
        return [
          ...prevLists,
          resp.data,
        ]
      });
    })
    .catch(e => {
      console.log(e)
    })
  }

  const updateList = (id, data) => {
    axios.patch(`/api/v1/lists/${id}`, data)
    .then(resp => {
      console.log(resp)
      setLists((prevLists) => {
        return prevLists.map((value) => {
          if (value.id === id) return resp.data ;
          return value;
        })
      })
    })
  }

  const deleteList = (id) => {
    const sure = window.confirm('Are you sure?');
    if (sure) {
      axios.delete(`/api/v1/lists/${id}`)
      .then(resp => {
        console.log(resp)
        setLists((prevLists) => {
          return prevLists.filter(value => value.id !== id)
        })
      })
      .catch(e => {
        console.log(e);
      });
    }
  }

  const makeKey = (date) => {
    const y = date.getFullYear();
    const m = ('00' + (date.getMonth() + 1)).slice(-2);
    const d = ('00' + date.getDate()).slice(-2);
    return y + '-' + m + '-' + d
  }

  const dateLists = lists.filter((list) => {
    if (list.date === makeKey(date)) return list
  })

  const changeColorCode = (color) => {
    if (color.slice(0, 1) === "#") {
      color = color.slice(1);
      if (color.length === 3) {
        color = color.slice(0,1) + color.slice(0,1)
          + color.slice(1,2) + color.slice(1,2)
          + color.slice(2,3) + color.slice(2,3)
      }
      const r = parseInt(color.slice(0, 2), 16);
      const g = parseInt(color.slice(2, 4), 16);
      const b = parseInt(color.slice(4, 6), 16);
      return `rgb(${r}, ${g}, ${b})`
    } else if (color.slice(0, 3) === "rgb") {
      color = color.slice(3).replace("(","").replace(")","")
      color = color.split(",").map((i) => {
        return ("0" + Number(i.trim()).toString(16)).slice(-2)
      })
      return "#" + color.join("")
    }
  }

  useEffect(() => {
    axios.get('/api/v1/lists.json')
    .then(resp => {
      console.log(resp.data)
      setLists(resp.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="wrapper">
      <Header
        handleOpen={handleOpen} />
      <div className="container">
        <Switch>
          <Route exact path="/" component={First} />
          <Route exact path='/home' render={() => 
            <Home
              date={date}
              setDate={setDate}
              dateLists={dateLists} />
          }/>
          <Route exact path='/todo' render={() => 
            <Todo
              date={date}
              dateLists={dateLists}
              changeDate={changeDate}
              changeColorCode={changeColorCode}
              updateList={updateList}
              deleteList={deleteList} />
          }/>
        </Switch>
      </div>
      {open && (
        <FormDialog
          date={date}
          makeKey={makeKey}
          changeColorCode={changeColorCode}
          addList={addList}
          handleClose={handleClose} />
      )}
    </div>
  );
}

export default App;