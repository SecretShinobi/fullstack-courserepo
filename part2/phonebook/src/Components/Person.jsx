const Person = ({ person }) => {
    return (<div>{person.name} {person.number}</div>)
}

const Persons = ({ persons, filter }) => {

    const filteredNames = persons.filter(
        (person) => person.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            {filteredNames.map((person) =>
                <Person key={person.id} person={person} />)
            }
        </div>
    )
}

export default Persons
