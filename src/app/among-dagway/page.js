import Link from 'next/link';
import '../styles.css'

export default function Profile() {
    const pictureJaymar = "https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/41063132_2060509997612390_3411491917622411264_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGjC3CYOLdwN5rTnc3LtaPPYM1g3uFe1rxgzWDe4V7WvEN0XStuciYb-j57GAfzFnUXi6CnjMc6OtOBXq9pzpSg&_nc_ohc=9uns3F8hvBgQ7kNvgFxLmNV&_nc_ht=scontent.fcgy1-1.fna&oh=00_AYAnTqI9Hi80MjdPwizpb8D9GJqHhZQxn5HUdqv_9zDHOw&oe=669934B0";
    const pictureAhrrol = "https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/428395493_942694430750753_2717892848622836247_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEO2cLxndBJPUOCdkFaZqOAXQKaG6PTV7ZdApobo9NXtjwNlL939c1FknfMXju5uzeF95KUBB51bgZxAp0QyKDK&_nc_ohc=ciq_JLOb9zcQ7kNvgGhTDnF&_nc_ht=scontent.fcgy1-1.fna&oh=00_AYAZf_TnDRzq2vipz_vltrxfXA3zjYABhSucDeBzPCswkQ&oe=667788EC";
    const pictureKyle = "https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.18169-9/294634_171601029642447_2103696579_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEPnmTjk6EdN765N9AXzUV8ZJIfE28RUWpkkh8TbxFRalAPLOa0CcWZJ39XT10t_i-6RKq76xYyP3OY78XWNeUt&_nc_ohc=kATXxcp-FgwQ7kNvgEvj99I&_nc_ht=scontent.fcgy1-1.fna&oh=00_AYDLP1yexp9VVbUMYymDqBQ5A4-FTL88G732Fl1cGHtusw&oe=66994A0D";

    return (
        <>
            <Link href="/">Home</Link>
            <h1>MGA TISOY SA CSUCC</h1>
            <div className="images">
                <div className="div-image">
                    <img className="image" width="25%" height="25%" src={pictureJaymar} />
                </div>
                <div className="div-image">
                    <img className="image" width="25%" height="25%" src={pictureAhrrol} />
                </div>
                <div className="div-image">
                    <img className="image" width="25%" height="25%" src={pictureKyle} />
                </div>
            </div>
        </>
    )

}