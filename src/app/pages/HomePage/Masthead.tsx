import * as React from 'react';
import styled from 'styled-components/macro';
import { Logos } from './Logos';
import { Title } from './components/Title';
import { Lead } from './components/Lead';
import { A } from 'app/components/A';
import { t } from 'i18next';
import { messages } from './messages'

export function Masthead() {
  return (
    <Wrapper>
      <Title>LatteSyobon - lattex</Title>
      <Lead>
        
      </Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
