
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styles from "../components/serachInput/searchinput.module.css";
import CountryTables from '../components/countryTables/CountryTables';
import Layout from '../components/layout/Layout';
import { useState } from "react";



export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");
  const filteredCountries = countries.filter(country => 
  country.name.common.toLowerCase().includes(keyword)||
  country.region.toLowerCase().includes(keyword));
  const onSearchChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }
  // const {name,population}=countries;
  //console.log(name);
  

  return <Layout country={countries}>
    <div className={styles.searchBtnWrapper}>
      <div className={styles.searchbox}>

       <button className={styles.btnsearch}><i className="fas fa-search"></i></button>
        <input type="text" onChange={onSearchChange} className={styles.inputsearch} placeholder="Search By Country,Region..." />
      </div>
    </div>

    Found <b>{filteredCountries.length}</b> Countries !
    <CountryTables country={filteredCountries} />
  </Layout>
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};