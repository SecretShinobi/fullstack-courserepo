import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './Components/Person.jsx'
import Filter from './Components/Filter.jsx'
import PersonForm from './Components/AddPerson.jsx'

const App = () => {
    const [persons, setPersons] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter} />
            <h3> add a new</h3>
            <PersonForm persons={persons} setPersons={setPersons} />
            <h3>Numbers</h3>
            <Persons persons={persons} filter={filter} />
        </div>
    )
}

export default App
