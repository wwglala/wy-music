import styled from 'styled-components';

export const WrapperDiv = styled.div`
  width:140px;
  height:160px;
  float:left;
  margin-left:15px;
  div{
    width:140px;
    height:140px;
    border:1px solid black;
  }
  p{
    width:140px;
    height:20px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
`