import { Footer } from "./Footer"
import { Header } from "./Header"
import { Messager } from "./Messager"
import { Modal } from "./Modal"

const Layaut = ({children}) => {
    return (
        <div className='main'>
            <Header/>
            <div className="content">{children}</div>
            <Footer/>
            <Messager/>
            <Modal/>
        </div>
    )
}

export {Layaut}