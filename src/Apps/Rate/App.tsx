import * as SolidJS from "solid-js";
import { createSignal } from 'solid-js';
import LogoPNG from '../../Assets/Media/Images/logo.png'
import * as Components from './Components/__components'
import * as Hooks from "../../Hooks/__hooks";
import "./App.css";

const Component: SolidJS.Component = () => {
  const [showFilters, setShowFilters] = createSignal(false);

  const Element: SolidJS.JSX.Element = (
    <div class={`customElement`} id={`rate`}>
      <div class={'header'}> <img src={LogoPNG} alt={`logo`} no-select={`true`} />
      </div>
    
      <Components.rate.default List={[
      {
        Name: 'Ortur',
        secondName: 'Martushenlo',
        thirdName: 'Orturovitch',
        delta: 22,
        kpi: 255
      },
      {
        Name: 'Tomas',
        secondName: 'Shyhinmaer',
        thirdName: 'Mich',
        delta: 2321,
        kpi: 25523
      },
      {
        Name: 'fgfgfg',
        secondName: 'Martfffushenlo',
        thirdName: 'Orturovitch',
        delta: 22,
        kpi: 255
      },
      {
        Name: 'Tofdas',
        secondName: 'Shyhffgfdinmaer',
        thirdName: 'Midfgdch',
        delta: 2321,
        kpi: 25523
      },
      {
        Name: 'Ortur',
        secondName: 'Martushenlo',
        thirdName: 'Orturovitch',
        delta: 22,
        kpi: 255
      },
      {
        Name: 'Tomas',
        secondName: 'Shyhinmaer',
        thirdName: 'Mich',
        delta: 2321,
        kpi: 25523
      },

     ]} />
    </div>
   
  )
  return Element
}
export default Component