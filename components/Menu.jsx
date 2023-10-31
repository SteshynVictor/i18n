import { useTranslation } from "next-i18next"
import Link from "next/link"

const Menu = () =>{
    const {t} = useTranslation("menu");
    return (
        <div className='header_menu_block'>
            <Link href="/#about">{t("about")}</Link>
            <Link href="/#price">{t("price")}</Link>
            <Link href="/#qa">{t("qa")}</Link>
        </div>
    )
}

export {Menu}