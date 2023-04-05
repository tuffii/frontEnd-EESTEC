import * as SolidJS from "solid-js";
import { createSignal } from 'solid-js';
import * as Components from './Components/__components'
import * as Hooks from "../../Hooks/__hooks";
import "./App.css";

const Component: SolidJS.Component = () => {
  const [showFilters, setShowFilters] = createSignal(false);
  const [UpdateDatabase, setUpdateDatabase] = createSignal(true);

  const [isSortedAlphabet, setIsSortedAlphabet] = createSignal(false);
  

  interface User {
    readonly Name: string
    readonly secondName: string
    readonly thirdName: string
  }
  type Users = Array<User>

  
  const users: Users = [
    {
      Name: 'Matur',
      secondName: 'artur',
      thirdName: 'rte'
    },
    {
      Name: 'John',
      secondName: 'Doe',
      thirdName: 'Smith'
    },
    {
      Name: 'Jane',
      secondName: 'Doe',
      thirdName: 'Johnson'
    },
    {
      Name: 'Matur',
      secondName: 'artur',
      thirdName: 'rte'
    },
    {
      Name: 'John',
      secondName: 'Doe',
      thirdName: 'Smith'
    },
    {
      Name: 'Jane',
      secondName: 'Doe',
      thirdName: 'Johnson'
    }, 
    {
      Name: 'Alice',
      secondName: 'Jones',
      thirdName: 'Brown'
    },
    {
      Name: 'Bob',
      secondName: 'Smith',
      thirdName: 'Johnson'
    },
    {
      Name: 'Sarah',
      secondName: 'Williams',
      thirdName: 'Davis'
    },
    {
      Name: 'Kevin',
      secondName: 'Lee',
      thirdName: 'Chung'
    },
    {
      Name: 'Emily',
      secondName: 'Johnson',
      thirdName: 'Taylor'
    },
    {
      Name: 'David',
      secondName: 'Miller',
      thirdName: 'Garcia'
    }
  ];

  const [list, setList] = createSignal([...users], {equals: (previous, next) => {
    return false;
  }});


  function sortUsersAlphabetically(users: Users): void {
    setUpdateDatabase(!(UpdateDatabase()))
    setIsSortedAlphabet(!(isSortedAlphabet()))
    setList([...users.sort((a, b) => {
      const nameA = a.Name.toUpperCase()
      const nameB = b.Name.toUpperCase()
      return nameA === nameB ? 0 : ( nameA < nameB ? (isSortedAlphabet() ? -1 : 1) : (isSortedAlphabet() ? 1 : -1))
    })])
    setUpdateDatabase(!(UpdateDatabase()))
  }

  const filterUsers = (users: Users, searchValue: string) => {
    return users.filter(({ Name, secondName, thirdName }) =>
      `${Name}${secondName}${thirdName}`
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
  };

  const UpdateInputValue = (str: string) => {
    return setList([...filterUsers(users, str)])
  }

  const Element: SolidJS.JSX.Element = (
    <div class={`customElement`} id={`usersList`}>
      {showFilters() && (
        <div class={"blacker"}>
          <div class={"meny"}>
            <div class={"head"}>
            <div class={"textContainer"}>
              <div class={"text"}>
              Filtres:
              </div>
            </div>
              <button class={"close"} onClick={(_) => {
                  setShowFilters(!showFilters());
                }}>
                <i class="fa-light fa-xmark fa-2x"></i>
              </button>
            </div>
            <div class={"settings"}>
              {/* <label class="switch">
                <input id='one' type="checkbox" class="checkbox-label"/>
                <span class="slider">filter 3</span>
              </label> */}
              <Components.flexButton.default Before="fa-solid fa-arrow-down-a-z" After="fa-solid fa-arrow-up-a-z" function={{entity: sortUsersAlphabetically, parameters: [list()]}}
              />
            </div>
          </div> 
        </div>
      )}
      <div class={"header"}>
        <div class={"search"}>
          <div class={"button"} >
            <i class="fa-regular fa-magnifying-glass"></i>
          </div>
          <input class={"input"}
            placeholder = "Поиск..."
            onInput={(_) => { 
              setUpdateDatabase(!(UpdateDatabase()))
              UpdateInputValue(_.currentTarget.value)
              setUpdateDatabase(!(UpdateDatabase()))
            }}/>
        </div>
        <button class={"filters"}
        onClick={(_) => {
          setShowFilters(!showFilters());
        }}
        >
        <i class="fa-solid fa-filters"></i>
        </button>
      </div>

      {UpdateDatabase() && (
      <Components.userList.default id={456} userCards={list()} />
      )}

    </div>
  )
  return Element
}
export default Component

