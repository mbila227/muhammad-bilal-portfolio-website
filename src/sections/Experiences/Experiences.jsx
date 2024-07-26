import React from 'react';
import styles from './ExperiencesStyles.module.css'; // Assuming you have some CSS for styling

const experiences = [
  {
    title: 'Software Engineering Fellow',
    company: 'Headstarter AI',
    duration: 'July 2024 - August 2024',
    description: [
      'Built 5+ AI apps and APIs using Next.JS, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users',
      'Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns ',
      'Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns',
      'Built a final project aimed at raising over $1000'
    ]
  },
  // Add more experiences here
  {
    title: 'Software Engineer Intern',
    company: 'Edworldo - Education Tech Startup',
    duration: 'June 2023 - August 2023',
    description: [
      'Built a prototype question generator that crafts questions similar to the STARR test',
      'Leveraged advanced machine learning models to train the data used for the prototype',
      'Error handled and made API calls between the front and back end',
    ]
  },
  {
    title: 'Machine Learning Intern',
    company: 'Persivia Inc - Healthcare IT Company',
    duration: 'June 2021 - August 2021',
    description: [
      'Leveraged machine learning models utilizing Python to predict costs of patients',
      'Leveraged Numpy to predict costs based on age, condition, and risk level of disease',
      'Utilized Java to create user interface that displays machine learning models',
    ]
  },
  
];

const Experiences = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Experiences</h1>
      {experiences.map((exp, index) => (
        <div key={index} className={styles.experience}>
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <p>{exp.duration}</p>
          <ul>
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experiences;

