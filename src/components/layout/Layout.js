import styles from "./layout.module.css";
import Head from 'next/head';
// import SearchInputBox from "../serachInput/SearchInput";
import Link from "next/link";
// import CountryTables from "../countryTables/CountryTables";
const Layout = ({ children,title="Softman" }) => {
    return (
        <> 
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
                <link src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></link>
            </Head>
            <div className={styles.container}>
            <Link href={`/`}>
            <div className={styles.header}>
            <span className={styles.world}><i className="fas fa-globe"> </i> world-</span><span className={styles.ranks}>Ranks</span>

            <br/><br/>
            {/* <SearchInputBox/> */}
            </div></Link>
           
            <main className={styles.main}>
                {children}
                {/* <CountryTables country={country}/> */}
            </main>

            <footer className={styles.footer}>
               Launched BY @Er.Manish Gupta
            </footer>
        </div>

        </>
    );
};

export default Layout;