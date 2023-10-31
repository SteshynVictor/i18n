import Image from 'next/image'
//import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react"

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

// const inter = Inter({ subsets: ['latin'] }) 
//className={inter.className}

import {show} from "@/redux/modal/modalSlice";
import { useDispatch } from 'react-redux';
import { Meta } from '@/components/Meta';
import { Banner } from '@/components/Banner';

export default function Home() {

  const {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <>

        <Meta/>
    
        <Banner/>

        <div className='_inner'>
          <div className='banner_qr'>
              <div className='banner-icon'>
                <div><Image src="/img/qr.png" width={100} height={100} alt="QR scan"/></div>
                <div>{t("home.scan")}</div>
              </div>
              <div style={{flex:4}}>

              </div>
          </div>
        </div>
        
        <div className='_inner _small'>
          <div id="about" className='about _center'>
            <h1 className='title'>{t("home.about.title")}</h1>
            <br/>
            <div>{t("home.about.text")}</div>
          </div>
        </div>

        <div className='background'></div>

        <div className='_inner'>
          <div>
            <h1 className='title _center _big'>{t("home.fun.title")}</h1>
            <div className='advant'>
              {t("home.fun.list",{ returnObjects: true }).map((item,key) => 
                <div className='advant_item _view' key={key}>
                  <div className='advant_title'>{item.title}</div>
                  <div>{item.text}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='_inner'>
          <div id="price" className='price'>
            <h1 className='title _center _big'>{t("home.price.title")}</h1>
        
            <div className='price_slider'>
              <Swiper 
                  breakpoints={{
                      1000: {
                        slidesPerView: 3,
                      },
                      768: {
                          slidesPerView: 2
                      }
                  }}
                  spaceBetween={30}
                  initialSlide={1}
                  slidesPerView={1}>

                  {t("home.price.list",{ returnObjects: true }).map((item,key)=>
                      <SwiperSlide key={key}>
                          <div className={`price_item ${key === 1 ? "_active" : ""}`} onClick={()=>dispatch(show(`${item.price}`))}>
                            <div className='price_block'>
                              <div className='price_title'>{item.title}</div>
                              <div className='price_val'><span>$</span>{item.price}</div>
                              <div>{item.period}</div>
                            </div>
                            <div className='_center'>{item.total}</div>
                          </div>
                      </SwiperSlide>
                  )}
              </Swiper>

            </div>

          </div>

          <div className='period'>
            <div className='title _center _big'>{t("home.price.free.title")}</div>
            <div className='_inner _vsmall _center'>
              <div>{t("home.price.free.text")}</div>
            </div>
            <div className='_center'>
              <div className="button _yellow" onClick={()=>dispatch(show('free'))}>{t("home.take")}</div>
            </div>
          </div>
        </div>


        <div className='function_background'>
          <div className='_inner'>
            <div className='title _center _big'>{t("home.mod.title")}</div>
            <div>
              <ul className='functions'>
                {t("home.mod.list",{ returnObjects: true }).map((item,key)=><li key={key}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className='_inner'>
          <div id="qa" className='question_block'>
            <div className='title _center _big'>{t("home.quest.title")}</div>
            
            <div className='question'>

                {t("home.quest.list",{ returnObjects: true }).map((item,key)=>
                  <div className={`question_item ${item.active? "_active":""}`} key={key}>
                    <h2>{item.title}</h2>
                    <div>{item.text}</div>
                  </div>
                )}

            </div>
            
          </div>
        </div>

        <div className='message'>
          <div className='_inner'>
            <div className='title _small _center'>{t("home.bottom")}</div>
          </div>
        </div>

    </>
  )
}

export async function getStaticProps(context) {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}