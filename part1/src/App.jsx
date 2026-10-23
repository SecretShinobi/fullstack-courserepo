const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    )
}

const Footer = () => {
    <div>
        <p>basic app created by <a href='https://github.com/SecretShinobi'>SecretShinobi</a></p>
    </div>
}

const App = () => {
    const now = new Date()
    const name = "Peter"
    const age = 10
    const a = 10
    const b = 20

    const friends = [
        { name: 'Jack', age: 5 },
        { name: 'Maya', age: 9 },
    ]

    return (
        <div>
            <h1>Greetings</h1>
            <p>Hello world, it is {now.toString()}</p>
            <Hello name='George' age={a + b} />
            <Hello name={name} age={age} />

            <p>{friends[0].name} {friends[0].age}</p>
            <p>{friends[1].name} {friends[1].age}</p>
        </div>
    )
}

export default App
