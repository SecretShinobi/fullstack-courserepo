import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, number }) => {
    return (
        <tr>
            <td>{text}</td><td>{number}</td>
        </tr>
    )
}

const Statistics = ({ stats }) => {
    const total = stats[0] + stats[1] + stats[2]
    if (total === 0) {
        return <p>No feedback given</p>
    } return (
        <div>
            <table>
                <tbody>
                    <StatisticLine text='good' number={stats[0]} />
                    <StatisticLine text='neutral' number={stats[1]} />
                    <StatisticLine text='bad' number={stats[2]} />
                    <StatisticLine text='all' number={total} />
                    <StatisticLine text='average' number={(stats[0] - stats[2]) / total} />
                    <StatisticLine text='positive' number={(stats[0] / total) * 100 + " %"} />
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        const newGood = good + 1
        setGood(newGood)
    }

    const handleBad = () => {
        const newBad = bad + 1
        setBad(newBad)
    }

    const handleNeutral = () => {
        const newNeutral = neutral + 1
        setNeutral(newNeutral)
    }


    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <Button onClick={handleGood} text='good' />
                <Button onClick={handleNeutral} text='neutral' />
                <Button onClick={handleBad} text='bad' />
            </div>
            <h1>statistics</h1>
            <Statistics stats={[good, neutral, bad]} />
        </div>
    )
}

export default App
