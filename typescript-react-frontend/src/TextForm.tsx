import React, { useState } from 'react'

function TextForm() {
    const [inputData, setInputData] = useState('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value);
    }
    return (
        <div>
            {inputData}
            <hr />
            <input
                type="text"
                value={inputData}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default TextForm
