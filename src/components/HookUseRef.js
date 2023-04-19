import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {
    // 1- useRef
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    // 2- useRef com DOM
    const inputRef = useRef()
    const [text, setText] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value) // Manda o input para o console
        setText('') // Limpa o texto do input

        inputRef.current.focus() // Foca no input logo após o click
    }

  return (
    <div>
        <h2>useRef</h2>
        {/* useRef */}
        <p>O componente renderizou: {numberRef.current} vezes.</p>
        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Contador A</button>
        <p>Counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
        <br />
        {/* useRef e DOM */}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
        <hr />
    </div>
  )
}

export default HookUseRef