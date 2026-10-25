import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const ShowAnecdote = ({ anecdotes, votes, selected }) => {
    return (
        <div>
            {anecdotes[selected]}
            <br />
            has {votes[selected]} votes
        </div>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const len = anecdotes.length

    const [selected, setSelected] = useState(0)
    const [votes, setVoted] = useState(new Array(len).fill(0))
    const [max, setMax] = useState(0)
    const [maxselect, setMaxselect] = useState(0)

    const handleSelected = () => {
        const newSelected = Math.floor(Math.random() * len)
        setSelected(newSelected)
    }

    const handleVoted = () => {
        const copy = { ...votes }
        copy[selected] += 1
        if (copy[selected] > max) {
            setMaxselect(selected)
            setMax(copy[selected])
        }

        setVoted(copy)
    }


    return (
        <div>
            <div>
                <h1>Anecdote of the day</h1>
                <ShowAnecdote anecdotes={anecdotes} votes={votes} selected={selected} />
                <div>
                    <Button onClick={handleVoted} text='vote' />
                    <Button onClick={handleSelected} text='next anecdote' />
                </div>
            </div>
            <div>
                <h1>Anecdote with most votes</h1>
                <ShowAnecdote anecdotes={anecdotes} votes={votes} selected={maxselect} />
            </div>
        </div >
    )
}

export default App
