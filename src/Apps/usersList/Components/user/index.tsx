import * as SolidJS from 'solid-js'
import './index.css'

interface userCard {
  readonly Name: string
  readonly secondName: string
  readonly thirdName: string
}

interface userCardsList {
  readonly id: number
  readonly userCards: Array<userCard>
}

const Component: SolidJS.Component<userCardsList> = (_) => {
  const listLineLength = 2
  const listLines: Array<Array<userCard>> = []
  let listLine: Array<userCard> = []
  for (let i = 0; i < _.userCards.length; i++) {
    const userCard = _.userCards[i]

    if (listLine.length < listLineLength) {
      listLine.push(userCard)
    } else {
      listLines.push(listLine)
      listLine = []
      listLine.push(userCard)
    }
  }
  if (listLine.length > 0) {
    listLines.push(listLine)

    listLine = []
  }
  const Element: SolidJS.JSX.Element = (
    <SolidJS.For each={listLines}>
      {(cardsLine) => (
        <div class={"line"}>
          <SolidJS.For each={cardsLine}>
          {(card) => {
            const userElement: SolidJS.JSX.Element = (<div class='element'>

            <div class={"name"}>
              {card.Name}
            </div>
            <div class={"name"}>
              {card.secondName}
            </div>
            <div class={"name"}>
              {card.thirdName}
            </div>

            <div class={`roles`} no-select={`true`}>
            </div>

            <div class={"buttomContainer"}>
              <button class={"profile"}>
                profile
              </button>
            </div>
            </div>
            )
            return userElement
          }}
        </SolidJS.For>
        </div>
      )}
   </SolidJS.For>
  )
  return Element
}

export default Component