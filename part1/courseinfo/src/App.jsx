const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <p>{props.part}, {props.exercises}</p>
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <div>
            <p> Number of exercises {
                props.e1 + props.e2 + props.e3
            }
            </p>
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
            <Content part={sections[1].part} exercises={sections[1].exercises} />
            <Content part={sections[2].part} exercises={sections[2].exercises} />
            <Total e1={sections[0].exercises} e2={sections[1].exercises} e3={sections[2].exercises} />
        </div>
    )
}

export default App
