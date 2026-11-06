import personService from '../services/persons.js'

const Person = ({ persons, setPersons, person, setNewMessage, setIsSuccess}) =>
{
    const deletePerson = (event) => {
        event.preventDefault()
        if (window.confirm(`Delete ${person.name}?`)) {
        personService
          .remove(person.id)
          .then(response => {
              setPersons(persons.filter((newperson) => 
                  newperson.name !== person.name))
              setIsSuccess(true)
              setNewMessage(`Deleted ${person.name}`)
              setTimeout(() => {
                  setNewMessage(null)
              }, 3000)
          })
          .catch(error => {
              setIsSuccess(false)
              setNewMessage(`${person.name} is already deleted`)
              setTimeout(() => {
                  setNewMessage(null)
              }, 3000)
              // TODO: Update list and update notification style 
          })
        }
    }
    
    return (
        <div className='person'>
        {person.name} {person.number}&nbsp;
        <button type="button" onClick={deletePerson}>delete</button>
        </div>)
}

const Persons = ({ persons, setPersons, filter, setNewMessage, setIsSuccess }) =>
{
    const filteredNames = persons.filter((person) => 
        person.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            {filteredNames.map((person) =>
                <Person key={person.id} persons={persons} 
                setPersons={setPersons} person={person} 
                setNewMessage={setNewMessage} setIsSuccess={setIsSuccess}/>
            )}
        </div>
    )
}

export default Persons
