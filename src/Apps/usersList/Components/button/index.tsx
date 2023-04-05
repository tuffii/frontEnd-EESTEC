import * as SolidJS from "solid-js"
import { createSignal } from "solid-js"
import "./index.css"


interface StateIcon<updateFunction extends (...parametres: Array<any>) => any> {
  readonly Before: string
  readonly After: string
  readonly function: {
    readonly entity: updateFunction
    readonly parameters: Parameters<updateFunction>
  }
}

const Component: SolidJS.Component<StateIcon<any>> = (_) => {
  const [CurrentIcon, SetCurrentIcon] = createSignal(_.Before)
  const [IconState, SetIconState] = createSignal(false)

  const HandleClick = () => {
    SetIconState(!IconState())

    if (IconState() == true) {
      SetCurrentIcon(_.After)
    } else {
      SetCurrentIcon(_.Before)
    }
    _.function.entity(..._.function.parameters)
  }

  return (
    <button class={"button"} onClick={(_) => { HandleClick() }}>
      <i class={`${CurrentIcon()}`}></i>
    </button>
  )
}

export default Component