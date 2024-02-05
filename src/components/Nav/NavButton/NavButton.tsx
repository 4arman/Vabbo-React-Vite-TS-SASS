import './NavButton.scss'

export default function NavButton({ children, isActive, onClick }) {
    return (
        <button
        onClick={ onClick }
        type='button'
        className={ isActive ? 'btn active' : 'btn' }
        >
            { children }
        </button>
    )
}