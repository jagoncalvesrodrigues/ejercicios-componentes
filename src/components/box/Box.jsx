import styles from './box.module.css';

console.log(styles);

const Box = ()=>{
    // es lo mismo esto
    // return <div className={styles.box}>Box</div>
    //aqui lo destructuramos
    const {box}=styles;
    return <div className={box}>Box</div>
}

export default Box;