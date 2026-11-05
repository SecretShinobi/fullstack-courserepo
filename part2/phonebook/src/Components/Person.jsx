import DeletePerson from './DeletePerson.jsx'

const Person = ({ persons, setPersons, person }) => {
    return (
        <div className='person'>
        {person.name} {person.number}&nbsp;
        <DeletePerson persons={persons} setPersons={setPersons}
        person={person} />
        </div>)
}

const Persons = ({ persons, setPersons, filter }) => {

    const filteredNames = persons.filter((person) => 
        person.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            {filteredNames.map((person) =>
                <Person key={person.id} persons={persons} 
                setPersons={setPersons} person={person} />
            )}
        </div>
    )
}

export default Persons
