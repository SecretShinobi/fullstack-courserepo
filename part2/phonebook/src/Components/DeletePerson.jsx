import personService from '../services/persons'

const DeletePerson = ({ persons, setPersons, person }) => {

    const deletePerson = (event) => {
        event.preventDefault()
        if (window.confirm(`Delete ${person.name}?`)) {
        personService
          .remove(person.id)
          .then(response => {
              setPersons(persons.filter((newperson) => 
                  newperson.name !== person.name))
          })
        }
    }

    return (
        <button type="button" onClick={deletePerson}>delete</button>
    )
}

export default DeletePerson
