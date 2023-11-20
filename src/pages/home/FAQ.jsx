import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

function FAQ({question, answer}) {
    const [showAnswer, setShowAnswer] = useState(false)

  return (
    <article 
    className="faq"
    onClick={() => setShowAnswer(prevState => !prevState)}
    >
        <div>
        <h4>{question}</h4>
        <button className="faq__btn">
            {
                showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />
            }
        </button>
        </div>
        {
            showAnswer && <p>{answer}</p>
        }
    </article>
  )
}

export default FAQ