import React, {Component} from 'react';
import styles from './App.css'
import mySound from './audio/[ONTIVA.COM] 30 Second Timer With Jeopardy Thinking Music-320k.mp3';


// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'



// const SpeechRecognition =  window.webkitSpeechRecognition
// const recognition = new SpeechRecognition()

// recognition.continuous = true
// recognition.interimResults = true
// recognition.lang = 'en-US'
let sounds = {};
sounds.countdown = new Audio();
sounds.countdown.src = mySound;
const audioEl = document.getElementsByClassName("audio-element")[0];





class App extends Component {
    constructor(){
        super()
        this.state = {
            listening: false,
            userResponse: '',
            allResponses: [],
            recommendations: [],
            toggleQuestion: false,
            questionList: ["Tell me about the App you built this summer.", "What are your strengths?", "What are your weaknesses?", "Tell me about a time you've worked with a team.", "Tell me about a time you had to be very strategic in order to meet all your top priorities",
                           "Tell me about a leadership experience you're proud of.", "Tell me about how your past coworkers would describe you.", "Tell me about a time you were under a lot of pressure. What was going on, and how did you get through it?", "Tell me about a time you had to be very strategic in order to meet all your top priorities", "Tell me about a time you've worked with a team.", "Tell Me about a time you failed and how did you learn from this", "Explain to me why you chose your major"],
            buttonArray_listening:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            currentQuestion: '',
            // userFeedback: [],
            finishedInterview: false,
            data: null,
            positions: null,
            doneParsing: false,
            resumeData: null,
            positions: null,
            question_index: 100,
            score: 0,
            current_score_to_add: 0,
            
        }
        this.toggleListen = this.toggleListen.bind(this)
        this.updateScore = this.updateScore.bind(this)
        this.generateQuestion = this.generateQuestion.bind(this)
        this.handleListen = this.handleListen.bind(this)
        this.provideFeedback = this.provideFeedback.bind(this)
    }

    /*

    const positionList = this.state.data["positions"]
    console.log(positionList)
    const school = this.state.data["schools"]
    console.log(school)
    var arrayLength = positionList.length;
    var tempQuestions = []
    for (var i = 0; i < positionList; i++) {
        const questionTemp = "How has your experience at " + positionList[i]["org"] + " helped you develop as a person?"
        const questionTemp2 = "What is your proudest project at " + postitionList[i]["org"] + "?"
        tempQuestions.push({questionTemp})
        tempQuestions.push({questionTemp2})
        
    }

    */
    generateQuestion() {
        const min = 0;
        const max = this.state.questionList.length;
        const rand = Math.round(Math.random() * ((max - 1) - min));
        console.log(this.state.question_index)
        const question = this.state.questionList[this.state.question_index]
        //console.log(question)
        this.setState({
            toggleQuestion: true,
            currentQuestion: question,
        })
    }

    updateScore() {
      console.log(this.state.score);
      let score_to_add = 100;
      if(this.state.question_index === 0 ||this.state.question_index === 4 || this.state.question_index === 8 ||  this.state.question_index == 12)
      {
        score_to_add = 100;

      }
      if(this.state.question_index === 1 ||this.state.question_index === 5 || this.state.question_index === 9 ||  this.state.question_index === 13)
      {
        score_to_add = 200;
      }
      if(this.state.question_index === 2 ||this.state.question_index === 6 || this.state.question_index === 10 ||  this.state.question_index === 14)
      {
        score_to_add = 300;
      }
      if(this.state.question_index === 3 ||this.state.question_index === 7 || this.state.question_index === 11 ||  this.state.question_index === 15)
      {
        score_to_add = 400;
      }
      let current_score = score_to_add + this.state.score;
      this.setState({
        current_score_to_add: score_to_add,
    })
    this.setState({
      score: current_score,
  })

    }

    toggleListen() {
        console.log(this.state.question_index)
        let temp_listening = this.state.buttonArray_listening;
        temp_listening[this.state.question_index] = !temp_listening[this.state.question_index];
        this.setState({
            buttonArray_listening: temp_listening,
            listening: !this.state.listening,
            
        }, this.handleListen)
        
        
        
        
        
        
        

    }

    handleListen() {
      let score_to_add = 100;
      if(this.state.question_index === 0 ||this.state.question_index === 4 || this.state.question_index === 8 ||  this.state.question_index == 12)
      {
        score_to_add = 100;

      }
      if(this.state.question_index === 1 ||this.state.question_index === 5 || this.state.question_index === 9 ||  this.state.question_index === 13)
      {
        score_to_add = 200;
      }
      if(this.state.question_index === 2 ||this.state.question_index === 6 || this.state.question_index === 10 ||  this.state.question_index === 14)
      {
        score_to_add = 300;
      }
      if(this.state.question_index === 3 ||this.state.question_index === 7 || this.state.question_index === 11 ||  this.state.question_index === 15)
      {
        score_to_add = 400;
      }
      let current_score = score_to_add + this.state.score;
      this.setState({
        current_score_to_add: score_to_add,
    })
        console.log(this.state.listening)
        console.log(this.state.buttonArray_listening)
        console.log('listening?', this.state.listening)
        

        //didnt end up really using this...it sets the state of "current question"
        if (this.state.buttonArray_listening[this.state.question_index]) {
            this.generateQuestion();
            
        } 
        sounds["countdown"].play();
        setTimeout(() => {
          if (this.state.buttonArray_listening[this.state.question_index]) {
            console.log(this.state.question_index);
            console.log("hello1");  
            document.getElementById(this.state.question_index).style.backgroundColor = 'black';
            sounds["countdown"].pause();
            
            
          }
          console.log("hello2");
      }, 10000);
      
      
      console.log("hello");
      let temp_listening = this.state.buttonArray_listening;
            temp_listening[this.state.question_index] = !temp_listening[this.state.question_index];
            this.setState({
              buttonArray_listening: temp_listening,
              listening: !this.state.listening,
            })
      console.log(this.state.buttonArray_listening);
      

    }

        


    

    provideFeedback(){
        console.log(this.state.finishedInterview)
        console.log(this.state.allResponses)
        console.log(this.state.userFeedback)
        this.setState({
            finishedInterview: true,
        }, () => console.log(this.state.finishedInterview))
        //console.log(this.state.finishedInterview)
    }

    onUploadHandler(event) {
        const file = event.target.files[0];
    
        // Simple POST request with a JSON body using fetch
        const formData = new FormData();
        formData.append('file', file);
        const requestOptions = {
          method: 'POST',
          body: formData,
        };
        console.log("Fetching")
        fetch('/parse', requestOptions)
          .then((response) => {
              return response.json()})
          .then((resume) => {
            this.setState({ resume })
            const degrees = resume.schools ? resume.schools.map((school) => `Degree: ${school.degree ?? '??'}. Major: ${school.field ?? '??'}.`) : [];
            const schools = resume.schools ? resume.schools.map((school) => `${school.org ?? '??'} from ${school.start ? school.start.month : '??'}/${school.start ? school.start.year : '??'} to ${school.end ? school.end.month : '??'}/${school.end ? school.end.year : '??'}.`) : [];
            const links = resume.links ? resume.links.map((link) => link.url ?? '??').join(', ') : [];
            const data = [
              { info: 'Name', parsed: resume.names ? resume.names.join(', ') : [] },
              { info: 'Email', parsed: resume.emails ? resume.emails[0].value : [] },
              { info: 'Phone', parsed: resume.phones ? resume.phones[0].value : [] },
              { info: 'University', parsed: schools.join(', ') },
              { info: 'Degree', parsed: degrees.join(', ') },
              { info: 'Links', parsed: links },
              { info: 'Summary', parsed: resume.summary && resume.summary.experience ? resume.summary.experience : '??' },
              { info: 'Skills', parsed: resume.summary && resume.summary.skills ? resume.summary.skills : '??' },
            ];
            const positions = resume.positions ? resume.positions.map((position) => ({
              company: position.org ?? '??', position: position.title ?? '??', date: `${position.start ? position.start.month : '??'}/${position.start ? position.start.year : '??'} - ${position.end ? position.end.month : '??'}/${position.end ? position.end.year : '??'}`, summary: position.summary ?? '??',
            })) : [];
            const limitedPositions = resume.positions ? resume.positions.map((position) => ({
              company: `${position.org} -- 
                ${position.title} (${position.start ? position.start.month : '??'}/${position.start ? position.start.year : '??'} - ${position.end ? position.end.month : '??'}/${position.end ? position.end.year : '??'}` ?? '??',
              summary: position.summary ?? '??',
            })) : [];
    
           this.setState({ resumeData: data, positions: positions});
           this.setState({data: resume})
           const positionList = this.state.data["positions"]
           const school = this.state.data["schools"]
           const arrayLength = positionList.length;
           const tempQuestions = []
           for (var i = 0; i < arrayLength; i++) {
               const questionTemp = "How has your experience at " + positionList[i]["org"] + " helped you develop as a person?"
               const questionTemp2 = "What is your proudest project at " + positionList[i]["org"] + "?"
               const questionTemp3 = "What have you learned from " + positionList[i]["org"] + "?"
               const questionTemp4 = "Why have you left your position at " + positionList[i]["org"] + "?"
               const questionTemp5 = "Tell me more aboout your experience at " + positionList[i]["org"] + "?"
               const questionTemp6 = "Give me an example of a time you faced a conflict while working on a team at " + positionList[i]["org"] + ". How did you handle that?"
               
               tempQuestions.push(questionTemp)
               tempQuestions.push(questionTemp2)
               tempQuestions.push(questionTemp3)
               tempQuestions.push(questionTemp4)
               tempQuestions.push(questionTemp5)
               tempQuestions.push(questionTemp6)
           }
          
        //    questionList: [, ],
            
           console.log(tempQuestions) 
           let questionList1 = this.state.questionList
           questionList1 = questionList1.concat(tempQuestions)
           this.setState({questionList: questionList1, doneParsing: true})
          })
          .catch((error) => {
            console.log(error);
          });
      }
      
    render() {
        return (
            <div className='content'>
                <div className='headerContent'>
                    <h1 className='titleHeader'>Welcome to Resume Jeopardy</h1>
                </div>
                {/*-----------------------Page Content-------------------------------------------------*/}
                <div className='pageContent'>
                    <div className='resumeContainer'>
                        <h1 className='titleHeader'>Instructions</h1>
                            <div className = 'instructions'>
                                <p>1. Submit your resume below</p>
                                <p>2. Click on the board piece you want to select.</p>
                                <p>3. You will have 30 seconds to answer the question.</p>
                                <p>4. If you felt your answer was sufficient, click the green button to increase the score.</p>
                                
                            </div>
                        <h1 className='titleHeader'>Insert Resume</h1>
                        <form method="post" action="#" id="#">
                            <div className="form-group files">
                            <label for="file">Upload resume (docx or pdf):</label>
                            <input type="file" name="file" className="form-control" onChange={(event) => this.onUploadHandler(event)} />
                            </div>
                        </form>
                        
                        <h1 className='titleHeader'>Resume Info</h1>
                        <p>{this.state.doneParsing && this.state.resumeData.map((information) => <p className='instructions'> {information.info} : {information.parsed} </p>)}</p>
                    </div>
                    {/*------------------------Question Container------------------------------------------*/}
                   
                    <div className='scoreBoard'>Score: {this.state.score} </div> 
                    {/* <button id='add_button' className='scoreBtn' onClick={()=>(this.score += 100)}> </button> */}
                    <div className='jeopardyBoard'>
                        <div className='interviewColumn'>
                            <button id='0' className='toggleButton' onClick={()=>{this.setState({question_index: 0}); this.toggleListen();}  }>{!this.state.buttonArray_listening[0] ? "$100" : this.state.questionList[0]}</button>
                            <button id='1' className='toggleButton' onClick={()=>{this.setState({question_index: 1}); this.toggleListen();}  }>{!this.state.buttonArray_listening[1] ? "$200" : this.state.questionList[1]}</button>
                            <button id='2' className='toggleButton' onClick={()=>{this.setState({question_index: 2}); this.toggleListen();}  }>{!this.state.buttonArray_listening[2] ? "$300" : this.state.questionList[2]}</button>
                            <button id='3' className='toggleButton' onClick={()=>{this.setState({question_index: 3}); this.toggleListen();}  }>{!this.state.buttonArray_listening[3] ? "$400" : this.state.questionList[3]}</button>
                            
                        </div>
                        <div className='interviewColumn'>
                            
                            <button id='4' className='toggleButton' onClick={()=>{this.setState({question_index: 4}); this.toggleListen();}  }>{!this.state.buttonArray_listening[4] ? "$100" : this.state.questionList[4]}</button>
                            <button id='5' className='toggleButton' onClick={()=>{this.setState({question_index: 5}); this.toggleListen();}  }>{!this.state.buttonArray_listening[5] ? "$200" : this.state.questionList[5]}</button>
                            <button id='6' className='toggleButton' onClick={()=>{this.setState({question_index: 6}); this.toggleListen();}  }>{!this.state.buttonArray_listening[6] ? "$300" : this.state.questionList[6]}</button>
                            <button id='7' className='toggleButton' onClick={()=>{this.setState({question_index: 7}); this.toggleListen();}  }>{!this.state.buttonArray_listening[7] ? "$400" : this.state.questionList[7]}</button>
                            
                        </div>
                        <div className='interviewColumn'>
                            <button id='8' className='toggleButton' onClick={()=>{this.setState({question_index: 8}); this.toggleListen();}  }>{!this.state.buttonArray_listening[8] ? "$100" : this.state.questionList[8]}</button>
                            <button id='9' className='toggleButton' onClick={()=>{this.setState({question_index: 9}); this.toggleListen();}  }>{!this.state.buttonArray_listening[9] ? "$200" : this.state.questionList[9]}</button>
                            <button id='10' className='toggleButton' onClick={()=>{this.setState({question_index: 10}); this.toggleListen();}  }>{!this.state.buttonArray_listening[10] ? "$300" : this.state.questionList[10]}</button>
                            <button id='11' className='toggleButton' onClick={()=>{this.setState({question_index: 11}); this.toggleListen();}  }>{!this.state.buttonArray_listening[11] ? "$400" : this.state.questionList[11]}</button>
                            
                        </div>
                        <div className='interviewColumn'>
                            <button id='12' className='toggleButton' onClick={()=>{this.setState({question_index: 12}); this.toggleListen();}  }>{!this.state.buttonArray_listening[12] ? "$100" : this.state.questionList[12]}</button>
                            <button id='13' className='toggleButton' onClick={()=>{this.setState({question_index: 13}); this.toggleListen();}  }>{!this.state.buttonArray_listening[13] ? "$200" : this.state.questionList[13]}</button>
                            <button id='14' className='toggleButton' onClick={()=>{this.setState({question_index: 14}); this.toggleListen();}  }>{!this.state.buttonArray_listening[14] ? "$300" : this.state.questionList[14]}</button>
                            <button id='15' className='toggleButton' onClick={()=>{this.setState({question_index: 15}); this.toggleListen();}  }>{!this.state.buttonArray_listening[15] ? "$400" : this.state.questionList[15]}</button>
                            
                        </div>
                    </div>
                    <div>
                      
                     </div>
                   
                    <button id='add_button' className='scoreBtn' onClick={()=>{this.updateScore()}}>+${this.state.current_score_to_add}</button>
                   
                  
                </div>
                {/*------------------------End Page content----------------------------------------------*/}
            </div>
        )
        
    }

}

export default App