import * as SolidJS from "solid-js"
import "./index.css"
import * as flexButton from "../button"

export interface User {
  readonly Name: {
    readonly First: string
    readonly Second: string
    readonly Third: string
  }
  readonly Phone: string
  readonly Flag: boolean
}

interface Users {
  readonly List: Array<User>
}

const Component: SolidJS.Component<Users> = (_) => {
  
  const Element: SolidJS.JSX.Element = (
    <SolidJS.For each={_.List}>
      {(card) => (
        <div class={"element"}>
          
          <div class={"names"}>
            <div class={"firstName"}>{card.Name.First}</div>
            <div class={"secondName"}>{card.Name.Second}</div>
            <div class={"secondName"}>{card.Name.Third}</div>
          </div>

          <div class={"phone"}>
            {card.Phone}
          </div>
        </div>
      )}     
  </SolidJS.For>
  )
  return Element
}
export default Component