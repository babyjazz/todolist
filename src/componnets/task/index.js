import { MenuIcon } from 'assets/images'
import Checkbox from 'componnets/checkbox'
import styles from './index.module.scss'

export default function Task() {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox_container}>
        <Checkbox label="Test" />
      </div>

      <div className={styles.menu}>
        <MenuIcon />
      </div>
    </div>
  )
}
