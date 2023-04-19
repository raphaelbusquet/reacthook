import { useState } from 'react'

const HookUseState = () => {
    // useState
    let userName = "João"
    const [name, setName] = useState("Matheus")

    const changeNames = () => {
        userName = "João Souza"

        setName('Matheus Battisti')
    }

    // useState com Inputs
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()

        // Envio a uma API por exemplo
        console.log(age)
    }

  return (
        <div>
        {/* useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar Nomes!</button>
        <br />
        {/* useState com Inputs */}
        <p>Digite a sua idade</p>
        <form onSubmit={handleSubmit}>
            <input type="text"  value={age} onChange={(e) => setAge(e.target.value)} 
            />
            <input type="submit" value="Enviar" />
        </form>
        <p>Você tem {age} anos.</p>
        <hr />
    </div>
  )
}
 
export default HookUseState