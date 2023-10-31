import { useState } from "react";
import { useTranslation, Trans} from "next-i18next";

import {send} from "@/redux/modal/modalSlice";
import { useDispatch, useSelector} from "react-redux";
import Link from "next/link";

import useAxios from "@/hook/useAxios";

const Regedit = () =>{

    const axios = useAxios();

    const {i18n,t} = useTranslation();
    const price = useSelector((state)=>state.modal.price);

    const lang = i18n.language;

    const [modal,setModal] = useState({
        name:"",
        resname:"",
        mail:"",
        pas:""
    });

    const dispatch = useDispatch();

    const sendForm = () =>{
        dispatch(send());
        axios.post('/site/reg',{...modal,lang:lang,price:price});
    }

    const handleInput = e => {
        const key = e.target.name;
        modal[key] = e.target.value;
        setModal({...modal});
    }

    return (
        <form autoComplete="off">
            <div className="modal-title">{t("modal.title")}</div>
            <div className="modal-form">
                <div>
                    <label>{t("modal.name")}</label>
                    <div>
                        <input name="name" value={modal.name} onChange={handleInput}/>
                    </div>
                </div>
                <div>
                    <label>{t("modal.resname")}</label>
                    <div>
                        <input name="resname" value={modal.resname} onChange={handleInput}/>
                    </div>
                </div>
                <div>
                    <label>{t("modal.mail")}</label>
                    <div>
                        <input name="mail" value={modal.mail} onChange={handleInput}/>
                    </div>
                </div>
                <div>
                    <label>{t("modal.pas.name")}</label>
                    <div>
                        <input type="password" name="pas" value={modal.pas} onChange={handleInput}/>
                    </div>
                </div>
                <div className="button _black" onClick={()=>sendForm()}>{t("modal.create")}</div>
                {/* <div className="_center">або <div className="modal-enter" onClick={()=>setReg(false)}>Увійти</div></div> */}
                <div className="modal-rules">
                <Trans i18nKey="modal.rule" t={t} components={{linkTag: <LinkText href="/policy"/>}} />
                </div>
            </div>
        </form>
    )
}

export {Regedit}

const LinkText = ({ href, children,hide}) =>{
    return <Link href={href || ''} target="_blank">{children}</Link>;
}