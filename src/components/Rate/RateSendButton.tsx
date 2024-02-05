import './RateSendButton.scss'

export default function RateSendButton({ children }) {
    return (
        <button 
        className='rate-send-btn'
        type='button'>{ children }</button>
    )
}