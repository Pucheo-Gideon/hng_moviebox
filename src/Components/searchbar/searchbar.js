import Image from "next/image"
// import styles from "/Components/searchbar/search.module.css"
import styles from "./search.module.css"

export default function SearchBar (){

    return(

        <nav className={styles.navbar}>
            
            <div className={styles.moviebox}>
                <Image src={"/TvLogo.svg"} height={200} width={200} alt="MovieBox Logo"/>
                {/* <h4 className={styles.moviebox_text}>MovieBox</h4> */}
            </div>

            <input type="search" placeholder="What movie do you want to watch?" className={styles.search_input} />
            
            <div className={styles.menu_and_signin}>
                <span className={styles.moviebox_text}>Sign in</span>
                <div className={styles.menu_wrapper}>
                <Image height={24} width={24} src={"/Menu alt 4.svg"} alt="MovieBox Logo"/>
                </div>
            </div>

        </nav>
    )
}