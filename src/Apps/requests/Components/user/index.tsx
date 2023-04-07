import * as SolidJS from 'solid-js'

import * as flexButton from '../button'

import './index.css'

export interface User {
  readonly Name: {
    readonly First: string
    readonly Second: string
    readonly Third: string
  }
  readonly Phone: string
  Flag: boolean
}

export type Users = Array<User>

interface UserCards {
  readonly List: {
    readonly Get: SolidJS.Accessor<Users>
    readonly Set: SolidJS.Setter<Users>
  }
}

const Component: SolidJS.Component<UserCards> = (_) => {
  const ToggleUserFlag = (userIndex: number): void => {
    const UpdatedUsersList = _.List.Get().map((_el, _ind, _arr) => {
      if (userIndex === _ind) {
        _el.Flag = !_el.Flag
      }

      return _el
    })

    _.List.Set([...UpdatedUsersList])
  }

  const Element: SolidJS.JSX.Element = (
    <SolidJS.For each={_.List.Get()}>
      {(_el, _ind) => {
        const userElement: SolidJS.JSX.Element = (
          <div class='element'>
            <div class={'icon'}>
              <SolidJS.Show
                when={_el.Flag}
                fallback={<flexButton.default Before='fa-light fa-square' After='fa-light fa-square-check' function={{ entity: ToggleUserFlag, parameters: [_ind()] }} />}
              >
                <flexButton.default Before='fa-light fa-square-check' After='fa-light fa-square' function={{ entity: ToggleUserFlag, parameters: [_ind()] }} />
              </SolidJS.Show>
            </div>

            <div class={'names'}>
              <div class={'firstName'}>{_el.Name.First}</div>
              <div class={'secondName'}>{_el.Name.Second}</div>
              <div class={'secondName'}>{_el.Name.Third}</div>
            </div>
            <div class={'phone'}>{_el.Phone}</div>
            <div class={'buttons'}>
              <button class={'tgMessage'}>
                <i class='fa-duotone fa-paper-plane'></i>
              </button>
              <button class={'profile'}>
                <i class='fa-solid fa-user'></i>
              </button>
            </div>
          </div>
        )
        return userElement
      }}
    </SolidJS.For>
  )
  return Element
}

export default Component