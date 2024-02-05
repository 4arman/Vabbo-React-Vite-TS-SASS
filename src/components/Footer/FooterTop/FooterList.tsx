import './FooterList.scss'

export default function FooterList({ listTitle, listContent1, listContent2, listContent3, listContent4, }) {
    return (
        <li className='footer-list'>
            <div className="footer-list-title-container">
                <ul className='footer-list-title'>{ listTitle }</ul>
            </div>
            <ul>{ listContent1 }</ul>
            <ul>{ listContent2 }</ul>
            <ul>{ listContent3 }</ul>
            <ul>{ listContent4 }</ul>  
        </li>
    )
}