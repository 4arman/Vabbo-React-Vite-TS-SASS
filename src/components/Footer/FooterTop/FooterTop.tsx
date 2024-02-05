import './FooterTop.scss'
import FooterList from './FooterList'
import FooterTopLeftBlock from './FooterTopLeftBlock'

export default function FooterTop() {
    return (
        <footer className='footer-top'>
            <div className='footer-top-container'>
                <FooterTopLeftBlock />

                <FooterList 
                listTitle={ 'Модели' }
                listContent1={ 'Кресла' }
                listContent2={ ' Стулья ' }
                listContent3={ 'Столы' }
                listContent4={ 'Диваны' }
                />

                <FooterList 
                listTitle={ 'Информация' }
                listContent1={ 'Видеобзор' }
                listContent2={ 'Процесс Оплаты' }
                listContent3={ 'Рассрочка' }
                listContent4={ 'Доставка' }
                />

                <FooterList 
                listTitle={ 'VABBO' }
                listContent1={ 'О нас' }
                listContent2={ 'Контакты' }
                listContent3={ 'Отзывы' }
                listContent4={ 'Места' }
                />
            </div>
        </footer>
    )
}