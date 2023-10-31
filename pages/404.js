import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation} from "next-i18next";

const page404 = () =>{

    const {t} = useTranslation();

    return (
        <div className="page404">
            <div className='_title'>404</div>
            <div>Not Found {`:(`}</div>
            <div className='_small'>Can’t find the requested resource</div>
        </div>
    )
}

export default page404;

export async function getStaticProps(context) {
    const { locale } = context
    return {
        props: {
        ...(await serverSideTranslations(locale)),
        },
    }
}