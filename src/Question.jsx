import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
    const [buttonName,setButtonName] = useState("+");
    const handleToggle = () => {
        return buttonName === "+" ? setButtonName("-") : setButtonName("+");


    }

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button onClick={handleToggle} className="btn">{buttonName}</button>
			</header>
			{/* make this render conditionally */}
			<p>{buttonName === "-" && info}</p>
		</article>
	)
}

export default Question
