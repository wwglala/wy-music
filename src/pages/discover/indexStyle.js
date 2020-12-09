import styled from 'styled-components';

export const Nav = styled.nav`
  width:100%;
  height:45px;
  background:#C20C0C;
  ul{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    li{
      padding:0 10px;
      a{
        color:#fff;
      } 
      
    }
    .active{
      background:#9B0909
    }
    
  }

`