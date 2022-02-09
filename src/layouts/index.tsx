import BaseHeader from "@/layouts/components/BaseHeader";
import BaseMenu from "@/layouts/components/BaseMenu";

export default (props: any) => {
  return (
    <div style={{display:'flex'}}>
      <BaseMenu/>
      <div>
        <BaseHeader/>
        <div style={{padding: 20}}>{props.children}</div>
      </div>
    </div>
  )
}
