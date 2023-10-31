import { useTranslation } from "next-i18next";

const Enter = () =>{

    const {t} = useTranslation();

    return (
        <>
            <div className="modal-title">{t("modal.enter.title")}</div>
            <div className="modal-form">
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
                <div className="button _black" onClick={()=>sendForm()}>{t("modal.enter.button")}</div>
                <div className="_center"><div className="modal-enter">{t("modal.enter.recovery")}</div> 
                <div className="modal-enter">{t("modal.title")}</div></div>
                <div className="modal-rules"></div>
            </div>
        </>
    )
}

export {Enter}