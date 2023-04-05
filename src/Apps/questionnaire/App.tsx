import * as SolidJS from "solid-js";
import { createSignal } from "solid-js";
import * as Components from './Components/__components'
import * as Hooks from "../../Hooks/__hooks";
import "./App.css";

const Component: SolidJS.Component = () => {

  interface User {
    readonly Name: string
    readonly secondName: string
    readonly thirdName: string
    readonly phone: string
    readonly flag: boolean
  }
  type Users = Array<User>

  
  const users: Users = [
    {
      Name: 'Matur',
      secondName: 'artur',
      thirdName: 'rte',
      phone: "+79113205455",
      flag: false
    },
    {
      Name: 'John',
      secondName: 'Doe',
      thirdName: 'Smith',
      phone: "+79113205455",
      flag: false
    },
    {
      Name: 'Jane',
      secondName: 'Doe',
      thirdName: 'Johnson',
      phone: "+79113205455",
      flag: false
    },
    {
      Name: 'Matur',
      secondName: 'artur',
      thirdName: 'rte',
      phone: "+79113205455",
      flag: false
    },
    {
      Name: 'John',
      secondName: 'Doe',
      thirdName: 'Smith',
      phone: "+79113205455",
      flag: false
    },
    {
      Name: 'Jane',
      secondName: 'Doe',
      thirdName: 'Johnson',
      phone: "+79113205455",
      flag: false
    }, 
    {
      Name: 'Alice',
      secondName: 'Jones',
      thirdName: 'Brown',
      phone: "+79113205455",
      flag: false
    },
    {
      Name: 'Bob',
      secondName: 'Smith',
      thirdName: 'Johnson',
      phone: "+79113205455",
      flag: false
    },
    {
      Name: 'Sarah',
      secondName: 'Williams',
      thirdName: 'Davis',
      phone: "+79113205455",
      flag: false
    },
    {
      Name: 'Kevin',
      secondName: 'Lee',
      thirdName: 'Chung',
      phone: "+79113205455",
      flag: false
    },
    {
      Name: 'Emily',
      secondName: 'Johnson',
      thirdName: 'Taylor',
      phone: "+79113205455",
      flag: false
    },
    {
      Name: 'David',
      secondName: 'Miller',
      thirdName: 'Garcia',
      phone: "+79113205455",
      flag: false
    }
  ];

  const [list, setList] = createSignal([...users], {equals: (previous, next) => {
    return false;
  }});



  const Element: SolidJS.JSX.Element = (
    <div class={`customElement`} id={`questionnaire`}>
      <div class={"header"}>
        <div class={"search"}>
          <div class={"glass"} >
            <i class="fa-regular fa-magnifying-glass fa-xl"></i>
          </div>
          <input class={"input"}
            placeholder = "Поиск..."
            onInput={(_) => { 
              // UpdateInputValue(_.currentTarget.value)
            }}/>
        </div>
        <button class={"multiple"}
        onClick={(_) => {
          // setShowFilters(!showFilters());
        }}>
        <i class="fa-light fa-square-xmark fa-3x" style={"color: #666666"}></i>
        </button>

        <button class={"multiple"}
        onClick={(_) => {
          // setShowFilters(!showFilters());
        }}>
        <i class="fa-light fa-square-check fa-3x" style={"color: #666666"}></i>
        </button>
      </div>

      <div class={"list"}>


      <Components.userList.default id={456} userCards={list()} />


      </div>


    </div>
  );
  return Element;
};
export default Component;
