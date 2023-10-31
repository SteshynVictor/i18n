import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import { Meta } from '@/components/Meta';

const Contacts = () => {

    const {i18n,t} = useTranslation('rules');

    const lang = i18n.language || 'en';

    return (
        <>
            <Meta title={t("meta.title")} descr={t("meta.descr")}/>
            <div className='rules'>
                <div className='_inner'>
                    <h1 className="title _center">{t("title")}</h1>
                    <div>
                        {lang === 'uk'?
                        <ul>
                            <li>Загальні положення</li>
                            <br/>1.1. Ці Умови використання (далі - "Умови") регулюють використання вами сайту "Dish menu guide" (далі - "Сайт"). Використовуючи Сайт, ви погоджуєтеся з цими Умовами та зобов'язуєтеся їх дотримуватися. Якщо ви не погоджуєтеся з цими Умовами, будь ласка, припиніть використання Сайту.
                            <br/>1.2. Адміністрація Сайту залишає за собою право змінювати ці Умови в будь-який момент без попереднього повідомлення. Зміни набувають чинності з моменту їх опублікування на Сайті. Продовжуючи використовувати Сайт після внесення змін, ви погоджуєтеся з оновленими Умовами.
                            
                            <li>Використання матеріалів Сайту</li>
                            <br/>2.1. Матеріали, які розміщені на Сайті (тексти, зображення, відео, тощо), призначені виключно для особистого некомерційного використання. Ви можете переглядати, завантажувати та друкувати ці матеріали за умови, що ви не порушуєте авторські права та інші права на інтелектуальну власність.
                            <br/>2.2. Заборонено копіювати, редагувати, публікувати, розповсюджувати, передавати або інакше використовувати матеріали Сайту без попереднього письмового дозволу адміністрації Сайту або власників авторських прав.

                            <li>Користувацька поведінка</li>
                            <br/>3.1. Під час використання Сайту ви зобов'язані дотримуватися законів та норм моралі, не розміщувати образливий, незаконний, агресивний або небажаний контент.
                            <br/>3.2. Заборонено використовувати Сайт для незаконних дій або обходу захисних заходів Сайту.

                            <li>Відповідальність</li>
                            <br/>4.1. Сайт надається "як є". Адміністрація Сайту не несе відповідальності за можливі збитки, які можуть виникнути внаслідок використання Сайту або надання неправильної інформації.
                            <br/>4.2. Сайт може містити посилання на інші сайти, які належать третім особам. Адміністрація Сайту не несе відповідальності за вміст і дії таких сайтів.

                            <li>Заключні положення</li>
                            <br/>5.1. Ці Умови є єдиними між вами та адміністрацією Сайту щодо використання Сайту.
                            <br/>5.2. В разі конфлікту між цими Умовами та іншими документами або угодами, діють ці Умови.
                            <br/>5.3. Усі спори та розбіжності, що виникають у зв'язку з використанням Сайту, вирішуються в судовому порядку згідно з чинним законодавством.
                        </ul>:<ul>

                            <li>General Provisions</li>
                            <br/>1.1. These Terms of Use (hereinafter referred to as "Terms") govern your use of the website "Dish Menu Guide" (hereinafter referred to as the "Site"). By using the Site, you agree to these Terms and commit to abide by them. If you do not agree with these Terms, please discontinue using the Site.
                            <br/>1.2. The Site's administration reserves the right to modify these Terms at any time without prior notice. Changes take effect upon their publication on the Site. By continuing to use the Site after such changes, you agree to the updated Terms.
                            
                            <li>Use of Site Materials</li>
                            <br/>2.1. The materials posted on the Site (texts, images, videos, etc.) are intended solely for personal, non-commercial use. You may view, download, and print these materials provided you do not infringe upon copyright and other intellectual property rights.
                            <br/>2.2. Copying, editing, publishing, distributing, transmitting, or otherwise using the materials from the Site without prior written permission from the Site's administration or the copyright owners is prohibited.

                            <li>User Behavior</li>
                            <br/>3.1. While using the Site, you are obligated to comply with laws and moral standards and refrain from posting offensive, unlawful, aggressive, or unwanted content.
                            <br/>3.2. Using the Site for unlawful actions or circumventing the Site's protective measures is prohibited.

                            <li>Liability</li>
                            <br/>4.1. The Site is provided "as is." The Site's administration is not responsible for any potential damages that may result from using the Site or providing inaccurate information.
                            <br/>4.2. The Site may contain links to other websites owned by third parties. The Site's administration is not responsible for the content and actions of such websites.

                            <li>Final Provisions</li>
                            <br/>5.1. These Terms constitute the entire agreement between you and the Site's administration regarding the use of the Site.
                            <br/>5.2. In the event of a conflict between these Terms and other documents or agreements, these Terms prevail.
                            <br/>5.3. All disputes and discrepancies arising from the use of the Site are resolved through legal proceedings in accordance with the applicable legislation.
                        </ul>}
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