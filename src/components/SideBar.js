import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';
import SideBarContext from '../context/SideBarContext';
import styles from "../Styles/Sidebar.module.css";
export default function SideBar() {
    const { open, setOpen } = useContext(SideBarContext);
    const { filter, setFilter } = useContext(FilterContext);
    if (open) {
        return (<div className={styles.main__sidebar}>
            <div className={styles.sidebar}>
                <div className={styles.heading}>
                    Categories
                    <div className={styles.cross} onClick={() => setOpen(false)}>x</div>
                </div>
                <div className={styles.categories}>
                    <div className={styles.category} onClick={() => setFilter({ ...filter, category: "" })} >
                        1. All Items
                    </div>
                    <div className={styles.category} onClick={() => setFilter({ ...filter, category: "Shirts" })} >
                        2. Shirts
                    </div>
                    <div className={styles.category} onClick={() => setFilter({ ...filter, category: "Pants" })}>
                        3. Pants
                    </div>
                    <div className={styles.category} onClick={() => setFilter({ ...filter, category: "Hair Care" })} >
                        4. Hair Care
                    </div>
                    <div className={styles.category} onClick={() => setFilter({ ...filter, category: "Face Wash" })}>
                        5. Face Wash
                    </div>
                    <div className={styles.category} onClick={() => setFilter({ ...filter, category: "baby Products" })}>
                        6. Baby Products
                    </div>
                </div>
            </div>
        </div>);
    }
    else {
        return <></>
    }
}