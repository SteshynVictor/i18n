import { useTranslation } from "next-i18next"
import Image from "next/image";

const Banner = () =>{

    const {t} = useTranslation();

    return (
        <div className="banner">
          <div className='banner_inner _inner'>
            <div className="banner_content">
              <div className="banner_left">
                <div className="banner_title">
                  <div>{t("home.title")}</div>
                  <div className='_white'>{t("home.revolution")}</div>
                </div>
                <div className='banner_more _cursor'>{t("home.more")}</div>
                <div>
                  <div className='button _white' onClick={()=>dispatch(show())}>{t("home.take")}</div>
                </div>
              </div>
              <div className="banner_right">
                <div className="banner_app">
                  <div className="banner_item">
                    <Image src="/img/app_company.png" fill={true} sizes='(max-width:768px) 50vw,100vw' className="banner_img" alt="Dish menu app"/>
                  </div>
                  <div className="banner_item">
                    <Image src="/img/app.png" fill={true} sizes='(max-width:768px) 50vw,100vw' priority={true} alt="Dish menu app" className="banner_img"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export {Banner}