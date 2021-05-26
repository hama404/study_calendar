import styled from 'styled-components'

export const ListItem = styled.li`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.1)
  }
`

export const ListIcon = styled.div`
  display: inline-flex;
  font-size: 1.5rem;
  min-width: 3rem;
  flex-shurink: 0;
`

export const ListText = styled.div`
  width: 100%;
  line-height: 1.5;
  padding: 0.25rem 0;
`

export const ListClose = styled.div`
  text-align: right;
`

export const CloseIcon = styled.div`
  display: inline-flex;
  padding: 0.5rem;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    color: #999;
  }
`
