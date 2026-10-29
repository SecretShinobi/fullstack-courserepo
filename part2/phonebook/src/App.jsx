import { useState } from 'react'
import Person from './Components/Person.jsx'
import Filter from './Components/Filter.jsx'
import AddPerson from './Components/AddPerson.jsx'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-123456'
        }
    ])


    return (
        <div>
            <h1>Phonebook</h1>
            <Filter />
            <h1> add a new</h1>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person =>
                    <Person key={person.name} person={person} />
                )}
            </ul>
        </div>
    )
}

export default App
