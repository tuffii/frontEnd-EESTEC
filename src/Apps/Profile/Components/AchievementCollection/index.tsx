import * as SolidJS from 'solid-js'

import './index.css'

interface Achievement {
  readonly Name: string
  readonly Description: string
  readonly Image: string
  readonly Settings: {
    readonly IsLocked: boolean
  }
}

interface AchievementCollection {
  readonly Name: string
  readonly Achievements: Array<Achievement>
}

const Component: SolidJS.Component<AchievementCollection> = (_) => {
  const AchievementLineLength = 6

  const AchievementsLines: Array<Array<Achievement>> = []

  let AchievementsLine: Array<Achievement> = []
  for (let i = 0; i < _.Achievements.length; i++) {
    const Achievement = _.Achievements[i]

    if (AchievementsLine.length < AchievementLineLength) {
      AchievementsLine.push(Achievement)
    } else {
      AchievementsLines.push(AchievementsLine)

      AchievementsLine = []
      AchievementsLine.push(Achievement)
    }
  }

  if (AchievementsLine.length > 0) {
    AchievementsLines.push(AchievementsLine)

    AchievementsLine = []
  }

  const Element: SolidJS.JSX.Element = (
    <div class={`collection`}>
      <div class={`title`}>
        <span>{_.Name}</span>
      </div>
      <div class={`elements`}>
        <SolidJS.For each={AchievementsLines}>
          {(achievementsLine) => (
            <div class={`line`}>
              <SolidJS.For each={achievementsLine}>
                {(achievement) => {
                  const [IsPopupActive, SetPopupActive] = SolidJS.createSignal(false)

                  const AchievementElement: SolidJS.JSX.Element = (
                    <div
                      class={`element`}
                      onClick={(_) => {
                        SetPopupActive(true)
                        setTimeout(() => {
                          SetPopupActive(false)
                        }, 5000)
                      }}
                    >
                      <img src={achievement.Image} alt={`Achiement`} no-select={`true`} />
                      <SolidJS.Show when={achievement.Settings.IsLocked} /*fallback={}*/>
                        <div class={`block`}>
                          <span>
                            <i class={`fa-duotone fa-lock-keyhole`} style={{ '--fa-primary-color': '#FFFFFF', '--fa-secondary-color': '#FFFFFF' }}></i>
                          </span>
                        </div>
                      </SolidJS.Show>
                      <div class={`popup`} is-active={`${IsPopupActive()}`}>
                        <div class={`title`}>
                          <span>{achievement.Name}</span>
                        </div>
                        <div class={`description`}>
                          <span>{achievement.Description}</span>
                        </div>
                      </div>
                    </div>
                  )

                  return AchievementElement
                }}
              </SolidJS.For>
            </div>
          )}
        </SolidJS.For>
      </div>
    </div>
  )
  return Element
}

export default Component
