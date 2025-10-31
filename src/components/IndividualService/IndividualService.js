import React, { useEffect } from "react";
import styles from './IndividualService.module.css';
import { useLocation } from "react-router-dom";
import data from './data';
import cloudperformance from '../../assets/individualService/cloudperformance.png';
import certifiedcloud from '../../assets/individualService/certifiedcloud.png';
import cloudstrategy from '../../assets/individualService/cloudstrategy.png';

const IndividualService = () =>{
    const { search } = useLocation(); 
    const id = parseInt(new URLSearchParams(search).get('id'));
    let service = data.filter(x=>{
        return x.id === id;
    })[0];

    useEffect(() => {
        window.scrollTo(0, 0)
      })

    return(
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                <p data-aos='slide-right'  className={styles.heading}>{ service.heading }</p>
                <p data-aos='slide-left' className={styles.heading_content}>{ service.content }</p>
            
                <div className="row">
                    <div className="col-md-4" data-aos='fade-right' data-aos-offset="150">
                        <img src={cloudperformance} alt="" className={styles.img}/>
                        <p className={styles.logo_head}>Cloud Performance Optimization</p>
                        <p className={styles.heading_content}>Boost cloud speed, reliability, and efficiency through intelligent scaling and smart resource management.</p>
                    </div>

                    <div className="col-md-4" data-aos='fade' data-aos-offset="150">
                        <img src={cloudstrategy} alt="" className={styles.img} />
                        <p className={styles.logo_head}>Cloud Strategy & Architecture</p>
                        <p className={styles.heading_content}>Design and implement future-ready cloud architectures tailored precisely to your business goals and growth needs.</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-left' data-aos-offset="150">
                        <img src={certifiedcloud} alt="" className={styles.img}/>
                        <p className={styles.logo_head}>Certified Cloud Experts</p>
                        <p className={styles.heading_content}>Work with AWS-certified professionals to ensure secure, scalable, and high-performing cloud environments.</p>
                    </div>
                </div>

                {
                    service.contents.map((x, idx) =>(
                        idx%2 === 0 ?
                        <div key={idx} className="row" style={{marginTop: '112px'}}>
                            <div data-aos='slide-right' data-aos-offset="150" className="col-md-6">
                                <img src={x.img} alt="" className={styles.contentImg}/>
                            </div>
                            <div data-aos='slide-left' data-aos-offset="150" className="col-md-6">
                                <p className={`${styles.heading} ${styles.subHead}`}>{ x.heading }</p>
                                <p className={`${styles.heading_content} ${styles.justify}`}>{ x.content }</p>
                            </div>
                        </div>
                        :
                        <div key={idx} className="row" style={{marginTop: '112px'}}>
                            <div className="col-md-6" data-aos='slide-right' data-aos-offset="150">
                                <p className={`${styles.heading} ${styles.subHead}`}>{ x.heading }</p>
                                <p className={`${styles.heading_content} ${styles.justify}`}>{ x.content }</p>
                            </div>
                            <div className="col-md-6" data-aos='slide-left' data-aos-offset="150">
                                <img src={x.img} alt="" className={styles.contentImg}/>
                            </div>
                        </div>
                    ))
                }
            
            </div>
        </>
    )
}
export default IndividualService;