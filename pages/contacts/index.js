import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import { Meta } from '@/components/Meta';

const Contacts = () => {

    const {t} = useTranslation("contacts");

    return (
        <>
            <Meta title={t("meta.title")} descr={t("meta.descr")}/>
            <div className='contacts'>
                <div className='_inner'>
                    <h1 className="title _center">{t("title")}</h1>
                    <div className='_inner _small _center'>
                        <div className='contacts-text'>{t("text")}</div>
                        <div className='contacts-icons'>
                        <a href={`https://m.me/${process.env.FB}`} target="_blank" rel="nofollow">
                            <div className='contacts-ico _ms'></div>
                            <div>{t("mes.ms")}</div>
                        </a>
                        <a href={`https://wa.me/${process.env.PHONE}`} target="_blank" rel="nofollow">
                            <div className='contacts-ico _wa'></div>
                            <div>{t("mes.wa")}</div>
                        </a>
                        <a href={`https://t.me/+${process.env.PHONE}`} target="_blank" rel="nofollow">
                            <div className='contacts-ico _tg'></div>
                            <div>{t("mes.tg")}</div>
                        </a>
                    </div>
                    <div className='contacts-mail'>
                        <div>{t("email")}</div>
                        <div className='contacts-line'></div>
                        <div><a href="mailto:help@dishmenu.guide" target='_blank'>help@dishmenu.guide</a></div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts

export async function getStaticProps(context) {
    const { locale } = context
    return {
        props: {
        ...(await serverSideTranslations(locale)),
        },
    }
}