import * as SolidJS from 'solid-js'

import * as Components from './Components/__components'

import * as Hooks from '../../Hooks/__hooks'

import AvatarJPG from '../../Assets/Media/Images/avatar.jpg'
import KPIPNG from '../../Assets/Media/Images/kpi.png'
import BrawlStars from '../../Assets/Media/Images/Achievements/brawl-stars.png'

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

const IsAdmin = true // Промежуточный cock

const Component: SolidJS.Component = () => {
  const [UserID, SetUserID] = SolidJS.createSignal(0)

  const [UserDataResource] = SolidJS.createResource(UserID, GetUser)
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

  const Element: SolidJS.JSX.Element = (
    <div class={`customElement`} id={`profile`}>
      <div class={`main`}>
        <div class={`content`}>
          <div class={`preview`}>
            <div class={`avatar`}>
              <img src={AvatarJPG} alt={`avatar`} no-select={`true`} />
            </div>
            <div class={`fast-access`} no-select={`true`}>
              <button is-disabled={`${!IsAdmin}`}>
                <span>
                  <i class={`fa-solid fa-paper-plane`} style={{ '--fa-primary-color': '#FFFFFF', '--fa-secondary-color': '#FFFFFF' }}></i>
                </span>
              </button>
            </div>
          </div>
          <div class={`info`}>
            <div class={`main`}>
              <div class={`credentials`}>
                <div class={`name`} no-select={`true`}>
                  <div class={`second`}>
                    <span>{UserName().First}</span>
                  </div>
                  <div class={`first`}>
                    <span>{UserName().Second}</span>
                  </div>
                  <div class={`third`}>
                    {/*<SolidJS.Show when={IsAdmin} fallback={}>*/}
                      <span>{UserName().Third}</span>
                    {/*</SolidJS.Show>*/}
                  </div>
                </div>
                <div class={`kpi`} style={{ filter: `blur(${IsAdmin ? `0px` : `5px`})` }} no-select={`true`}>
                  <img src={KPIPNG} alt={`kpi`} no-select={`true`} />
                  <div class={`value`}>
                    <span>{170}</span>
                  </div>
                </div>
              </div>
              <div class={`signup`}>
                <div class={`title`}>
                  <span>Зарегистрирован в EESTEC</span>
                </div>
                <div class={`date`}>
                  <span>14 Марта 2023 в 21:32</span>
                </div>
              </div>
            </div>
            <div class={`roles`} no-select={`true`}>
              <Components.UserRole.default Name={`Admin`} Color={[255, 0, 0]} />
              <Components.UserRole.default Name={`TeamLead HR`} Color={[255, 221, 45]} />
              <Components.UserRole.default Name={`Основы проектной деятельности`} Color={[80, 255, 57]} />
            </div>
          </div>
        </div>
      </div>
      <SolidJS.Show when={IsAdmin} /*fallback={}*/>
        <div class={`admin-access`}>
          <div class={`teams`}>
            <div class={`departments`}>
              <div class={`list`}>
                <Components.UserDepartment.default Name={`HR`} />
                <Components.UserDepartment.default Name={`AT`} />
              </div>
            </div>
            <div class={`projects`}>
              <div class={`list`}>
                <Components.UserProject.default Name={`Основы проектной деятельности`} />
                <Components.UserProject.default Name={`Переработка KPI`} />
                <Components.UserProject.default Name={`Разработка бота телеграмм`} />
              </div>
            </div>
          </div>
          <div class={`attendance`}>
            <div class={`meetups`}>
              <div class={`list`}>
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={true} />
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={false} />
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={true} />
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={true} />
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={false} />
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={true} />
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={false} />
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={false} />
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={false} />
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={true} />
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={false} />
                <Components.Meetup.default Name={`Встреча отдела AT`} Date={{ Day: `14 Февраля 2023`, Time: `12:30` }} Status={false} />
              </div>
            </div>
            <div class={`statistics`}>
              <div class={`global`}>
                <div
                  class={`diagram`}
                  style={{
                    background: `repeating-conic-gradient(from 0deg, rgba(80, 255, 57, 0.7) 0deg calc(3.6deg * ${55}), rgba(0, 0, 0, 0) calc(3.6deg * ${55}) calc(3.6deg * 100))`,
                  }}
                >
                  <div class={`value`}>
                    <span>{55}%</span>
                  </div>
                </div>
              </div>
              <div class={`local`}>
                <div class={`department`}>
                  <div
                    class={`diagram`}
                    style={{
                      background: `repeating-conic-gradient(from 0deg, rgba(80, 255, 57, 0.7) 0deg calc(3.6deg * ${90}), rgba(0, 0, 0, 0) calc(3.6deg * ${90}) calc(3.6deg * 100))`,
                    }}
                  >
                    <div class={`value`}>
                      <span>{90}%</span>
                    </div>
                  </div>
                </div>
                <div class={`project`}>
                  <div
                    class={`diagram`}
                    style={{
                      background: `repeating-conic-gradient(from 0deg, rgba(80, 255, 57, 0.7) 0deg calc(3.6deg * ${20}), rgba(0, 0, 0, 0) calc(3.6deg * ${20}) calc(3.6deg * 100))`,
                    }}
                  >
                    <div class={`value`}>
                      <span>{20}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SolidJS.Show>
      <div class={`achievements`} no-select={`true`}>
        <Components.AchievementCollection.default
          Name={`Коллекция`}
          Achievements={[
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: `Название`,
              Description: `Описание описание описание описание описание`,
              Image: BrawlStars,
              Settings: {
                IsLocked: false,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
          ]}
        />
        <Components.AchievementCollection.default
          Name={`Коллекция`}
          Achievements={[
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: `Название`,
              Description: `Описание описание описание описание описание`,
              Image: BrawlStars,
              Settings: {
                IsLocked: false,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
            {
              Name: ``,
              Description: ``,
              Image: BrawlStars,
              Settings: {
                IsLocked: true,
              },
            },
          ]}
        />
      </div>
      <SolidJS.Show when={IsAdmin} /*fallback={}*/>
        <button class={`delete`} no-select={`true`}>
          <span>Уволить</span>
        </button>
      </SolidJS.Show>
    </div>
  )
  return Element
}

export default Component
