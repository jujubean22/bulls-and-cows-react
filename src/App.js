import './App.css';
import { useEffect, useState } from "react"
import $ from 'jquery'

function App() {
    let bull = 0
    let cow = 0
    let [guess, setGuess] = useState('')
    const guessArr = guess.toString().split('')
    const [RandomizedNum, setRandomizedNum] = useState('')

    
    useEffect(() => {
        setRandomizedNum(validateRandomNum ())
    }, [])

    const validateRandomNum  = () => {
        const randNum = Math.floor(Math.random() * 9000 + 1000)
        if (checkUnique(randNum)){
            return randNum.toString()
        } else return validateRandomNum
    }
    const checkUnique = (num) => {
        return !/(.).*?\1/.test(num)
    }

    const toGuess = (e) => {
        e.preventDefault()
        const splitRandNum = RandomizedNum.split('')
        for (let i = 0; i < guessArr.length; i++){     
            if(guessArr[i] === splitRandNum[i] && guessArr.includes(splitRandNum[i])
            ){
                bull++
            } else if (guessArr.includes(splitRandNum[i])){
                cow++
            }
        }
            if(bull===4){
                $('#historyLogs').prepend(`${guess}\t\tbulls =${bull}\t\tcows =${cow} YOU WIN! \r\n`)
                } { $('#historyLogs').prepend(`${guess}\t\tbulls =${bull}\t\tcows =${cow} \r\n`) 
                setGuess('')
                }
            
    } 

return (
<div className="container">
    <h1 className="Header">Bulls & Cows</h1>
    <div>
    <h3>Try guessing the secret number</h3>{RandomizedNum}
    <form onSubmit={toGuess}>
        <input 
        className='number'
        pattern="[0-9]+"
        type="text"
        value={guess}
        maxLength = '4'
        onChange={(e) => setGuess (e.target.value)}
        minLength = '4'
        required
        />
        <input 
        className='submit'
        type="submit" 
        value='Guess'
        
        />
    </form>
    </div>
    <textarea name="historyLogs"  id="historyLogs" cols="15" rows="15" ></textarea>
</div>
);
}

export default App
