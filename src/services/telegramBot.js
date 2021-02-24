
const _chatid = "@drefersa",
_token = "1654383936:AAHwBWuFio3Mp8VM80gsXDI9cqNJelxExZQ"
export default function TelegrammSendMessage(text){
fetch(`https://api.telegram.org/bot${_token}/sendMessage?chat_id=${_chatid}&text=${text}`) 
}