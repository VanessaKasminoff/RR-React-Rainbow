import React, {useState} from 'react'

function ColorForm(props) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (props.validColor(input)) {
            props.addColor(input)
            e.target.reset()
        } else {
            alert(input + ' is not a valid color! Please enter a valid color.')
        }
    }

    return (
        <div className='color-form-submit'>
            <form onSubmit={handleSubmit}>
                <input className='form-control' type='text' onChange={(e) => setInput(e.target.value)} />
                <button className='btn btn-dark' type='submit'>Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm