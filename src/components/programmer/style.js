import styled from 'styled-components';

export const WrapperDiv = styled.div`
  width:100%;
  padding:0 10px;
  height:35px;
  margin:0 auto;
  border-bottom:2px solid red;
  display:flex;
  justify-content:space-between;
  align-items:center;
  .keywords{
    display:flex;
    margin-left:30px;
    &>div{
      display:flex;
      justify-content:space-between
    }
    .divider{
      margin:0 15px;
    }
  }

`