import styled, {keyframes} from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -7px 0 40px;
  width: 100%;
`;

export const Results = styled.p`
  font-size: 24px;
  line-height: 35px;
  letter-spacing: 0.03em;
  color: #000000;
`;

const scaleIn = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.9);
  }
  50%{
    opacity: 0.3;
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
`;

export const FilterItem = styled.div`
  min-width: 105px;
  max-width: 105px;
  width: 100%;
  &:not(:last-child){
    margin-right: 16px;
  }

  .custom-select {
    &__control {
    background-color: transparent !important;
    border: none !important;
    outline: none !important;
    border-radius: 0 !important;
    cursor: pointer !important;
    
    &--is-focused {
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }
    &__menu {
      z-index: 3 !important;
      padding: 0 !important;
      margin: 0 !important;
      animation: ${scaleIn} 0.25s ease-in-out;
      background-color: #fff !important;
      color: #000 !important;

      &-list {
        padding: 0 !important;
      }

      &__active{
        background-color: red !important;
      }
    }
    &__option {
      cursor: pointer !important;
      padding: 10px 8px !important;
      &--is-focused {
        background-color: rgba(199, 199, 199, 0.25) !important;
      } //#f8c9b4
      &--is-selected {
        background-color: #F4A482 !important;
        color: #fff;
      } 
    }
    &__value-container {
      padding: 0 !important;
      margin-right: 0px;

      &:hover {
        color: #F4A482 !important;
      }
    }
    &__single-value {
      color: #887568 !important;

      &:hover {
        color: #F4A482 !important;
      }
    }
    &__indicator {
      padding: 0 !important;
      color: #887568 !important;

      &:hover {
        color: #F4A482 !important;
      }

      > svg {
        width: 16px;
      }
    }
    &__indicator-separator {
      display: none !important;
    }
  }
`;

export const FiltersBody  = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceFilter = styled.div`
min-width: 120px;
width: 100%;
  margin-right: 16px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  & > svg {
    margin-left: 6px;
    transform: rotate(90deg);
    width: 4.7px;
    & > path {
      stroke: #222326;
      stroke-width: 1.7px;
    }
  }
`;