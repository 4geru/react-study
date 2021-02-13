import { useState } from 'react';

export const Form = ({ onAddLang }) => {
    const [text, setText] = useState('')
    const [disabledForm, setDisabledForm] = useState('')

    const submitForm = (event) => {
        onAddLang(text);
        event.preventDefault();
    }
    return (
        <div>
            <h4>新しい言語の追加</h4>
            <form onSubmit={submitForm}>
                <div>
                    <input
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        disabled={disabledForm}
                    />
                </div>
                <div>
                    <button>追加</button>
                </div>
            </form>
            <button onClick={() => setDisabledForm(!disabledForm)}>disabled</button>
        </div>
    )
}