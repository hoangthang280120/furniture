import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ChatIcon from '@mui/icons-material/Chat';
import PlaceIcon from '@mui/icons-material/Place';
const Contact =()=>{
    return(
        <div className='contact-div'>
            <div className='flex flex-col items-center'>
                <div className="contact-circle phone-ring">
                    <PhoneInTalkIcon/>
                </div>
                <p>Gọi Hotline</p>
            </div>
            <div className='flex flex-col items-center mt-3'>
                <div className="contact-circle bg-blue-600">
                    <ChatIcon/>
                </div>
                <p>Nhắn tin</p>
            </div>
            <div className='flex flex-col items-center mt-3'>
                <div className="contact-circle bg-orange-500">
                    <PlaceIcon/>
                </div>
                <p>Tìm đường</p>
            </div>
        </div>
    )
}
export default Contact