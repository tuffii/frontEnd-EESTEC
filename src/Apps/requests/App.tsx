import * as SolidJS from 'solid-js'

import * as Components from './Components/__components'

import * as Hooks from '../../Hooks/__hooks'

import { createSignal } from 'solid-js'

import './App.css'


const DefaultUsers: Components.userList.Users = [
  {
    Name: {
      First: 'Vladimirovnaaaa',
      Second: 'Annaaaaaaa',
      Third: 'Sergeevnaaaa',
    },
    Phone: '+79113322334',
    Flag: false,
  },
  {
    Name: {
      First: 'Ivanov',
      Second: 'Sergey',
      Third: 'Petrovich',
    },
    Phone: '+79113322335',
    Flag: false,
  },
  {
    Name: {
      First: 'Petrova',
      Second: 'Olga',
      Third: 'Vladimirovna',
    },
    Phone: '+79113322336',
    Flag: false,
  },
  {
    Name: {
      First: 'Sokolova',
      Second: 'Nataliya',
      Third: 'Sergeevna',
    },
    Phone: '+79113322337',
    Flag: false,
  },
  {
    Name: {
      First: 'Vasiliev',
      Second: 'Andrey',
      Third: 'Vladimirovich',
    },
    Phone: '+79113322338',
    Flag: false,
  },
  {
    Name: {
      First: 'Sergeeva',
      Second: 'Maria',
      Third: 'Ivanovna',
    },
    Phone: '+79113322339',
    Flag: false,
  },
  {
    Name: {
      First: 'Kuznetsova',
      Second: 'Ekaterina',
      Third: 'Vladimirovna',
    },
    Phone: '+79113322330',
    Flag: false,
  },
  {
    Name: {
      First: 'Ivanova',
      Second: 'Anna',
      Third: 'Sergeevna',
    },
    Phone: '+79113322331',
    Flag: false,
  },
  {
    Name: {
      First: 'Smirnova',
      Second: 'Tatiana',
      Third: 'Vladimirovna',
    },
    Phone: '+79113322332',
    Flag: false,
  },
  {
    Name: {
      First: 'Popova',
      Second: 'Elena',
      Third: 'Sergeevna',
    },
    Phone: '+79113322333',
    Flag: false,
  },
  {
    Name: {
      First: 'Morozova',
      Second: 'Svetlana',
      Third: 'Vladimirovna',
    },
    Phone: '+79113322334',
    Flag: false,
  },
  {
    Name: {
      First: 'Vladimirov',
      Second: 'Dmitry',
      Third: 'Sergeevich',
    },
    Phone: '+79113322335',
    Flag: false,
  },
  {
    Name: {
      First: 'Kharlamova',
      Second: 'Nadezhda',
      Third: 'Vladimirovna',
    },
    Phone: '+79113322336',
    Flag: false,
  },
  {
    Name: {
      First: 'Zhukova',
      Second: 'Lyubov',
      Third: 'Sergeevna',
    },
    Phone: '+79113322337',
    Flag: false,
  },
  {
    Name: {
      First: 'Bakhtin',
      Second: 'Sergey',
      Third: 'Vladimirovich',
    },
    Phone: '+79113322338',
    Flag: false,
  },
  {
    Name: {
      First: 'Novikova',
      Second: 'Tatiana',
      Third: 'Sergeevna',
    },
    Phone: '+79113322339',
    Flag: false,
  },
  {
    Name: {
      First: 'Vasilieva',
      Second: 'Galina',
      Third: 'Vladimirovna',
    },
    Phone: '+79113322330',
    Flag: false,
  },
  {
    Name: {
      First: 'Sokolov',
      Second: 'Dmitry',
      Third: 'Sergeevich',
    },
    Phone: '+79113322331',
    Flag: false,
  },
  {
    Name: {
      First: 'Petrov',
      Second: 'Ivan',
      Third: 'Sergeevich',
    },
    Phone: '+79113322332',
    Flag: false,
  },
  {
    Name: {
      First: 'Ivanova',
      Second: 'Nataliya',
      Third: 'Sergeevna',
    },
    Phone: '+79113322333',
    Flag: false,
  },
  {
    Name: {
      First: 'Morozov',
      Second: 'Andrey',
      Third: 'Sergeevich',
    },
    Phone: '+79113322334',
    Flag: false,
  },
  {
    Name: {
      First: 'Sergeev',
      Second: 'Vladimir',
      Third: 'Sergeevich',
    },
    Phone: '+79113322335',
    Flag: false,
  },
]

const Component: SolidJS.Component = () => {
  const [Users, SetUsers] = SolidJS.createSignal([...DefaultUsers], { equals: (_prev, _next) => false })

  const UpdateUsersByStringFilter = (searchQuery: string): void => {
    SetUsers([...Users().filter((_el, _ind, _arr) => `${_el.Name.First}${_el.Name.Second}${_el.Name.Third}`.toLowerCase().includes(searchQuery.toLowerCase()))])
  }

  const GetCheckedUsers = (): Components.userList.Users => Users().filter((_el, _ind, _arr) => _el.Flag)

  const [acceptInvite, setAcceptInvite] = createSignal(false)
  const [rejectInvite, setRejectInvite] = createSignal(false)

  const Element: SolidJS.JSX.Element = (
    <div class={`customElement`} id={`requests`}>

      {(rejectInvite() && GetCheckedUsers().length != 0) && (
        <div class={'blacker'}>
          <div class={'meny'}>
            <div class={'head'}>
              <div class={'textContainer'}>
                <div class={'text'}>
                  Принять эти заявки
                </div>
              </div>
              <button
                class={'close'}
                onClick={(_) => {
                  setRejectInvite(!rejectInvite())
                }}>
                <i class='fa-light fa-xmark fa-2x'></i>
              </button>
            </div>
            <div class={'settings'}>
              <Components.flagedusers.default List={GetCheckedUsers()} />
            </div>
            <div class={'footer'}>
            <button onClick={(_) => {
                  setRejectInvite(!rejectInvite())
                }}> подтвердить</button>
            </div>
          </div>
        </div>
      )}

      {acceptInvite() && (
        <div class={'blacker'}>
          <div class={'meny'}>
            <div class={'head'}>
              <div class={'textContainer'}>
                <div class={'text'}>
                  Отклонить эти заявки
                </div>
              </div>
              <button
                class={'close'}
                onClick={(_) => {
                  setAcceptInvite(!acceptInvite())
                }}>
                <i class='fa-light fa-xmark fa-2x'></i>
              </button>
            </div>
            <div class={'settings'}>
              <Components.flagedusers.default List={GetCheckedUsers()} />
            </div>
            <div class={'footer'}>
              <button onClick={(_) => {
                  setAcceptInvite(!acceptInvite())
                }}> подтвердить</button>
            </div>
          </div>
        </div>
      )}

      <div class={'header'}>
        <div class={'search'}>
          <div class={'glass'}>
            <i class='fa-regular fa-magnifying-glass fa-xl'></i>
          </div>
          <input
            class={'input'}
            placeholder='Поиск...'
            onInput={(_) => {
              UpdateUsersByStringFilter(_.currentTarget.value)
            }}
          />
        </div>
        <button
          class={'multiple'}
          onClick={(_) => {
            setAcceptInvite(!acceptInvite())
          }}>
          <i class='fa-light fa-square-xmark fa-3x' style={'color: #666666'}></i>
        </button>

        <button
          class={'multiple'}
          onClick={(_) => {
            setRejectInvite(!rejectInvite())
          }}>
          <i class='fa-light fa-square-check fa-3x' style={'color: #666666'}></i>
        </button>
      </div>

      <div class={'list'}>
        <Components.userList.default List={{ Get: Users, Set: SetUsers }} />
      </div>
    </div>
  )
  return Element
}
export default Component
