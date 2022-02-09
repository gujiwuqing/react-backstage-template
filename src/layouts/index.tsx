import BaseHeader from "@/layouts/components/BaseHeader";
import BaseMenu from "@/layouts/components/BaseMenu";
import styles from './index.module.less'

export default (props: any) => {
  return (
    <div className={styles.layout} >
      <BaseMenu/>
      <div className={styles.container}>
        <BaseHeader/>
        <div style={{padding: 20}}>{props.children}</div>
      </div>
    </div>
  )
}
