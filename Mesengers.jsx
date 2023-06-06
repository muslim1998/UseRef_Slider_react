//Тут мы будем работать через useRef

import { useRef, useState } from "react"
import './style.css'

const friends = [
    'Marlen','Vlad','Misha'
]

export function Mesenger() {
    // const [friend, setFriend] = useState() 
    // friend - константа
    // setFriend - это грубо говоря константа для REACT, что бы он увидел
    // const [text, setText] = useState('')
    // const [fullText, setFullText] = useState('')
    const [status, setStatus] = useState();
    const friendRef = useRef()
    const textRef = useRef()
    const fullTextRef = useRef()


    
    const onSubmit = (e) => {
        e.preventDefault();

        console.log('Form:', {
            friend: friendRef.current.value,
            text: textRef.current.value,
            fullText: fullTextRef.current.value,
        });

        setStatus('pending')

        setTimeout(() => {
            setStatus('done')
        },2000)

    }

    console.log('rendirinng')

    if (status === 'pending') {
        return <div className="container">Setting...</div>
    }
    if (status === 'done') {
        return <div className="container">Your messege is sent </div>
    }

    return <div className="container">
        
        <form onSubmit={onSubmit}>

            <div className="flex">
                <label htmlFor="friends">
                    Please choose your friend from the list
                </label>
                <select
                    ref={friendRef}
                    id="friends">
            
                    {friends.map((f, index) => {
                        return <option key={index}>{f}</option>
                    })}
                </select>
            </div>
        
            <div className="flex">
                <label htmlFor="text">Your title</label>
                <input
                    id="text"
                    placeholder="Your title"
                    type="text"
                    name="next"
                    ref={textRef}
                    
                />
            </div>

            <div className="flex">
                <label htmlFor="fullText">Your full text</label>
                <textarea
                    id="fullText"
                    placeholder="Enter your full text"
                    ref={fullTextRef}>
                    
                </textarea>
            </div>

            <button type="submit">Send</button>

        </form>
    </div>
}
export default Mesenger