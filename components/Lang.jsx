import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react"

const Lang = () =>{

    const [open,setOpen] = useState(false);

    const {i18n} = useTranslation();

    const langArr = [
        {name: 'English', k:"en"},
        {name: 'Українська', k:"uk"},
        {name: 'Русский', k:"ru"},
        {name: 'Español', k:"es"},
        {name: 'Italiano', k:"it"},
        {name: 'Ελληνικά', k:"gr"},
        {name: 'Polski', k:"pl"}
    ];

    useEffect(()=>{
        const handleClick = (e) =>{
            setOpen(false);
        }
        // Додаємо глобальний слухача кліку на всьому документі
        document.addEventListener('click', handleClick);

        // Прибираємо слухача після розмонтажу компонента
        return () => {
            document.removeEventListener('click', handleClick);
        };
    })

    const router = useRouter();

    const handleOpen = e =>{
        e.stopPropagation();
        setOpen(state=>!state);
    }

    const changeLanguage = (e,locale) => {
        e.preventDefault();
        e.stopPropagation();
        i18n.changeLanguage(locale);
        router.push(router.pathname, router.pathname, { locale });
        setOpen(false);
    };

    const lang = i18n.language ? i18n.language : "en";

    const langName = langArr.filter(item => item.k == lang)[0].name;

    return (
        <div className='header_lang _cursor' onClick={e=>handleOpen(e)}>
            <span>{langName}</span>
            <div className={`lang ${open? "_open" : ""}`}>
                {langArr.map((item,key)=>
                    <a href={`/${item.k}`} key={key} onClick={e=>changeLanguage(e,item.k)} className='lang-item'>{item.name}</a>
                )}
            </div>
        </div>
    )
}

export {Lang}