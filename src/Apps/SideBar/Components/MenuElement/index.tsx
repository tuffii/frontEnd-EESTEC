import * as SolidJS from 'solid-js'

import './index.css'

interface MenuElement {
  readonly Icon: {
    readonly Name: string
    readonly Style: Record<string, any>
  }
  readonly Title: string
  readonly Notifications: number
}

interface MenuElementParameters {
  readonly Icon: {
    readonly Name: MenuElement['Icon']['Name']
    readonly Style: MenuElement['Icon']['Style']
  }
  readonly Title: MenuElement['Title']
  readonly Settings: {
    readonly IsMultiple: boolean
  }
  readonly SubElements: Array<MenuElement>
}

const Component: SolidJS.Component<MenuElementParameters> = (parameters) => {
  const [IsActive, SetActive] = SolidJS.createSignal(false)

  const TotalElementNotifications = parameters.SubElements.map((_el, _ind, _arr) => _el.Notifications).reduce((_prev, _curr, _currInd, _arr) => _prev + _curr, 0)

  const Element: SolidJS.JSX.Element = (
    <div class={`element`} is-active={`${IsActive()}`}>
      <div class={`content`}>
        <div class={`icon`} no-select={`true`}>
          <span>
            <i class={`${parameters.Icon.Name}${TotalElementNotifications > 0 ? ` fa-beat-fade` : ``}`} style={parameters.Icon.Style}></i>
          </span>
        </div>
        <div class={`name`} no-select={`true`}>
          <span>{parameters.Title}</span>
          <SolidJS.Show when={TotalElementNotifications > 0} /* fallback={} */>
            <div class={`notification`} no-select={`true`}>
              <span>{TotalElementNotifications}</span>
            </div>
          </SolidJS.Show>
        </div>
        <SolidJS.Show when={parameters.Settings.IsMultiple} /* fallback={} */>
          <button
            class={`toggle`}
            onClick={(_) => {
              SetActive(!IsActive())
            }}
            no-select={`true`}
          >
            <span>
              <i class={`fa-duotone fa-caret-down`} style={{ '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' }}></i>
            </span>
          </button>
        </SolidJS.Show>
      </div>
      <SolidJS.Show when={parameters.Settings.IsMultiple} /* fallback={} */>
        <div class={`sub-list`}>
          <SolidJS.For each={parameters.SubElements}>
            {(_el, _ind) => (
              <div class={`element`}>
                <div class={`content`}>
                  <div class={`icon`} no-select={`true`}>
                    <span>
                      <i class={`${_el.Icon.Name}${_el.Notifications > 0 ? ` fa-beat-fade` : ``}`} style={_el.Icon.Style}></i>
                    </span>
                  </div>
                  <div class={`name`} no-select={`true`}>
                    <span>{_el.Title}</span>
                    <SolidJS.Show when={_el.Notifications > 0} /* fallback={} */>
                      <div class={`notification`} no-select={`true`}>
                        <span>{_el.Notifications}</span>
                      </div>
                    </SolidJS.Show>
                  </div>
                </div>
              </div>
            )}
          </SolidJS.For>
        </div>
      </SolidJS.Show>
    </div>
  )

  return Element
}

export default Component
