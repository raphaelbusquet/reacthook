import { useEffect, useState } from 'react'

const HookUseEffect = () => {
    // 1- useEffect sem dependências (será executado toda vez que o componente for re-renderizado)
    useEffect(() => {
        console.log('Estou sendo executado')
    })

    const  [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    // 2- Array de dependências vazio (será executado apenas uma vez)
    useEffect(() => {
        console.log('Estou sendo executado apenas uma vez')
    }, [])

    // 3- Array de dependências com valor (será executado quando algo específico for mudado)

    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if (anotherNumber > 0) {
            console.log('Mudei o number ')
        }
    }, [anotherNumber])

    // 4 - Clean up do useEffect    
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Timer!')
        }, 2000)

        return () => clearTimeout(timer)
    }, [anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Número: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>
        <hr />
    </div>
  )
}

export default HookUseEffect