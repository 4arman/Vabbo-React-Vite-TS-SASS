import './SecondBlock.scss'

export default function SecondBlock({ children, imgClass }) {
    return (
        <div 
        className={ 'home-second-block home-second-block-' + `${ imgClass }` }>
            { children }
        </div>
    )
}