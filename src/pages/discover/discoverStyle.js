import styled from 'styled-components';

export const WrapperDiv = styled.div`
  position:relative;
  width: 980px;
  margin: auto;
  .left,.right{
    position:absolute;
    font-size:32px;
    top:50%;
    transform:translate3d(0,-50%,0);
    border:1px solid black;
    cursor: pointer;
  }
  .left{
    left:-100px;
  }
  .right{
    right:-100px;
  }
`