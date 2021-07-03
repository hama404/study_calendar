import styled from 'styled-components'

export const PrimaryButton = styled.button`
  font-size: 1rem;
  margin: 0.125rem 0.5rem;
  padding: 0.15rem 1rem;
  border-radius: 3px;
  color: #fff;
  background: rgba(103, 58, 183, 0.5);
  border: 1px solid rgba(103, 58, 183, 0.5);
  @media (min-width: 576px) {
    &:hover {
      background: rgba(103, 58, 183, 0.6);
    }
  }
`

export const SecondaryButton = styled.button`
  font-size: 1rem;
  margin: 0.125rem 0.5rem;
  padding: 0.15rem 1rem;
  border-radius: 3px;
  color: rgba(103, 58, 183, 0.5);
  background: #fff;
  border: 1px solid rgba(103, 58, 183, 0.5);
  @media (min-width: 576px) {
    &:hover {
      background: rgba(103, 58, 183, 0.1);
    }
  }
`

export const GreyButton = styled.button`
  font-size: 1rem;
  margin: 0.125rem 0.5rem;
  padding: 0.15rem 1rem;
  border-radius: 3px;
  color: #fff;
  background: #ccc;
  border: 1px solid #999;
  @media (min-width: 576px) {
    &:hover {
      background: #bbb;
    }
  }
`

export const IconButton = styled.button`
  display: inline-flex;
  font-size: 1.25em;
  @media (min-width: 576px) {
    &:hover {
      color: #999;
    }
  }
`
