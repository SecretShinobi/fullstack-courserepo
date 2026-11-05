import { useState, useEffect } from 'react'
import personService from './services/persons.js'
import Persons from './Components/Person.jsx'
import Filter from './Components/Filter.jsx'
import PersonForm from './Components/AddPerson.jsx'

const App = () => {
    const [persons, setPersons] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter} />
            <h3> add a new</h3>
            <PersonForm persons={persons} setPersons={setPersons} />
            <h3>Numbers</h3>
            <Persons persons={persons} setPersons={setPersons} 
              filter={filter} />
        </div>
    )
}

export default App
