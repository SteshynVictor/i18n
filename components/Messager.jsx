import { useState } from 'react';

const Messager = () =>{

    const [open,setOpen] = useState(false);

    return (
        <div className={`${open ? "_active" : ""} messager`}>
            <div className="messager-block">
                <a href={`https://t.me/+${process.env.PHONE}`} className="messager-icon _tg" target="_blank" rel="nofollow"></a>
                <a href={`https://wa.me/${process.env.PHONE}`} className="messager-icon _wa" target="_blank" rel="nofollow"></a>
                <a href={`tel:+${process.env.PHONE}`} className="messager-icon _ph" target="_blank" rel="nofollow"></a>
            </div>
            <div className="messager-main" onClick={()=>setOpen(state=>!state)}></div>
        </div>
    )
}

export {Messager}