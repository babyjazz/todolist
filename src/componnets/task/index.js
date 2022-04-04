import { MenuIcon } from 'assets/images'
import Checkbox from 'componnets/checkbox'
import Dropdown from 'componnets/dropdown'
import styles from './index.module.scss'

const actionConfig = [
  {
    key: 'edit',
    label: 'Edit',
  },
  {
    key: 'delete',
    label: 'Delete',
  },
]

export default function Task() {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox_container}>
        <Checkbox label="Publish a new blog" checked />
      </div>

      <Dropdown list={actionConfig}>
        <MenuIcon />
      </Dropdown>
    </div>
  )
}
