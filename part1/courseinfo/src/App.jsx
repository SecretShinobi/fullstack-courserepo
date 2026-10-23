const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.part}, {props.exercises}</p>
        </div>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const sections = [
        { part: 'Fundamentals of React', exercises: 10 },
        { part: 'Using props to pass data', exercises: 7 },
        { part: 'State of a component', exercises: 14 },
    ]

    return (
        <div>
            <Header course={course} />
            <Content part={sections[0].part} exercises={sections[0].exercises} />
            <p>
                Number of exercises {
                    sections[0].exercises + sections[1].exercises + sections[2].exercises
                }
            </p>

        </div>
    )
}

export default App
