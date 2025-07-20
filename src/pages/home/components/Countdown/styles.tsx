import styled from 'styled-components'

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const CountdownContainer = styled.div`
  font-size: 10rem;
  font-family: 'roboto mono', monospace;
  font-weight: bold;
  color: ${({ theme }) => theme['gray-100']};
  display: flex;
  gap: 1rem;
  line-height: 8rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
