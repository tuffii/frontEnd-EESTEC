import * as SolidJS from 'solid-js'
import * as SolidRouter from '@solidjs/router'

import * as Apps from './Apps/__apps'

import './Main.css'

const Component: SolidJS.Component = () => {
  const Element: SolidJS.JSX.Element = (
    <>
      <div class={`main`}>
        <Apps.SideBar.default />
        <div class={`content`}>
          <SolidRouter.Routes>
            <SolidRouter.Route path={`/profile`} component={Apps.Profile.default} />
            <SolidRouter.Route path={`/projects`} component={Apps.Projects.default} />
            <SolidRouter.Route path={`/usersList`} component={Apps.usersList.default} />
            <SolidRouter.Route path={`/questionnaire`} component={Apps.questionnaire.default} />
          </SolidRouter.Routes>
        </div>
      </div>
    </>
  )

  return Element
}

export default Component
