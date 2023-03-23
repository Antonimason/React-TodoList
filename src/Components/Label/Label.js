import './Label.css'

function Label (props) {

    return (
        <div className="label--container">
            <div className={`circle ${props.color}`}>
            </div>
        </div>
    )
} 

export default Label