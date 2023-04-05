import * as SolidJS from 'solid-js'
import * as SolidRouter from '@solidjs/router'

import * as Components from './Components/__components'

import * as Hooks from '../../Hooks/__hooks'

import AvatarJPG from '../../Assets/Media/Images/avatar.jpg'
import LogoPNG from '../../Assets/Media/Images/logo.png'

import './App.css'

interface User {
  readonly id: number
  readonly first_name: string
  readonly second_name: string
  readonly third_name: string | undefined
  readonly phone_number: string
  readonly telegram_id: number
}
const GetUser = async (userId: number) => await Hooks.Server.SendRequest<User>(`/api/eestec/users/id/${userId}`, `GET`, {}, {})

const Component: SolidJS.Component = () => {
  const Navigator = SolidRouter.useNavigate()

  const [IsSideBarActive, SetSideBarActive] = SolidJS.createSignal(false)

  const [UserID, SetUserID] = SolidJS.createSignal(0)

  const [UserDataResource, UserDataResourceManager] = SolidJS.createResource(UserID, GetUser)
  const UserDataResponse = () => Hooks.Server.GetResponseResource(UserDataResource)

  const [UserFirstName, SetUserFirstName] = SolidJS.createSignal(``)
  const [UserSecondName, SetUserSecondName] = SolidJS.createSignal(``)
  const [UserThirdName, SetUserThirdName] = SolidJS.createSignal(``)

  SolidJS.createEffect(() => {
    const UserData = UserDataResponse()

    if (UserData.Status.IsFinished) {
      if (UserData.Status.IsValid) {
        const User = UserData.Body

        SetUserFirstName(User.first_name)
        SetUserSecondName(User.second_name)
        SetUserThirdName(User.third_name || ``)
      } else {
        SetUserFirstName(`Имя`)
        SetUserSecondName(`Фамилия`)
        SetUserThirdName(`Отчество`)

        //UserDataResourceManager.refetch()
      }
    }
  })

  const UserName = () => {
    const UserName = {
      First: UserFirstName(),
      Second: UserSecondName(),
      Third: UserThirdName(),
    }

    return UserName
  }

  const NavigateTo = (endpoint: string) => {
    SetSideBarActive(!IsSideBarActive())
    setTimeout(() => {
      Navigator(endpoint, { scroll: true })
    }, 300)
  }

  const Element: SolidJS.JSX.Element = (
    <div class={`customElement`} id={`sideBar`} is-active={`${IsSideBarActive()}`}>
      <div class={`header`}>
        <div
          class={`profile`}
          onClick={(_) => {
            NavigateTo(`/profile`)
          }}
        >
          <img src={AvatarJPG} alt={`avatar`} no-select={`true`} />
          <div class={`credentials`} no-select={`true`}>
            <span class={`second_name`}>{UserName().Second}</span>
            <span class={`first_name`}>{UserName().First}</span>
          </div>
        </div>
        <button
          class={`toggle`}
          onClick={(_) => {
            SetSideBarActive(!IsSideBarActive())
          }}
          no-select={`true`}
        >
          <span>
            <i class={`fa-solid fa-chevrons-left`} style={{ '--fa-primary-color': '#FFFFFF', '--fa-secondary-color': '#FFFFFF' }}></i>
          </span>
        </button>
      </div>
      <div class={`main`}>
        <div class={`list`}>
          <Components.MenuElement.default
            Icon={{ Name: `fa-duotone fa-stars`, Style: { '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' } }}
            Title={`KPI`}
            Settings={{ IsMultiple: false }}
            SubElements={[ ]}
          />
          <Components.MenuElement.default
            Icon={{ Name: `fa-duotone fa-trophy-star`, Style: { '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' } }}
            Title={`Рейтинг`}
            Settings={{ IsMultiple: true }}
            SubElements={[
              {
                Icon: { Name: `fa-duotone fa-trophy-star`, Style: { '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' } },
                Title: `Общий`,
                Notifications: 0,
              },
              {
                Icon: { Name: `fa-duotone fa-trophy-star`, Style: { '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' } },
                Title: `Внутри отдела`,
                Notifications: 0,
              },
              {
                Icon: { Name: `fa-duotone fa-trophy-star`, Style: { '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' } },
                Title: `Внутри проекта`,
                Notifications: 0,
              },
              {
                Icon: { Name: `fa-duotone fa-trophy-star`, Style: { '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' } },
                Title: `Между отделами`,
                Notifications: 2,
              },
              {
                Icon: { Name: `fa-duotone fa-trophy-star`, Style: { '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' } },
                Title: `Между проектами`,
                Notifications: 2,
              },
            ]}
          />
          <Components.MenuElement.default
            Icon={{ Name: `fa-duotone fa-user`, Style: { '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' } }}
            Title={`Пользователи`}
            Settings={{ IsMultiple: false }}
            SubElements={[ ]}
          />
          <Components.MenuElement.default
            Icon={{ Name: `fa-duotone fa-people-group`, Style: { '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' } }}
            Title={`Отделы`}
            Settings={{ IsMultiple: false }}
            SubElements={[ ]}
          />
          <Components.MenuElement.default
            Icon={{ Name: `fa-duotone fa-briefcase`, Style: { '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' } }}
            Title={`Проекты`}
            Settings={{ IsMultiple: false }}
            SubElements={[ ]}
          />
          <Components.MenuElement.default
            Icon={{ Name: `fa-duotone fa-calendars`, Style: { '--fa-primary-color': '#FFDD2D', '--fa-secondary-color': '#FFFFFF' } }}
            Title={`Events`}
            Settings={{ IsMultiple: false }}
            SubElements={[ ]}
          />
        </div>
      </div>
      <div
        class={`footer`}
        onClick={(_) => {
          NavigateTo(`/`)
        }}
      >
        <img src={LogoPNG} alt={`logo`} no-select={`true`} />
      </div>
    </div>
  )

  return Element
}

export default Component
