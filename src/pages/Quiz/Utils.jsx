import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  place-items: center;

  padding: 5% 0;
  .quiz {
    width: 80%;
   
    min-width: 100px;
    background-color: #f2f2f2;
    padding: 2% 2%;
    @media (max-width:1024px){
         padding: 5% 5%;

          }
    .quiz-body {
      display: grid;
      row-gap: 70px;

      .quiz-ques{
        display: flex;
        width: 100%;
         
        overflow: hidden;
        >div{
            padding: 2% 2%;
         min-width: 100%;

        }
      }
      .stats{
            display: flex;
            justify-content: space-between;
            @media (max-width:768px){
             display: grid;
             row-gap: 20px;
            
            }
        span{
            font: 600 1rem 'Poppins','sans-sarif';
            span{
              font: 600 1.5rem 'Poppins','sans-sarif';
              color: #c73434;
            }
         
        }
        }
     
       
      .heading {
        margin-bottom: 2%;
        font: 800 3vmax "Poppins", "sans-sarif";
      }

      .options {
        width: 100%;

        .option {
          font: 600 1.5rem "Poppins", "sans-sarif";
          padding: 2% 0;
         
          text-align: center;
          border: 2px solid purple;
          width: 100%;
        }
        form {
          display: grid;

          row-gap: 40px;
          column-gap: 30px;
         
          @media (max-width:1024px){
       
          }
          label {
          display: flex;

          text-align: start;
         border-radius:3px;
        
          padding: 20px 0;
          outline: 2px solid  gray;
          background-color: #ffff;
          cursor: pointer;
          transition: 0.1s ease;
          font-weight: 500;
          &:active {
            outline-offset:3px;
            outline: 2px solid purple;
              background-color:#f2f2f2; ;
            }
         
          div {
            display: flex;
            column-gap:20%;
            width: 100%;
            margin-right: auto;
            input {
            position: relative;
            left: 9px;
             width: 30px;
               
            &:checked {
              background-color: #c73434;
            }
          }
          }
          
        }
     .buttons{
        display: flex;
        column-gap:20%;
        .btn{
            color: #ffff;
            outline: 2px solid #208bac;
            border-radius: 3px;
            background-color: #208bac;
            padding: 10px 60px;
            width: fit-content;
            transition:0.1s ease;
            font: 500 1.5rem 'Poppins','sans-sarif';
            &:active{
                background:none; 
                color: #208bac;
            }
        }
     }
     
        }
       
       
      }
    }
    .quiz-result{
      
     padding:5% 0 10% 0;
      h1{
        text-align:center;
        color:tomato;
       font: 800 3vmax  'Poppins','sans-sarif';
      }
      h2{
        text-align:center;
      
       font: 800 4vmax  'Poppins','sans-sarif';
      }
    }
    
  }
  
`;
export const Span = styled.span`
  display: flex;
  align-items: center;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  transition: 0.25s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.84);
  }

  &:before {
    display: flex;
    flex-shrink: 0;
    content: "";
    background-color: ${(props) => (props.clicked ? "#2787b4" : "#f0e9e9")};
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin-right: 0.375em;
    transition: 0.25s ease;
  }
`;
