import Head from "next/head"
import { useTranslation } from "next-i18next";

const Meta = ({title,descr}) => {

    const {t} = useTranslation("meta");

    return (
        <Head>
            <title>{title?title:t("title")}</title>
            <meta name="description" content={descr?descr:t("descr")} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
      </Head>
    )
}

export {Meta}