import '../Style/Contact.css';
import printSvg from './PrintSvg';
import email from '../Assets/email.svg'

const emailsvg = printSvg(email, 'email_svg','75' )

function Contact() {
    return( 
    <section className="contact-container" >
    <h2 className='contactHead'>Contact</h2>
    <div className="contact-b">
        <div className="contact-box-inner">
            <div className="box-front">{emailsvg}</div>
            <div className="box-back"><br></br><br></br>Louis.aubert27000@Gmail.com</div>
        </div>
    </div>
   
    </section> )
    
}

export default Contact