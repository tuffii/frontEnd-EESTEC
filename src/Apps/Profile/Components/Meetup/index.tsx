import * as SolidJS from 'solid-js'

import * as SolidIconsBS from 'solid-icons/bs'

import './index.css'

interface Meetup {
  readonly Name: string
  readonly Date: {
    readonly Day: string
    readonly Time: string
  }
  readonly Status: boolean
}

const Component: SolidJS.Component<Meetup> = (_) => {
  const Element: SolidJS.JSX.Element = (
    <div class={`meetup`}>
      <div class={`info`}>
        <div class={`name`}>
          <span>{_.Name}</span>
        </div>
        <div class={`date`}>
          <span>{_.Date.Day}</span>
        </div>
        <div class={`time`}>
          <span>{_.Date.Time}</span>
        </div>
      </div>
      <div class={`status`}>
        <span>
          <SolidJS.Show when={_.Status} fallback={<i class={`fa-solid fa-xmark`} style={{ color: '#FF3939' }}></i>}>
            <SolidIconsBS.BsCheck2All color={`#50FF39`} />
          </SolidJS.Show>
        </span>
      </div>
    </div>
  )
  return Element
}

export default Component
