import * as SolidJS from 'solid-js'

import * as Components from './Components/__components'

import * as Hooks from '../../Hooks/__hooks'

import './App.css'

const Component: SolidJS.Component = () => {
    const [IsNewProjectsTabActive, SetNewProjectsTabActive] = SolidJS.createSignal(false)
    const [IsCurrentProjectsTabActive, SetCurrentProjectsTabActive] = SolidJS.createSignal(true)
    const [IsOldProjectsTabActive, SetOldProjectsTabActive] = SolidJS.createSignal(false)

    const Element: SolidJS.JSX.Element = (
        <div class={'customElement'} id={'projects'}>
            <div class={'current'} is-active={`${IsCurrentProjectsTabActive()}`}>
                <div class={'selector'}>
                    <button onClick={(_) => {
                        SetCurrentProjectsTabActive(true)
                        SetNewProjectsTabActive(false)
                        SetOldProjectsTabActive(false)
                    }}>
                    </button>
                </div>
                <div class={'content'}>

                </div>
            </div>
            <div class={'new'} is-active={`${IsNewProjectsTabActive()}`}>
                <div class={'selector'}>
                    <button onClick={(_) => {
                        SetCurrentProjectsTabActive(false)
                        SetNewProjectsTabActive(true)
                        SetOldProjectsTabActive(false)
                    }}>
                    </button>
                </div>
                <div class={'content'}>

                </div>
            </div>
            <div class={'old'} is-active={`${IsOldProjectsTabActive()}`}>
                <div class={'selector'}>
                    <button onClick={(_) => {
                        SetCurrentProjectsTabActive(false)
                        SetNewProjectsTabActive(false)
                        SetOldProjectsTabActive(true)
                    }}>
                    </button>
                </div>
                <div class={'content'}>

                </div>
            </div>
        </div>
    )
    return Element
}

export default Component
