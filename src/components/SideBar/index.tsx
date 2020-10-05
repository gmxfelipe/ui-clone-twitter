import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';


import { Container, SearchWrapper, SearchInput, SearchIcon, Body  } from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter"/>
              <SearchIcon />
          </SearchWrapper>
          <StickyBox>
          <Body>
            <List  title="Talver você curta"
            elements={[
            <FollowSuggestion 
            name="Leonardo Brienza"
            nickname="@leobriza"
            />,
            <FollowSuggestion 
            name="Gustavo Oliveira"
            nickname="@gustaa_02"
            />,
            <FollowSuggestion 
            name="Paulo Eduardo"
            nickname="@devpaulo"
            />
          ]}
            />
             <List  title="Talver você curta"
            elements={[
             <News />,
             <News />,
             <News />,
             <News />
            ]}
            />
                 <List  title="Talver você curta"
            elements={[
             <News />,
             <News />,
             <News />,
             <News />
            ]}
            />
                 <List  title="Talver você curta"
            elements={[
             <News />,
             <News />,
             <News />,
             <News />
            ]}
            />
          </Body>
          </StickyBox>
      </Container>
  );
}

export default SideBar;