import { Header } from "./components/Header";
import styled from 'styled-components'
import { Filter } from "./components/FilterInput";
import { Select } from "./components/FilterSelect";

function App() {
  return (
    <>
      <Header />
      <Dashboard>
        <SearchContainer>
          <Filter />
          <Select />
        </SearchContainer>

      </Dashboard>
    </>
  );
}

const Dashboard = styled.main`
  max-width: 1440px;
  width: 100%;

  padding: 2.5rem 4rem;

  min-height: calc(100vh - 4rem);
  height: 100%;
  background: var(--VeryDarkBlueBackground);

`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default App;
