import { useState } from 'react';
import {sample} from 'lodash';
import "./EightBall.css"

const baseAnswers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/** Ask the Magic EightBall a question and returns an answer
 * Props:
 * -answers (an array of objects with msg and color)
 *
 * State:
 * -answer: obj with msg and color
 *
 * App -> Eightball
 */
function EightBall({answers = baseAnswers}) {
    const [answer, setAnswer] = useState({color:"black", msg:"Think of a question"});

    function handleClick() {
        const randoAnswer = sample(answers);
        setAnswer(randoAnswer);
    }

    return (
        <div className='EightBall'>
            <div className='EightBall-ball' onClick={handleClick} style={{backgroundColor:answer.color}}>
                {answer.msg}
            </div>
        </div>
    )
}


export default EightBall;