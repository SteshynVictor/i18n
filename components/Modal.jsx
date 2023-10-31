import { useTranslation,} from "next-i18next"
import { useDispatch, useSelector } from "react-redux";
import {show} from "@/redux/modal/modalSlice";
// import { Enter } from "./Modal/Enter";
import { Regedit } from "./Modal/Regedit";

const Modal = () =>{

    const {t} = useTranslation();

    const showModal = useSelector((state)=>state.modal.show);
    const wasSend = useSelector((state)=>state.modal.send);
    const dispatch = useDispatch();

    return (
        showModal?<div className="modal-shadow" onClick={()=>dispatch(show())}>
            <div className="modal" onClick={e=>e.stopPropagation()}>
                <div className="modal-block">
                    {!wasSend?
                    <Regedit/>
                    :<div>
                        <div className="modal-title _center">{t("modal.send.title")}</div>
                        <div className="_center">{t("modal.send.text")}</div>
                    </div>}
                    <div className="modal-close" onClick={()=>dispatch(show())}>✕</div>
                </div>
            </div>
        </div>:""
    )
}

export {Modal}