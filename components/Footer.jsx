import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "next-i18next";

const Footer = () => {

    const {t} = useTranslation();

    return (
        <div className='footer'>
          <div className='_inner'>
            <div className='footer-content'>
              <div className='footer-left'>
                <div className='footer-logo'>
                  <Image src="/img/logo_white.png" fill={true} alt="QR menu logo"/>
                </div>
                <div className='footer-copy'>© 2023 Dish menu quide</div>
              </div>
              <div className='footer-right'>
                <div className='footer-menu'>
                  {/* <Link href="">Правила та конфіденційність</Link> */}
                  <Link href="/contacts">{t("footer.contacts")}</Link>
                  <Link href="/policy">{t("footer.rules")}</Link>
                </div>
                <div className='footer-mail'><a href="mailto:help@dishmenu.guide" target='_blanck' className='_yel'>help@dishmenu.guide</a></div>
              </div>
            </div>
          </div>
        </div>
    )
}

export {Footer}