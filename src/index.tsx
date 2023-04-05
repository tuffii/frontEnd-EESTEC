import * as SolidJSWeb from 'solid-js/web'
import * as SolidRouter from '@solidjs/router'

import Main from './Main'

SolidJSWeb.render(
  () => (
    <SolidRouter.Router>
      <Main />
    </SolidRouter.Router>
  ),
  document.getElementById(`root`)!
)
