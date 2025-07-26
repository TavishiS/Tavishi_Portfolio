import React from 'react'
import ProjectCard from './ProjectCard'
import emo2mov from '../assets/emo2mov.jpeg'
import todo from '../assets/todo.jpg'
import face from '../assets/face.jpg'
import sms from '../assets/sms.png'
import quiz from '../assets/quiz.jpg'

const Projects = () => {
    let title1="MoodFlix";
    let main1="MoodFlix, a web application which allows users to give text, voice or form input indicating their current mood and feeling, and in response, they would be recommended five movies best matching their mood.";
    // let rep_link1="https://drive.google.com/file/d/1CKf-eS-6zelOUNZjccgGAk4T8lJCCOoP/view?usp=sharing";
    let git_link1="https://github.com/TavishiS/Emotion2Movies";

    let title2="ToDo App";
    let main2="A basic ToDo web application featuring CRUD operations on SQLite database. The app supports multi-user usability and Login/Logout functionality.";
    // let rep_link2="https://drive.google.com/file/d/1Al5SDT1WemJvKrf1phb90J7WMwxmjOF6/view?usp=sharing";
    let git_link2="https://github.com/TavishiS/ToDo-app";


    let title3="Face Identification";
    let main3="Identification of a person (in the LFW Dataset) with the help of their image using traditional Machine Learning techniques such as Decision Tree, KNN, Clustering, Random Forest, ANN, and Naive Bayes.";
    // let rep_link3="https://drive.google.com/file/d/192QmAw0FQnduo9rlO0CQY1cNzSw58aLM/view?usp=sharing";
    let git_link3="https://github.com/AgarwalMayank2/Face_Identification";

    let title4="Student Management System";
    let main4="A simple Student Management System for an institution using File Handling in C, to store, view, sort and search for student records.";
    // let rep_link4="https://drive.google.com/file/d/1wi7FIahZ9VJQBIQ1wKDSEIh70xkLyWan/view?usp=sharing";
    let git_link4="https://github.com/TavishiS/Student_Management_System";

    let title5="Quiz Game";
    let main5="A Quiz consisting of 3 levels-Easy, Medium and Hard. The player would dynamically get to know if their answer is correct or not.";
    // let rep_link5="https://drive.google.com/file/d/1_MPI-S6gmgn6iZLWdfGm3yomuhLBicr8/view?usp=sharing";
    let git_link5="https://github.com/TavishiS/Quiz_Game";

  return (
    <div className='text-white md:flex overflow-hidden items-centermd:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects 📽</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard title={title1} main={main1} bannerImg={emo2mov} git_link={git_link1}/> {/*rep_link={rep_link1}*/}
            <ProjectCard title={title2} main={main2} bannerImg={todo} git_link={git_link2}/>
            <ProjectCard title={title3} main={main3} bannerImg={face} git_link={git_link3}/>
            <ProjectCard title={title4} main={main4} bannerImg={sms} git_link={git_link4}/>
            <ProjectCard title={title5} main={main5} bannerImg={quiz} git_link={git_link5}/>
        </div>
      
    </div>
    </div>
  )
}

export default Projects
