import * as SolidJS from 'solid-js'
import './index.css'

interface userCard {
  readonly Name: string
  readonly secondName: string
  readonly thirdName: string
  readonly delta: number
  readonly kpi: number
}

interface rating {
  readonly List: Array<userCard>
}



const Component: SolidJS.Component<rating> = (_) => {
  const Element: SolidJS.JSX.Element = (
    <div class="field">
    <SolidJS.For each={_.List}>
      {(card) => (
        <div class='element'>
          <div class="left-block">
            <div class="place">
              <span>№3</span>
            </div>
            <div class="name">
              <div class="second">
                <span>
                  {card.secondName}
                </span>
              </div>
              <div class="full">
                <div class="name">
                  <span>
                    {card.Name}
                  </span>
                </div>
                <div class="thirdName">
                  <span>
                    {card.thirdName}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="right-block">
            
              <div
                class={`delta`}
                style={{
                  border: `1px solid rgba(${155}, ${155}, ${155}, 1)`,
                  background: `rgba(${255}, ${255}, ${255}, 0.1)`,
                }}
              >
                <div
                  class={`marker`}
                  style={{
                    background: `rgba(${255}, ${255}, ${3}, 1)`,
                  }}
                ></div>
                <div class={`name`}>
                  <span>{card.delta}</span>
                </div>
              </div>
            
            <div class="kpi"><span>{card.kpi}</span></div>
          </div>
      </div>
      
      )}
   </SolidJS.For>
   </div>
  )
  return Element
}

export default Component