import styled from "styled-components"

export const Menu = styled.div`
  position: relative;
  z-index: 223;
  background: #fff;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

export const MenuBlock = styled.ul`
  display: flex;
  align-items: center;
`

export const MenuNavigate = styled.div`

`

export const MenuActions = styled.div`

`

export const MenuLink = styled.li`
  margin-right: 40px;
  border-bottom: 1px solid transparent;

  &.active {
      border-bottom: 1px solid #000;
    }

  & > a {
    text-decoration: none;
    line-height: 150%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    padding: 26px 0;
    font-weight: 400;
    color: #222326;
    font-size: 12px;
  }
`

export const Logo = styled.img`
  width: 48px;
`