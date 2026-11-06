import { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons, setNewMessage, setIsSuccess }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
        }

        const names = persons.map(person => person.name)
        if (names.includes(newName)) {
            if (window.confirm(
            `${personObject.name} is already added to the phonebook, ` +
            "replace the old number with a new one?")) {
                const id = persons.find(person => person.name === newName).id
                personService
                  .update(id, personObject)
                  .then(newPerson => {
                      setPersons(persons.map(person => {
                          if (person.id === id) {
                              return newPerson 
                          } else {
                              return person
                          }
                      }))
                      setNewName('')
                      setNewNumber('')
                      setIsSuccess(true)
                      setNewMessage(`${newPerson.name}'s number updated`)
                      setTimeout(() => {
                          setNewMessage(null)
                      }, 3000)
                  })
            }
        } else {
            personService
              .create(personObject)
              .then(newPerson => {
                  setPersons(persons.concat(newPerson))
                  setNewName('')
                  setNewNumber('')
                  setIsSuccess(true)
                  setNewMessage(`Added ${newPerson.name}`)
                  setTimeout(() => {
                      setNewMessage(null)
                  }, 3000)
              })
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
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
        </div>
    )
}

export default PersonForm
