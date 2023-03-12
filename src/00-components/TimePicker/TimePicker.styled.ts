import styled from "styled-components";

const StyledTimePicker = {
  Container: styled.div`
  position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
Input: styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 4px;
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: white;
  }
  &::-webkit-calendar-picker-indicator {
   display: none;
  }

  `,
  Modal: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 52px;
    border-radius: 4px;
    left: 0;
    z-index: 200;
    display: flex;
    ul{
      height: 200px;
      overflow: scroll;
      width: 100%;
      list-style: none;
      padding: 0;
    }
    li{
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .active{
      background-color: rgba(0, 0, 0, 0.5);
    }
  `,
}

export default StyledTimePicker;