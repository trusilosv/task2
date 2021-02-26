import './appFooter.css'
import Telegram_logo from './telegram_logo.png'
import TelegramForm from '../telegramForm'
import{ useState } from 'react'
function AppFooter() {
    const [count, setCount] = useState(false)
    return ( 
    <footer>
        <button type='button'  className = 'telegramLogo'
        onClick = { 
            () =>setCount(count?false:<TelegramForm/>)}
           >
        < img src = { Telegram_logo }
        alt = 'Telegram_logo'>
        </img> 
        </button> 
        {count}
        </footer> 
    
    )
}

export default AppFooter;