import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videoHome from '../../video/hero-video-home.mp4'


import imgAMR from '../../img/img-amr.svg'
import imgAGV from '../../img/img-agv.svg'
import imgCobots from '../../img/img-cobots.svg'
import imgHumanoids from '../../img/img-humanoids.svg'
import imgRCS from '../../img/img-robot-control-system.svg'

import partnerAubo from '../../img/logo-partner-aubo.svg'
import partnerAutox from '../../img/logo-partner-autox.svg'
import partnerElite from '../../img/logo-partner-elite.svg'
import partnerMir from '../../img/logo-partner-mir.svg'
import partnerViggorobot from '../../img/logo-partner-viggorobot.svg'
import partnerInvia from '../../img/logo-pattner-invia.svg'

import './style.css'

export const Homepage = () => {

    useEffect(() => {
        document.body.classList.add('ad-header-transparent')
        return () => {
            document.body.classList.remove('ad-header-transparent')
        }
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>My Homepage Title</title>
                <meta name="description" content="This is a description of Homepage"/>
            </Helmet>

            <div className='ad-hero-home'>
                <video className="w-100" autoPlay loop playsInline muted>
                    <source src={videoHome}></source>
                </video>

                <div className="ad-hero-text">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 px-lg-5">
                                <h1 className='text-white h1_xxlarge'>Optimize operations seamlessly through <span
                                    className='text-gradient'>RaaS and SaaS</span></h1>
                                <p className='text-white px-lg-5 mx-lg-5 mb-3'>Tailored Data Driven Solutions for Your
                                    Automation Needs: Customized Design, Seamless Deployment, and On-Site
                                    Management.</p>
                                <a href="/" className='btn btn-primary btn-lg'>Try us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-4 pe-lg-5 me-lg-5">
                            <h2 className="h2_xlarge mb-2">Our Products</h2>
                            <p className="mb-4 mb-lg-0">Explore our range of finely engineered robots and software
                                products designed to streamline operations across diverse industries, ensuring optimal
                                efficiency and effectiveness.</p>
                        </div>

                        <div className="col-lg-6 position-relative">
                            <div className="row text-center">
                                <div className="col-sm-5">
                                    <a href="/">
                                        <div className="ad-card d-block bg-grey overflow-hidden mb-4">
                                            <div className="ad-card-body p-0">
                                                <figure><img src={imgAMR} alt="Rototic type"/></figure>
                                                <h5>AMR</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/">
                                        <div className="ad-card d-block bg-grey overflow-hidden mb-4">
                                            <div className="ad-card-body p-0">
                                                <figure><img src={imgAGV} alt="Rototic type"/></figure>
                                                <h5>AGV</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/">
                                        <div className="ad-card d-block bg-grey overflow-hidden mb-4">
                                            <div className="ad-card-body p-0">
                                                <figure><img src={imgCobots} alt="Rototic type"/></figure>
                                                <h5>Cobots & R. Arms</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-sm-5 mt-md-5 pt-md-5">
                                    <a href="/">
                                        <div className="ad-card d-block bg-grey overflow-hidden mb-4">
                                            <div className="ad-card-body p-0">
                                                <figure><img src={imgHumanoids} alt="Rototic type"/></figure>
                                                <h5>Humanoids</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/">
                                        <div className="ad-card d-block overflow-hidden bg-grey">
                                            <div className="ad-card-body p-0">
                                                <figure><img src={imgRCS} alt="Rototic type"/></figure>
                                                <h5>Robot Control System</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 text-center">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4"><u>Our
                                Solutions</u></div>
                            <h2 className='mb-2'>We Deliver Exceptional Robotics Products and Services Around the
                                World</h2>
                            <p className='mb-3 px-lg-5'>ADROID offers a range of Autonomous Mobile Robots (AMRs) that
                                can navigate complex environments with ease, making them ideal for a variety of
                                applications, such as material handling, logistics, and cleaning.</p>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-lg-6 mb-5">
                            <div className="ad-card bg-grey">
                                <div className="ad-card-body">
                                    <h4>Robot as a Service</h4>
                                    <ul className='check-ul-list'>
                                        <li>Revolutionize your business with seamless robot integration.</li>
                                        <li>Streamline deployment and effortlessly manage multiple robots.</li>
                                        <li>Enhance operational efficiency and offer dynamic solutions for new users.
                                        </li>
                                        <li>Provide comprehensive support for robot manufacturers in development and
                                            maintenance.
                                        </li>
                                    </ul>

                                    <a href="/" className='btn btn-primary btn-with-arrow'>Read more <svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"/>
                                    </svg></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="ad-card bg-grey">
                                <div className="ad-card-body">
                                    <h4>Robotic Software as a Service</h4>
                                    <ul className='check-ul-list'>
                                        <li>Elevate your robotics experience with our sophisticated SaaS platform.</li>
                                        <li>Seamlessly integrate and oversee your robots using our intuitive software.
                                        </li>
                                        <li>Enhance efficiency with tailored solutions for diverse robotic
                                            applications.
                                        </li>
                                        <li>Receive continuous professional support and updates for sustained optimal
                                            performance.
                                        </li>
                                    </ul>

                                    <a href="/" className='btn btn-primary btn-with-arrow'>Read more <svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M335 408.1C330.3 404.3 328 398.2 328 392s2.344-12.28 7.031-16.97L430.1 280H24C10.75 280 0 269.2 0 255.1C0 242.7 10.75 232 24 232h406.1l-95.03-95.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l136 136c9.375 9.375 9.375 24.56 0 33.94l-136 136C359.6 418.3 344.4 418.3 335 408.1z"/>
                                    </svg></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-80">
                        <div className="col-lg-10">
                            <div className="ad-videoWrapper mb-0">
                                <iframe src="https://www.youtube-nocookie.com/embed/fn3KWM1kuAw?si=ODLfDJFQPb2w8kU7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">$0</div>
                                    <h4 className='pb-0'>No CapEx</h4>
                                    <p className='pb-0'>Pay only when your system produces</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">30%</div>
                                    <h4 className='pb-0'>OpEx Reduction</h4>
                                    <p className='pb-0'>Profit instantly with 1 lower-than-labor payment</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="text-count mb-2">2x</div>
                                    <h4 className='pb-0'>Capacity Increase</h4>
                                    <p className='pb-0'>Increase your production and win more customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 ad-industries">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4">
                                <u>Industries</u></div>
                            <h2>How Robots Are Used Across Industries</h2>
                            <p className='mb-4'>Businesses and government agencies use robotics in a variety of ways.
                                All five of the common robot types are deployed to enhance outcomes and reduce the
                                burden on employees so they can focus on the most valuable and most critical tasks.</p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="ad-icon-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M184 304C197.3 304 208 314.7 208 328V376C208 389.3 197.3 400 184 400H136C122.7 400 112 389.3 112 376V328C112 314.7 122.7 304 136 304H184zM176 368V336H144V368H176zM240 328C240 314.7 250.7 304 264 304H312C325.3 304 336 314.7 336 328V376C336 389.3 325.3 400 312 400H264C250.7 400 240 389.3 240 376V328zM272 368H304V336H272V368zM440 304C453.3 304 464 314.7 464 328V376C464 389.3 453.3 400 440 400H392C378.7 400 368 389.3 368 376V328C368 314.7 378.7 304 392 304H440zM432 336H400V368H432V336zM144 32C170.5 32 192 53.49 192 80V199.4L305.8 123.6C332.4 105.8 368 124.9 368 156.8V207.5L480.6 126.4C507.1 107.3 544 126.2 544 158.9V416C544 451.3 515.3 480 480 480H96C60.65 480 32 451.3 32 416V80C32 53.49 53.49 32 80 32H144zM64 416C64 433.7 78.33 448 96 448H480C497.7 448 512 433.7 512 416V158.9C512 152.3 504.6 148.6 499.3 152.4L361.3 251.7C356.5 255.2 350 255.7 344.7 252.1C339.4 250.2 336 244.7 336 238.7V156.8C336 150.5 328.9 146.6 323.6 150.2L184.9 242.6C179.1 245.9 173.7 246.2 168.5 243.4C163.2 240.7 160 235.2 160 229.3V80C160 71.16 152.8 64 144 64H80C71.16 64 64 71.16 64 80V416z"/></svg>
                                    </div>
                                    <h4>Industrial</h4>
                                    <p className='pb-0'>Morbi vestibulum vehicula quam ut dui nibh, volutpat nec facilisis eu, pellentesque a nisl.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="ad-icon-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M136 96C149.3 96 160 106.7 160 120V168C160 181.3 149.3 192 136 192H88C74.75 192 64 181.3 64 168V120C64 106.7 74.75 96 88 96H136zM128 160V128H96V160H128zM224 120C224 106.7 234.7 96 248 96H296C309.3 96 320 106.7 320 120V168C320 181.3 309.3 192 296 192H248C234.7 192 224 181.3 224 168V120zM256 128V160H288V128H256zM136 224C149.3 224 160 234.7 160 248V296C160 309.3 149.3 320 136 320H88C74.75 320 64 309.3 64 296V248C64 234.7 74.75 224 88 224H136zM128 288V256H96V288H128zM224 248C224 234.7 234.7 224 248 224H296C309.3 224 320 234.7 320 248V296C320 309.3 309.3 320 296 320H248C234.7 320 224 309.3 224 296V248zM256 256V288H288V256H256zM0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448zM320 32H64C46.33 32 32 46.33 32 64V448C32 465.7 46.33 480 64 480H128V416C128 380.7 156.7 352 192 352C227.3 352 256 380.7 256 416V480H320C337.7 480 352 465.7 352 448V64C352 46.33 337.7 32 320 32zM160 416V480H224V416C224 398.3 209.7 384 192 384C174.3 384 160 398.3 160 416zM624 192C632.8 192 640 199.2 640 208V224C640 248.6 630.8 271 615.6 288H624C632.8 288 640 295.2 640 304V320C640 344.6 630.8 367 615.6 384H624C632.8 384 640 391.2 640 400V416C640 469 597 512 544 512H512C458.1 512 416 469 416 416V400C416 391.2 423.2 384 432 384H440.4C425.2 367 416 344.6 416 320V304C416 295.2 423.2 288 432 288H440.4C425.2 271 416 248.6 416 224V208C416 199.2 423.2 192 432 192H448C481.4 192 510.8 209 528 234.9C545.2 209 574.6 192 608 192H624zM544 288C579.3 288 608 259.3 608 224C572.7 224 544 252.7 544 288zM512 288C512 252.7 483.3 224 448 224C448 259.3 476.7 288 512 288zM519.6 320C522.6 323.4 525.4 327.1 528 330.9C530.6 327.1 533.4 323.4 536.4 320H519.6zM536.4 416H519.6C522.6 419.4 525.4 423.1 528 426.9C530.6 423.1 533.4 419.4 536.4 416H536.4zM608 320C572.7 320 544 348.7 544 383.1C579.3 383.1 608 355.3 608 320zM512 384C512 348.7 483.3 320 448 320C448 355.3 476.7 384 512 384zM544 480C579.3 480 608 451.3 608 416C572.7 416 544 444.7 544 480zM512 480C512 444.7 483.3 416 448 416C448 451.3 476.7 480 512 480zM528 32C536.8 32 544 39.16 544 48V160C544 168.8 536.8 176 528 176C519.2 176 512 168.8 512 160V48C512 39.16 519.2 32 528 32zM608 96V144C608 152.8 600.8 160 592 160C583.2 160 576 152.8 576 144V96C576 87.16 583.2 80 592 80C600.8 80 608 87.16 608 96zM448 144V96C448 87.16 455.2 80 464 80C472.8 80 480 87.16 480 96V144C480 152.8 472.8 160 464 160C455.2 160 448 152.8 448 144z"/></svg>
                                    </div>
                                    <h4>Farming and Agriculture</h4>
                                    <p className='pb-0'>Morbi vestibulum vehicula quam ut dui nibh, volutpat nec facilisis eu, pellentesque a nisl.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="ad-icon-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM544 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V288l150.1-.0313l27.62 55.17C212.4 348.6 217.1 352 224 352h.6562c6.312-.2813 11.84-4.219 14.19-10.06L286.6 222.5l18.19 54.56C307 283.6 313.1 288 320 288h96c8.844 0 16-7.156 16-16S424.8 256 416 256h-84.47l-28.34-85.06C301.1 164.6 295.2 160.2 288.5 160C281.8 160.3 275.7 163.8 273.2 170.1L222.4 296.1L206.3 264.8C203.6 259.5 198.2 256.1 192.2 256h-160L32 96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32V416z"/></svg>
                                    </div>

                                    <h4>Healthcare</h4>
                                    <p className='pb-0'>Morbi vestibulum vehicula quam ut dui nibh, volutpat nec facilisis eu, pellentesque a nisl.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="ad-icon-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575 330.5c-3.078-8.312-12.25-12.52-20.55-9.484l-223.9 82.5C319 373.4 290.1 352 256 352c-5.018 0-9.889 .5918-14.65 1.477L141.8 54.7C130.9 21.98 100.4 0 65.88 0H15.1C7.155 0 0 7.157 0 16S7.156 32 16 32h49.88c20.69 0 38.98 13.19 45.55 32.83l100.2 300.6C190.2 379.8 176 404.2 176 432C176 476.2 211.8 512 256 512c42.91 0 77.64-33.87 79.63-76.29l229.9-84.7C573.8 347.1 578.1 338.8 575 330.5zM256 480c-26.47 0-48-21.53-48-48s21.54-47.1 48-47.1S304 405.5 304 432S282.5 480 256 480zM286.7 302.7c6.545 19.64 24.84 32.83 45.53 32.83c5.154 0 10.26-.832 15.18-2.471l131.3-43.76c12.16-4.055 22.02-12.6 27.75-24.07c5.734-11.47 6.658-24.48 2.605-36.64l-43.76-131.3c-6.545-19.64-24.84-32.83-45.53-32.83c-5.154 0-10.26 .832-15.18 2.471L273.3 110.7c-12.16 4.055-22.02 12.6-27.75 24.07C239.8 146.2 238.9 159.3 242.9 171.4L286.7 302.7zM274.2 149.1c1.939-3.879 5.139-6.654 9.252-8.025l131.3-43.76c1.654-.5508 3.359-.8301 5.068-.8301c6.895 0 12.99 4.4 15.18 10.95l43.76 131.3c1.371 4.115 1.072 8.34-.8672 12.22c-1.939 3.879-5.139 6.654-9.252 8.025l-131.3 43.76c-1.656 .5527-3.361 .832-5.07 .832c-6.895 0-12.99-4.4-15.18-10.95L273.3 161.3C271.9 157.2 272.2 152.1 274.2 149.1z"/></svg>
                                    </div>
                                    <h4>Logistics</h4>
                                    <p className='pb-0'>Morbi vestibulum vehicula quam ut dui nibh, volutpat nec facilisis eu, pellentesque a nisl.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="ad-icon-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M431.3 206.8C426.5 203.3 422.2 199.4 418.3 195C414.4 199.3 410.1 203.2 405.4 206.7C390.9 217.5 372.8 224 353.1 224C333.5 224 315.6 217.6 301.1 206.1C296.3 203.4 291.9 199.4 287.9 195C283.9 199.4 279.5 203.4 274.7 206.1C260.2 217.6 242.3 224 222.7 224C203.2 224 185.2 217.6 170.7 206.1C165.9 203.4 161.5 199.4 157.6 195C153.6 199.4 149.1 203.4 144.3 206.1C129.9 217.6 111.1 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2C491.6 223.7 487.6 224 483.4 224C463.8 224 445.8 217.5 431.3 206.8H431.3zM464.4 32H111.6L55.38 120.9C36.71 150.5 55.1 187.5 84.44 191.5C87.11 191.8 89.8 192 92.36 192C108.1 192 123.6 184.8 133.8 173.6C139.9 166.9 148.5 163 157.6 163C166.6 163 175.2 166.9 181.3 173.6C191.5 184.8 206.2 192 222.7 192C239.3 192 253.1 184.8 264.2 173.6C270.2 166.9 278.9 163 287.9 163C296.1 163 305.6 166.9 311.6 173.6C321.8 184.8 336.5 191.1 353.1 191.1C369.7 191.1 384.3 184.8 394.5 173.6C400.6 166.9 409.2 163 418.2 163C427.2 163 435.9 166.8 441.9 173.5C452.2 184.8 466.1 191.1 483.4 191.1C486.1 191.1 488.7 191.8 491.4 191.5C520.9 187.5 539.3 150.5 520.6 120.9L464.4 32zM96 272V352H480V272C480 263.2 487.2 256 496 256C504.8 256 512 263.2 512 272V448C512 483.3 483.3 512 448 512H128C92.65 512 64 483.3 64 448V272C64 263.2 71.16 256 80 256C88.84 256 96 263.2 96 272zM96 448C96 465.7 110.3 480 128 480H448C465.7 480 480 465.7 480 448V384H96V448z"/></svg>
                                    </div>

                                    <h4>Retail and Hospitality</h4>
                                    <p className='pb-0'>Morbi vestibulum vehicula quam ut dui nibh, volutpat nec facilisis eu, pellentesque a nisl.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="ad-card bg-grey text-center">
                                <div className="ad-card-body">
                                    <div className="ad-icon-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M336 32C327.2 32 320 39.16 320 48V496C320 504.8 312.8 512 304 512C295.2 512 288 504.8 288 496V48C288 21.49 309.5 0 336 0H464C490.5 0 512 21.49 512 48V192H544V112C544 103.2 551.2 96 560 96C568.8 96 576 103.2 576 112V192H592C618.5 192 640 213.5 640 240V496C640 504.8 632.8 512 624 512C615.2 512 608 504.8 608 496V240C608 231.2 600.8 224 592 224H480V48C480 39.16 472.8 32 464 32H336zM416 64C433.7 64 448 78.33 448 96V128C448 145.7 433.7 160 416 160H384C366.3 160 352 145.7 352 128V96C352 78.33 366.3 64 384 64H416zM384 128H416V96H384V128zM480 288C480 270.3 494.3 256 512 256H544C561.7 256 576 270.3 576 288V320C576 337.7 561.7 352 544 352H512C494.3 352 480 337.7 480 320V288zM544 288H512V320H544V288zM544 384C561.7 384 576 398.3 576 416V448C576 465.7 561.7 480 544 480H512C494.3 480 480 465.7 480 448V416C480 398.3 494.3 384 512 384H544zM512 448H544V416H512V448zM352 224C352 206.3 366.3 192 384 192H416C433.7 192 448 206.3 448 224V256C448 273.7 433.7 288 416 288H384C366.3 288 352 273.7 352 256V224zM416 224H384V256H416V224zM416 320C433.7 320 448 334.3 448 352V384C448 401.7 433.7 416 416 416H384C366.3 416 352 401.7 352 384V352C352 334.3 366.3 320 384 320H416zM384 384H416V352H384V384zM144 496C144 504.8 136.8 512 128 512C119.2 512 112 504.8 112 496V320H80C35.82 320 0 284.2 0 240C0 213.3 13.08 189.7 33.18 175.1C32.4 170.2 32 165.1 32 160C32 106.1 74.98 64 128 64C181 64 224 106.1 224 160C224 165.1 223.6 170.2 222.8 175.1C242.9 189.7 256 213.3 256 240C256 284.2 220.2 320 176 320H144V496zM188.1 189.5L191.2 170.1C191.7 166.8 192 163.5 192 160C192 124.7 163.3 96 128 96C92.65 96 64 124.7 64 160C64 163.5 64.27 166.8 64.79 170.1L67.86 189.5L51.93 201.1C39.79 209.8 32 224 32 240C32 266.5 53.49 288 80 288H111.1L112 240C112 231.2 119.2 224 128 224C136.8 224 144 231.2 144 240V288H176C202.5 288 224 266.5 224 240C224 224 216.2 209.8 204.1 201.1L188.1 189.5z"/></svg>
                                    </div>
                                    <h4>Smart Cities</h4>
                                    <p className='pb-0'>Morbi vestibulum vehicula quam ut dui nibh, volutpat nec facilisis eu, pellentesque a nisl.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ad-partners py-80 mb-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-7 text-center mb-5">
                            <div className="ad-text-label text-uppercase text-xs font-weight-700 text-primary mb-4"><u>OUR
                                PARNERS</u></div>
                            <h2>Brand We Serve</h2>
                            <p className='pb-0'>ADROID partners with leading Robotics and AI companies to bring you the
                                latest technology and expertise in the field. Together, we're working to create a safer,
                                more productive world with Robotics.</p>
                        </div>

                        <Slider {...settings}>
                            <div className='p-2'>
                                <div className="ad-card bg-dark py-4">
                                    <div className="ad-card-body">
                                        <figure className='mb-0 text-center'><img src={partnerViggorobot} alt="Viggo Robot"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className="ad-card bg-dark py-4">
                                    <div className="ad-card-body">
                                        <figure className='mb-0 text-center'><img src={partnerAutox} alt="Autox Robots"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className="ad-card bg-dark text-center py-4">
                                    <div className="ad-card-body">
                                        <figure className='mb-0'><img src={partnerElite} alt="Elite Robots"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className="ad-card bg-dark text-center py-4">
                                    <div className="ad-card-body">
                                        <figure className='mb-0'><img src={partnerAubo} alt="Aubo Robots"/></figure>
                                    </div>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className="ad-card bg-dark text-center py-4">
                                    <div className="ad-card-body">
                                        <figure className='mb-0'><img src={partnerMir} alt="Universal Robots"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className="ad-card bg-dark text-center py-4">
                                    <div className="ad-card-body">
                                        <figure className='mb-0'><img src={partnerInvia} alt="Invia Robots"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage