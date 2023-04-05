import * as SolidJS from 'solid-js';
import './index.css';

interface UserCard {
  readonly Name: string;
  readonly secondName: string;
  readonly thirdName: string;
}

interface UserCardsList {
  readonly id: number;
  readonly userCards: Array<UserCard>;
}

const Component: SolidJS.Component<UserCardsList> = (_) => {
  const listLineLength = 2;
  const [searchValue, setSearchValue] = SolidJS.createSignal('');
  const listLines: Array<Array<UserCard>> = [];
  let listLine: Array<UserCard> = [];

  for (let i = 0; i < _.userCards.length; i++) {
    const userCard = _.userCards[i];

    if (listLine.length < listLineLength) {
      listLine.push(userCard);
    } else {
      listLines.push(listLine);
      listLine = [];
      listLine.push(userCard);
    }
  }

  if (listLine.length > 0) {
    listLines.push(listLine);
  }

  console.log(listLines);

  const handleSearchInput = (event: Event) => {
    setSearchValue((event.target as HTMLInputElement).value);
  };

  const Element: SolidJS.JSX.Element = (
    <div class="component">
      <div class="searchField">
        <input
          type="text"
          placeholder="Поиск"
          onInput={handleSearchInput}
          value={searchValue()}
        />
      </div>
      <SolidJS.For each={listLines}>
        {(cardsLine) => (
          <div class={'line'}>
            <SolidJS.For each={cardsLine.filter(({ Name, secondName, thirdName }) =>
                `${Name}${secondName}${thirdName}`.toLowerCase().includes(searchValue().toLowerCase())
              )}>
              {(card) => {
                const userElement: SolidJS.JSX.Element = (
                  <div class="element">
                    <div class={'name'}>{card.Name}</div>
                    <div class={'name'}>{card.secondName}</div>
                    <div class={'name'}>{card.thirdName}</div>
                    <div class={'roles'} no-select={'true'}></div>
                    <div class={'buttonContainer'}>
                      <button class={'profile'}>Profile</button>
                    </div>
                  </div>
                );
                return userElement;
              }}
            </SolidJS.For>
          </div>
        )}
      </SolidJS.For>
    </div>
  );

  return Element;
};

export default Component;