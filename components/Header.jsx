import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Lang } from './Lang';
import { useDispatch } from 'react-redux';

import {show} from "@/redux/modal/modalSlice";
import { Menu } from './Menu';

const Header = () =>{

    const {t} = useTranslation();

    const [menu,setMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // const handleScroll = () => {
    //     if (window.scrollY >= 160) {
    //         setScrolled(true);
    //     } else {
    //         setScrolled(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    const dispatch = useDispatch();

    return (
        <div className={`header-block ${scrolled?"_active":""}`}>
            <div className='ukraine'>
                <div className='_inner _center'>
                    🇺🇦 {t('header.ukraine')} <a href="https://war.ukraine.ua" target='_blank'>war.ukraine.ua</a>
                </div>
            </div>

            <div className='_inner'>
                <div className="header">
                    <div>
                    <div className='header_menu_icon' onClick={()=>setMenu(state=>!state)}></div>
                    </div>
                    <div className="header_logo_block">
                    <Link href="/" className="header_logo">
                        <Image src="/img/logo.png" fill={true} alt="QR menu logo"/>
                    </Link>
                    </div>
                    <div className={`header_menu ${menu ? "_active" : ""}`}>
                    <Menu/>
                    <div className='header_menu_close' onClick={()=>setMenu(state=>!state)}></div>
                    </div>
                    <div className='header_icons'>
                    <div className='header_account _cursor' onClick={()=>dispatch(show())}><span>{t("header.account")}</span></div>
                    <Lang/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Header}