import React, { useEffect, useState } from "react";
import {  Wrapper } from "./Utils";

const Quiz = () => {
  const Data = [
    { id:1, 
      question: "What is the capital of Japan?",
      options: ["Seoul", "Shanghai", "Tokyo", "Bangkok"],
      answer: "Tokyo",
    },
    { id:2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    { id:3,
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Leo Tolstoy",
      ],
      answer: "William Shakespeare",
    },
    { id:4,
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "N2"],
      answer: "H2O",
    },
    { id:5,
      question: "In which year did the Titanic sink?",
      options: ["1909", "1912", "1921", "1930"],
      answer: "1912",
    },
    { id:6,
      question: "Who wrote the book 'To Kill a Mockingbird'?",
      options: [
        "Mark Twain",
        "F. Scott Fitzgerald",
        "Harper Lee",
        "J.K. Rowling",
      ],
      answer: "Harper Lee",
    },
    { id:7,
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
    { id:8,
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
    { id:9,
      question: "Who was the first man to step on the moon?",
      options: [
        "Buzz Aldrin",
        "Neil Armstrong",
        "Yuri Gagarin",
        "Michael Collins",
      ],
      answer: "Neil Armstrong",
    },
    { id:10,
      question: "What is the national flower of India?",
      options: ["Lotus", "Rose", "Tulip", "Sunflower"],
      answer: "Lotus",
    },
  ];
  
  const [checked, setchecked] = useState(null);
  const [question, setQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
 const [submit, setsubmit] = useState(false)
  const [temp, setTemp] = useState([]); 
  const [mcq,setMcq]=useState([])
  const [timer ,setTimer]=useState(60)
  
  
  const handleChange = (option) => {
    if (checked === option) {
      setchecked(null);
    }
    setchecked(option);
   
  
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
  

       setsubmit(true);
    console.log("selectedoption ", checked);
  };
  const handleChecked = (question,option,i) => {
   
  question.option=option
  question.option_index=i
  
  
  };
  
  const saveAnswers = (data,index) => {
   data.checked=checked;
   data.userOption=Data[0].options[checked];
   
    setTemp([...temp, data]); // Use setTemp to update the state
   
     
       
       
  let result=[...temp,data]
   localStorage.setItem("userAnswers",JSON.stringify(result))
   setchecked(null);

  }
  const handleNext = (index,data) => {
   (index===Data.length-1) ? setQuestion(index):setQuestion(index+1)
 
   saveAnswers(data)
   setTimer(60)
   if(index===Data.length-1){
   setsubmit(true)
   }
  }

  const remainingQuestions = mcq.length - question - 1;
  
 // Make sure to list any dependencies here, if needed

  useEffect(() => {
  
    const savedAnswers = JSON.parse(localStorage.getItem('userAnswers'));
    if (savedAnswers) {
      setUserAnswers(savedAnswers);
     
    }
  
  
    
  
  }, []); //
    
  useEffect(() => {
    const storedScore = localStorage.getItem('userScore');
    if (storedScore) {
      // Show the user's score
    }
  }, []);
  
  useEffect(() => {
   
   
    if (!submit) {
      const shuffledData = [...Data].sort(() => Math.random() - 0.5);
      setMcq([...shuffledData])
     
  
     
    }
   
      
  }, [submit]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevSeconds =>{ 
        if(prevSeconds>0){
         return prevSeconds - 1
       
      }
      else{
        setsubmit(true)
        return prevSeconds
      }
    
      });
    }, 1000);
    return () => clearInterval(interval);
  })
  
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  const calculateScore = (userAnswers, Data) => {
    let score = 0;
    
    userAnswers.forEach(userResponse => {
      const correctAnswer = Data.find(answer => answer.id === userResponse.id);
      
      if (correctAnswer && correctAnswer.answer === userResponse.option) {
        score++;
      }
     
    });
    
    return score;
  };
  
  // Calculate the score
  const score = calculateScore(userAnswers, Data);
   
  console.log(score)
 
 
  return (
    <>
      <Wrapper>
        <div className="quiz">
        { !submit? <div className="quiz-body">
            <div className="stats">
             
              <span>Remaining Question  <span>{remainingQuestions}</span> </span>
              <span>Time Left <span>🕛 {formatTime(timer)}</span>  </span>
            </div>
            <div className="quiz-ques">
            {mcq.map((data, index) => {
              return (
             index===question && (
                  <div className="" key={index}>
                  <div className="heading">
                    Q{index + 1}. {data.question}?
                  </div>

                  <div className="options">
                    <form
                      method="post"
     
                      onSubmit={handleSubmit}
                    >
                      {data.options.map((item, i) => (
                        <label
                          htmlFor={`option-${i}`}
                         key={i}
                          onChange={()=> handleChange(i)}
                        >
                          <div>
                            <input
                              type="radio"
                              name="radio"
                              id={`option-${i}`}
                              onChange={()=>handleChecked(data,item,i)}
                              checked={checked === i }
                            />

                            <span>{item}</span>
                          </div>
                        </label>
                      ))}

                      <div className="buttons">
                        <div   onClick={()=>handleNext(index,data)} className="btn">
                        {index===Data.length-1 ? "Submit" : "Next"}{" "}
                        </div>
                        
                   
                      </div>
                    </form>
                  </div>

                  </div>
             )
               
              );
            })}
             </div>
          </div> : 
          <div className="quiz-result">

             <h1>Your Score </h1> 
             <h2>{score}%</h2> 
            {score < 50 ? <h2>Fail</h2> :  <h2>Good</h2> }
            
          
          
            
          </div>}
        </div>
      </Wrapper>
    </>
  );
};

export default Quiz;
