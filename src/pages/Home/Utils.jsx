
import styled from "styled-components";

export const Wrapper = styled.section`
display: grid;
place-items: center;
padding: 15% 0;
.home-body{
    display: grid;
    place-items: center;
    width: 80%;
    min-width:100px;
    padding: 5% 0;
    .home-heading{
        padding: 3% 0;
        font: 800 3vmax 'Poppins','sans-sarif';
    }
    .btn{
      background:black;
      color:white;
     
      padding:10px 60px;  
      border-radius:5px;
     
      outline: 2px solid black;
      font: 600 1.5rem 'Poppins','sans-sarif';
       transition:ease;
      &:active{
        outline: 2px solid black;
        background:#ffff;
      color:black;
      }
    }
  
}

`

