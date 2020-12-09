import styled from 'styled-components';

export const Header = styled.header`
  height: 85px;
  width: 100%;
  background: #242424;
  display:flex;
  justify-content:center;
  ul{
    width:980px;
    display: flex;
    justify-content:center;
  }
  .logo{
    width:157px;
    font-size:36px;
    color:#fff;
    text-align:center;
    line-height:85px;
  }
  li{
    flex:1;
    text-align:center;
    .act{
      color:#fff;
      &:after{
        content:'xxx';
        color:red
      }
    }
  }
  a{
    color:#ccc;
    line-height:85px;

  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 210px;
  box-shadow:0 5px 5px 5px #eaeaea;
`
