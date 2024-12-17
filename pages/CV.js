export default function CVPage() {
    return (
      <div style={styles.container}>
        {/* Header Section */}
        <header style={styles.header}>
          <h1 style={styles.name}>Tselmeg Ganzorig</h1>
          <p style={styles.title}>Full Stack Developer</p>
          <p style={styles.contact}>
            📧 nroptsemee@gmail.com | 📞 (976) 88261611 | 🌐 tselmeg.dev
          </p>
        </header>
  
        {/* Profile Summary Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Profile Summary</h2>
          <p style={styles.text}>
            Highly skilled and motivated full-stack developer with over 5 years of
            experience in web development, specializing in React, Node.js, and
            cloud deployment. Passionate about building innovative solutions that
            enhance user experience.
          </p>
        </section>
  
        <div style={styles.section }>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <ul style={styles.skillsList}>
            <li style={styles.skillItem}>JavaScript</li>
            <li style={styles.skillItem}>MySQL</li>
            <li style={styles.skillItem}>HTML, CSS</li>
            <li style={styles.skillItem}>C++, JAVA</li>
          </ul>
        </div>
  
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Experience</h2>
          <div style={styles.experience}>
            <h3 style={styles.jobTitle}>Senior Developer - TechCorp</h3>
            <p style={styles.date}>Jan 2021 - Present</p>
            <p style={styles.text}>
              Worked on scaling applications using microservices architecture,
              collaborated with the design team to enhance UI/UX, and optimized
              backend processes.
            </p>
          </div>
          <div style={styles.experience}>
            <h3 style={styles.jobTitle}>Frontend Developer - Web Solutions</h3>
            <p style={styles.date}>June 2018 - Dec 2020</p>
            <p style={styles.text}>
              Developed interactive and responsive interfaces, led code reviews,
              and contributed to team discussions for project improvements.
            </p>
          </div>
        </section>
  
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Education</h2>
          <div>
            <h3 style={styles.jobTitle}>Bachelor of Science in Computer Science</h3>
            <p style={styles.date}>University of Technology - Graduated 2018</p>
          </div>
        </section>
  
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <p style={styles.contactText}>Email: nroptsemee@gmail.com</p>
          <p style={styles.contactText}>Phone: (976) 88261611</p>
          <p style={styles.contactText}>LinkedIn: linkedin.com/in/tselmeg</p>
        </section>
      </div>
    );
  }
  
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      color: '#333',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    name: {
      fontSize: '2.5em',
      margin: '0',
      color: '#2c3e50',
    },
    title: {
      fontSize: '1.5em',
      margin: '0',
      color: '#3498db',
    },
    contact: {
      color: '#555',
      marginTop: '10px',
    },
    section: {
      marginBottom: '25px',
    },
    sectionTitle: {
      fontSize: '1.75em',
      color: '#2c3e50',
      borderBottom: '2px solid #3498db',
      paddingBottom: '5px',
    },
    text: {
      color: '#444',
      lineHeight: '1.6',
    },
    skillsList: {
      listStyleType: 'none',
      padding: '0',
      display: 'flex',
      flexWrap: 'wrap',
    },
    skillItem: {
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '8px 12px',
      margin: '5px',
      borderRadius: '20px',
      fontSize: '0.9em',
    },
    experience: {
      marginBottom: '15px',
    },
    jobTitle: {
      fontSize: '1.2em',
      color: '#333',
      margin: '0 0 5px',
    },
    date: {
      color: '#888',
      fontSize: '0.9em',
      marginBottom: '10px',
    },
    contactText: {
      color: '#555',
      margin: '5px 0',
    },
  };