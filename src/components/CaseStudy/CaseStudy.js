import React from 'react';
import styles from './CaseStudy.module.css';
import { Link } from 'react-router-dom';
import fakeData from './fakeData';

const CaseStudy = () =>{

    // No filtering, always show all data
    const data = fakeData;

    return(
        <div className={`container ${styles.contain} overflow-hidden`}>
            <p className={styles.head} data-aos='slide-right'>WHAT WE DO</p>

            <div data-aos='slide-left'>
                <p className={styles.our}>OUR CASE&nbsp;</p>
                <p className={styles.study}>STUDIES</p>
            </div>

            {/* FILTER BUTTONS REMOVED */}

            <div className='row mb-2'>
                {data.map((x) => (
                    <div key={x.id} className={`col-md-4 col-sm-6 mt-4`} data-aos='fade'>
                        <Link to={`/projectDetails?id=${x.id}`} style={{ textDecoration: "none" }}>
                            <div
                                className={styles.img}
                                style={{
                                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(5, 25, 81, .55)), url(${x.img})`
                                }}
                            >
                                <p className={styles.imgText1}>{x.designation}</p>
                                <p className={styles.imgText2}>{x.title}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CaseStudy;
