import './LoginNextButton.scss'

export default function LoginNextButton({ content, onClick }) {
    return (
        <div className="login__next-btn-container">
            <button
            type="button"
            className="login-next-btn"
            onClick={ onClick }
            >
                { content }
            </button>       
        </div>
    )
}