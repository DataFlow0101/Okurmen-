import React from "react";
import "../styles/Block1.scss";
import vectors from "../images/vectors.png";
import leftWind from "../images/leftWind.png";
import rightWind from "../images/rightWind.png";
import bg from "../images/bg.png";
import earth from "../images/earth.png";
import chartLeft from "../images/ChartLeft.png";
import ramka from "../images/ramka.png";
import card from "../images/card.png";
import cardin from "../images/cardin.png";
import group from "../images/Group145.png";
import Vector from "../images/Vector.png";
import Vector1 from "../images/Vector1.png";

const Block1 = () => {
    return (
        <section className="block1">
            <div className="container">
                <div className="block1__content">
                    {/* Левая часть */}
                    <div className="block1__left">
                        <div className="bitSilindImg">
                            {/* Изображение биткоина */}
                            <img
                                className="blok1__bitcoin"
                                src="https://s3-alpha-sig.figma.com/img/5f91/e82f/4986384a26d22c76f2243aaf71a8e291?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gGh82KVtjeAtS6cflJcxWR5-ksZU~c8YISoRVXaLSCP0g70RA7euBiKZo~WOIg50dKO7jTDSpADhayOe-1ziGYknUjANfRE4G-3PuVHocvDagXNX4V1gY4iDbt2OgeWgkozJAPPpqHwPHeeEUKGeK9N9dgcRn9s~5K1rmpUzrAj7EvDJibbCHe-u1TZVKv0h4kWSHndBL9oWPP01IAHBbuQh14nHbXUGrSUqXi~BoZ1d~cSdhEjcHpDcf0whrJgaK9T2LmYikvKo13kMJe38uYix7gMK4ysX5rWNQo4su7IXBWAM7SqOcm6o5ofwTnzrzCBM1Adeg7Ds15ribR~3Ig__"
                                alt="Биткоин"
                            />
                            {/* Изображение цилиндра */}
                            <img
                                className="blok1__silindr"
                                src="https://s3-alpha-sig.figma.com/img/7989/e237/7c0781ae1bd399271a4cdfca780480f0?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qrL1V~96fORqu6SPQNvrarOsIStOXVmKBXJ2Ky0StN741Y7~yBqkQgUh-8qub-hYU34vXIveqkxEzUklKUKVtakvDNTMKUsNrMeSgjdsXbnVzsxeRl8NYcvlXXFkXBe~Z-RMWqhgzvgrPYiJrmXas-r0WOUvV0w~VvywCIz9TaWmVE4GHCbf-QBDDItSjp3lrPlxmzmI5BHJKXRTbHVF7afHw4x6DhTcmmjOk7njBJ3sejw1974EAU1ik4MZgFg-sHJVc1AXtt5OGu9K-qLmwk3acB6rPeiTuT3PYUAgRv9X0oJlD9EyQx4UcSlS7n-9Oh2XyZtNwNgh6Tl-qeY7zg__"
                                alt="Цилиндр"
                            />
                        </div>
                        <div>
                            <h1>Инвестируй с лучшими крипто-трейдерами</h1>
                            <p>
                                Сервис автоматического копирования сделок на криптовалютных биржах. Сервис абсолютно бесплатен для трейдеров.
                            </p>
                            <button>Создать аккаунт</button>
                        </div>
                    </div>

                    {/* Правая часть */}
                    <div className="block1__right">
                        <img src={bg} className="bg" alt="background" />
                        <img src={earth} className="bg" alt="earth" />

                        {/* Изображение трейдера */}
                        <img
                            src="https://s3-alpha-sig.figma.com/img/347f/959e/7f24b031c1e36a0035159fcd7e28324f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QQMQyXVoQmoWe0OZntmQ0NOfNcxmoZh52Y2CpyrBE2~q6m7VqhiAkoVQpsg2EW0egwfrCzyyHYaCfII0rcg3RQ4abTIOJFC28e1zP77rGe3FY338VOdRJkmQvPtBGN9V-4onxHKYfmrwz6VeHdKOAQ2QEPeQi6GfcEikupf60s1oFy3bpb5OcwLIfsRGviBU0YxvqT~~nbbA8z4hdbRH7WB72QanaCtabpMlGbGC3vo1HrFGE5JtxmN4FzxINii6eEEpferLNPeGXI54CDorW~hKiXnDF3wBwmiLrRd7jjNMgATT9EZaDyc1Iz8FNszqyhetljuQba6VFwncCpt4Hw__"
                            alt="Трейдер"
                            className="block1__trader"
                        />
                        {/* График пассивного дохода */}
                        <img
                            src={leftWind}
                            alt="Пассивный доход"
                            className="block1__graph1"
                        />
                        <img src={chartLeft} alt="" className="chartLeft"/>

                        {/* График публичного трейдинга */}
                        <img
                            src={rightWind}
                            alt="Публичный трейдинг"
                            className="block1__graph2"
                        />
                        <img src={ramka} className="ramka" alt=""/>
                        <img src={card} className="card" alt=""/>
                        <img src={cardin} className="cardin" alt=""/>
                        <img src={group} className={"group"} alt=""/>
                        <img src={group} className={"group"} alt=""/>
                        <img src={group} className={"group"} alt=""/>
                        <img src={Vector} className="vector" alt=""/>
                        <img src={Vector1} className="vector1" alt=""/>

                        <img src={vectors} className="vectors" alt="Векторы" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Block1;
