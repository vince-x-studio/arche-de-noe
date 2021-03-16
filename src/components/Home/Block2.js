import styled from '@emotion/styled'
import React from 'react'
import booksIcon from '../../assets/images/home/block2/books.png'
import penIcon from '../../assets/images/home/block2/pen.png'
import professorsIcon from '../../assets/images/home/block2/professors.png'
import studentsIcon from '../../assets/images/home/block2/students.png'
import { breakpoints } from '../../utils/styles'

const Block2 = () => {
  return (
    <Container>
      <Box>
        <TextBox color>
          <Number>250</Number>
          <Text>élèves</Text>
        </TextBox>
        <Icon src={studentsIcon} />
      </Box>

      <Box>
        <TextBox>
          <Number>15</Number>
          <Text>Professeurs</Text>
        </TextBox>
        <Icon src={professorsIcon} />
      </Box>

      <Box>
        <TextBox color>
          <Number>11</Number>
          <Text>Professeurs</Text>
        </TextBox>
        <Icon src={penIcon} />
      </Box>

      <Box column>
        <TextBox row style={{ margin: '0 auto', width: 'auto', alignItems: 'flex-end' }}>
          <Number style={{ marginBottom: '0.1em', marginRight: '0.1em' }}>4</Number>
          <Icon style={{ height: '3.5em' }} src={booksIcon} />
        </TextBox>
        <Text style={{ color: 'white', lineHeight: '1.1' }}>Domaines d’apprentissage</Text>
      </Box>
    </Container>
  )
}

export default Block2

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 4em;
  height: 17em;
  background-color: #00a1c6;

  @media (max-width: ${breakpoints.l}px) {
    padding: 0 3em;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  height: 5em;
  font-family: 'Oswald';
  font-weight: 400;
  align-items: flex-end;
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  width: fit-content;
  margin: 0 .2em -0.4em 0;
  color: ${props => (props.color ? '#80edff' : 'white')};
  text-align: right;
  justify-content: flex-end;
`

export const Number = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  margin: 0;
  line-height: 0.8;
`

export const Text = styled.p`
  margin: 0;
  font-size: 1.5em;
`

export const Icon = styled.img`
  height: 4.5em;
`
