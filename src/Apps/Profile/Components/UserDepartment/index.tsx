import * as SolidJS from 'solid-js'

import './index.css'

interface UserDepartment {
  readonly Name: string
}

const Component: SolidJS.Component<UserDepartment> = (_) => {
  const Element: SolidJS.JSX.Element = (
    <div class={`department`}>
      <div class={`marker`}></div>
      <div class={`name`}>
        <span>{_.Name}</span>
      </div>
    </div>
  )
  return Element
}

export default Component
