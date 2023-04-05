import * as SolidJS from "solid-js"
import "./index.css"
import * as flexButton from "../button"

interface userCard {
  readonly Name: string
  readonly secondName: string
  readonly thirdName: string
  readonly phone: string
  flag: boolean
}

interface userCardsList {
  readonly id: number
  readonly userCards: Array<userCard>
}

function changeFlag(card: userCard) {
  card.flag = !card.flag
}

const Component: SolidJS.Component<userCardsList> = (_) => {
  const Element: SolidJS.JSX.Element = (
    <SolidJS.For each={_.userCards}>
      {(card) => {
        const userElement: SolidJS.JSX.Element = (
          <div class="element">
            <flexButton.default Before="fa-solid fa-check" After="fa-solid fa-x" function={{ entity: changeFlag, parameters: [card] }} />

            <div class={"names"}>
              <div class={"firstName"}>{card.Name}</div>
              <div class={"secondName"}>{card.secondName}</div>
              <div class={"secondName"}>{card.thirdName}</div>
            </div>

            <div class={`roles`} no-select={`true`}></div>

            <div class={"buttomContainer"}>
              <button class={"profile"}>profile</button>
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
