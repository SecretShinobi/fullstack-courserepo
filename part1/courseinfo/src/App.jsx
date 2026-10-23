const Part = (props) => {
    console.log(props)
    return (
        <p>{props.part} {props.exercises}</p>
    )
}
const Header = (title) => {
    return (
        <div>
            <h1>{title.course}</h1>
        </div>
    )
}

const Content = (parts) => {
    console.log(parts)
    return (
        <div>
            <Part part={parts.p1} exercises={parts.e1} />
            <Part part={parts.p2} exercises={parts.e2} />
            <Part part={parts.p3} exercises={parts.e3} />
        </div>
    )
}

const Total = (num) => {
    return (
        <div>
            <p> Number of exercises {num.e1 + num.e2 + num.e3} </p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return (
        <div>
            <Header course={course} />
            <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2}
                p3={part3} e3={exercises3} />
            <Total e1={exercises1} e2={exercises2} e3={exercises3} />
        </div>
    )
}

export default App
