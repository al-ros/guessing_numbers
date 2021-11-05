import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom";


const EnterName = () => {
    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const inputEl = useRef(null)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setValue('');
        setName(value)
    }

    const handleInputTargetChange = (e) => {
        setValue(e.currentTarget.value)
    }

    useEffect(() => {
        inputEl.current.focus();
    }, [])


    return (
        <div>
            {name
                ? 
                <div>
                    <h1>Hello {name}!</h1>
                    <h3>Shall we continue?</h3>
                    <Link to="/SelectRange">
                        <button>Hell yea!</button>
                    </Link>
                    <Link to="/">
                        <button>Maybe next time. I'm too tired, I want home...</button>
                    </Link>
                </div>
                :
                <div>
                    <h3>Let's get to know each other better! Enter your name:</h3>
                    <form onSubmit={handleFormSubmit} action="">
                        <input ref={inputEl} value={value} onChange={handleInputTargetChange} placeholder="My name is..."/>
                        <button disabled={!value.trim()}>Ok</button>
                     </form>
                </div>
            }


            
        </div>
    )
}

export default EnterName