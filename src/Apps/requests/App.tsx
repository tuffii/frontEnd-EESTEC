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
    flag: boolean
  }
  type Users = Array<User>

  let users: Users = [
    {
      Name: 'Matushnko',
      secondName: 'Artur',
      thirdName: 'Vladimirovitch',
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


  function getFlaggedList(users: Users): Users {
    let flaged: Users = [];
    let i: number = 0
    users.forEach(function () {
      if (users[i].flag)
      {
        flaged.push(users[i])
        i++
      }
    })
    return flaged
  }
  let flaged: Users;


  const [UpdateDatabase, setUpdateDatabase] = createSignal(true);
  const [acceptInvite, setAcceptInvite] = createSignal(false);
  const [rejectInvite, setRejectInvite] = createSignal(false);


  const Element: SolidJS.JSX.Element = (

    <div class={`customElement`} id={`requests`}>


      {acceptInvite() && (
        <div class={"blacker"}>
          <div class={"meny"}>
            <div class={"head"}>
            <div class={"textContainer"}>
              <div class={"text"}>
              Filtres:
              </div>
            </div>
              <button class={"close"} onClick={(_) => {
                  setAcceptInvite(!acceptInvite());
                }}>
                <i class="fa-light fa-xmark fa-2x"></i>
              </button>
            </div>
            <div class={"settings"}>

              <Components.userList.default id={456} userCards={getFlaggedList(users)} />

            </div>
          </div> 
        </div>
      )}


      {rejectInvite() && (
        <div class={"blacker"}>
          <div class={"meny"}>
            <div class={"head"}>
            <div class={"textContainer"}>
              <div class={"text"}>
              Filtres:
              </div>
            </div>
              <button class={"close"} onClick={(_) => {
                  setRejectInvite(!rejectInvite());
                }}>
                <i class="fa-light fa-xmark fa-2x"></i>
              </button>
            </div>
            <div class={"settings"}>

            <Components.userList.default id={456} userCards={flaged} />
              
            </div>
          </div> 
        </div>
      )}


      <div class={"header"}>
        <div class={"search"}>
          <div class={"glass"} >
            <i class="fa-regular fa-magnifying-glass fa-xl"></i>
          </div>
          <input class={"input"}
            placeholder = "Поиск..."
            onInput={(_) => { 
              setUpdateDatabase(!(UpdateDatabase()))
              UpdateInputValue(_.currentTarget.value)
              setUpdateDatabase(!(UpdateDatabase()))
            }}/>
        </div>
        <button class={"multiple"}
        onClick={(_) => {
          // flaged = getFlaggedList(users)
          setRejectInvite(!rejectInvite());
          console.log(flaged)
        }}>
          <i class="fa-light fa-square-xmark fa-3x" style={"color: #666666"}></i>
        </button>

        <button class={"multiple"}
        onClick={(_) => {
          flaged = getFlaggedList(users)
          setAcceptInvite(!acceptInvite());
          console.log(flaged)
        }}>
          <i class="fa-light fa-square-check fa-3x" style={"color: #666666"}></i>
        </button>
      </div>


      {UpdateDatabase() && (
      <div class={"list"}>
        <Components.userList.default id={456} userCards={list()} />
      </div>
      
      )}


    </div>
  );
  return Element;
};
export default Component;
