import { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './Components/Person'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Notification from './Components/Notification.jsx'

const App = () => {
    const [persons, setPersons] = useState([])
    const [filter, setFilter] = useState('')
    const [newMessage, setNewMessage] = useState(null)
    const [isSuccess, setIsSuccess] = useState(true)

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
            <Notification message={newMessage} isSuccess={isSuccess} />
            <Filter filter={filter} setFilter={setFilter} />
            <h3> add a new</h3>
            <PersonForm persons={persons} setPersons={setPersons} 
            setNewMessage={setNewMessage} setIsSuccess={setIsSuccess}/>
            <h3>Numbers</h3>
            <Persons persons={persons} setPersons={setPersons} 
              filter={filter} setNewMessage={setNewMessage}
              setIsSuccess={setIsSuccess}/>
        </div>
    )
}

export default App
