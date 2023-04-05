import * as SolidJS from 'solid-js'

import './index.css'

interface Tag {
  readonly Name: string
  readonly Color: readonly [number, number, number]
}

const Component: SolidJS.Component<Tag> = (_) => {
  const Element: SolidJS.JSX.Element = (
    <div
      class={`role`}
      style={{
        border: `1px solid rgba(${_.Color[0]}, ${_.Color[1]}, ${_.Color[2]}, 1)`,
        background: `rgba(${_.Color[0]}, ${_.Color[1]}, ${_.Color[2]}, 0.1)`,
      }}
    >
      <div
        class={`marker`}
        style={{
          background: `rgba(${_.Color[0]}, ${_.Color[1]}, ${_.Color[2]}, 1)`,
        }}
      ></div>
      <div class={`name`}>
        <span>{_.Name}</span>
      </div>
    </div>
  )
  return Element
}

export default Component
