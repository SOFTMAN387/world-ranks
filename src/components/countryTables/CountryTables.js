
import styles from "./countryTable.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const orderBy = (countries, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => a.population > b.population ? 1 : -1);
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => a.population < b.population ? 1 : -1);
  }

  if (direction === "nameasc") {
    return [...countries].sort((a, b) => a.name > b.name ? 1 : -1);
  }

  if (direction === "namedesc") {
    return [...countries].sort((a, b) => a.name < b.name ? 1 : -1);
  }

  if (direction === "areaasc") {
    return [...countries].sort((a, b) => a.area > b.area ? 1 : -1);
  }

  if (direction === "areadesc") {
    return [...countries].sort((a, b) => a.area < b.area ? 1 : -1);
  }

  return countries;

}


const CountryTables = ({ country }) => {
  const [popDirDesc, setPopDirDesc] = useState(null);
  const OrderedCountries = orderBy(country, popDirDesc);
  //console.log(country);
  return (
    <>


      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col ">#Id</th>
            <th scope="col " >Flags</th>

            {popDirDesc ? <th scope="col " className={styles.sortBtn} onClick={() => setPopDirDesc("namedesc")}><i className="fas  fa-sort"></i><span> </span>Name,Capital</th>
              : <th scope="col " className={styles.sortBtn} onClick={() => setPopDirDesc("nameasc")}><i className="fas  fa-sort"></i><span> </span></th>}
            {popDirDesc ? <th scope="col " className={styles.sortBtn} onClick={() => setPopDirDesc("desc")}><i className="fas  fa-sort"></i><span> </span>Population</th>
              : <th scope="col " className={styles.sortBtn} onClick={() => setPopDirDesc("asc")}><i className="fas  fa-sort"></i><span> </span>Population</th>}
            {popDirDesc ? <th scope="col " className={styles.sortBtn} onClick={() => setPopDirDesc("areadesc")}><i className="fas  fa-sort"></i><span> </span>Area(Km2)</th>
              : <th scope="col " className={styles.sortBtn} onClick={() => setPopDirDesc("areaasc")}><i className="fas  fa-sort"></i><span> </span></th>}
            <th scope="col " >Region</th>

          </tr>
        </thead>
        <tbody>
          {OrderedCountries.map((countries, index) => {

            return (
              <><tr key={index} className={styles.tablerow}>

                <td>{index + 1}</td>
                <td scope="row"><Link key={index} href={`/country/${countries.ccn3}`} ><Image src={`${countries.flags.png}`} width="50" height="50" alt="country-list-img" /></Link></td>
                <td><Link key={index} href={`/country/${countries.ccn3}`} ><span>{countries.name.common},{countries.capital}</span></Link></td>
                <td>{countries.population}</td>
                <td>{countries.area}</td>
                <td>{countries.region}</td>

              </tr>


              </>)


          })}

        </tbody>
      </table>

    </>

  )
}

export default CountryTables;