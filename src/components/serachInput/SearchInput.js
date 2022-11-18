import styles from "./searchinput.module.css";
const SearchInputBox = ()=>{
    return(<>
      <div className={styles.searchbox}>
    <button className={styles.btnsearch}><i className="fas fa-search"></i></button>
    <input type="text" className={styles.inputsearch} placeholder="Search By Country..." />
  </div>


    </>)
}
export default SearchInputBox;