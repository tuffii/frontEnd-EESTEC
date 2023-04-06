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

            <div class={"icon"}>
              {card.flag && (
                <flexButton.default Before="fa-light fa-square-check" After="fa-light fa-square" function={{ entity: changeFlag, parameters: [card] }} />
              )}
              {!card.flag && (
                <flexButton.default Before="fa-light fa-square" After="fa-light fa-square-check" function={{ entity: changeFlag, parameters: [card] }} />
              )}
            </div>

            <div class={"names"}>
              <div class={"firstName"}>{card.Name}</div>
              <div class={"secondName"}>{card.secondName}</div>
              <div class={"secondName"}>{card.thirdName}</div>
            </div>
            <div class={"phone"}>
              {card.phone}
            </div>

            <div class={"buttons"}>
              <button class={"tgMessage"}><i class="fa-duotone fa-paper-plane"></i></button>
              <button class={"profile"}><i class="fa-solid fa-user"></i></button>
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
