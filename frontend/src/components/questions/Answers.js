import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import './Answers.scss'

export const Answers = (props) => {
  return (
    <div className="question-container">
			<p className="question-text-container">
				{ props.question }
				<span className="blue-anchor">Denunciar</span>
			</p>

			{ props.answer &&
				<div className="answer-container">
					<BsArrowReturnRight className="answer-arrow" />

					<div className="answer-text-container">
						<span>{ props.answer }</span>
						<span className="answer-date">{ props.answerDate }</span>
						<span className="blue-anchor">Denunciar</span>
					</div>
				</div>
			}
		</div>
  )
}
