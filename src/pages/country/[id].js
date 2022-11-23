import Link from 'next/link';
import React from 'react';
import Layout from '../../components/layout/Layout';
import styles from "./country.module.css";
import Image from 'next/image';



const Country = ({ countriesDetails }) => {

    //console.log(countriesDetails);
    return <Layout title={countriesDetails[0].name.common}>
        <div className={styles.mainContainerTop}>

            <div className={styles.imgContainer}>
                <Link href={`/`}>
                    <Image src={countriesDetails[0].flags.png} width="250" height="250" alt="country-details-img" />
                </Link>
            </div>

            <div className={styles.titleContainer}>
                <h2>{countriesDetails[0].name.common}</h2>
            </div>
            <div className={styles.regionContainer}>
                <h6>{countriesDetails[0].region}</h6>
            </div>
            <div className={styles.areaPop}>
                <div><b><label>{countriesDetails[0].population}</label></b><br></br>
                    <label>Population</label>
                </div>
                <div><b><label>{countriesDetails[0].area}</label></b><br></br>
                    <label>Area (Km2)</label>
                </div>
            </div>
        </div>

        <div className={styles.mainContainerMiddle}>
            <h5>About Country</h5>
            <div className={styles.detailsDiv}>
                <div>SubRegion</div>
                <div><b>{countriesDetails[0].subregion}</b></div>

            </div>
            <div className={styles.detailsDiv}>
                <div>Borders :</div>
                {countriesDetails[0].borders?.map((bdr, index) => {
                    return (<>
                        <div key={index}><b>{bdr},</b></div>
                    </>)
                })}


            </div>
            <div className={styles.detailsDiv}>
                <div>Languages :</div>


            </div>
            <div className={styles.detailsDiv}>
                <div>Capital</div>
                <div><b>{countriesDetails[0].capital}</b></div>

            </div>
            <div className={styles.detailsDiv}>
                <div>Official Name</div>
                <div><b>{countriesDetails[0].name.official} </b></div>

            </div>

        </div>




    </Layout>
}

export default Country;


export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.id}`);
    // console.log(res);
    const countriesDetails = await res.json();

    return {
        props: {
            countriesDetails,
        },
    };
};