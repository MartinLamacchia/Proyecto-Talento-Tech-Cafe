import React from 'react'
import styles from './SlideInfo.module.css'

const SlideInfo = () => {
  return (
    <div className={styles.container}>
        <p className={styles.firstParagraph}>Consigue un 20% de descuento en compras superiores a $50.000</p>
        <p className={styles.secondParagraph}>un 15% superiores a $30.000 o 10% superiores a $20.000</p>
    </div>
  )
}

export default SlideInfo