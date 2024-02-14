import './App.css'

function App() {
  const data = [
    {
      "name": "Lokeshwar",
      "desctiprion": "A TA in 100x Devs Cohort 2.0",
      "interests": [
        "Ionic",
        "Open Source",
        "App Dev"
      ],
      "linkedIn": "www.linkedin.com",
      "twitter": "www.x.com"
    },
  ];

  const btnStyles = {
    background: "#1f6feb",
    padding: "0.5rem",
    borderRadius: "10px",
    color: "white",
    border: "none",
    cursor: "pointer"
  };

  const cardStyles = {
    border: "1px solid #666",
    padding: "1rem",
    margin: "1rem",
    borderRadius: "10px",
    width: "max-content",
    float:"left"
  };

  return (
    <>
      {
        data.map(info => {
          return (
            <div key={info.name} style={cardStyles}>
              <h1>{info.name}</h1>
              <span>{info.desctiprion}</span>
              {info.interests && info.interests.length && (
                <>
                  <h3>Interests</h3>
                  {
                    info.interests.map(interest => (
                      <div key={interest}>{interest}</div>
                    ))
                  }
                </>
              )}
              <br />
              <a href={info.linkedIn}>
                <button style={btnStyles}>
                  LinkedIn
                </button>
              </a>
              <a href={info.twitter} style={{ marginLeft: "1rem" }}>
                <button style={btnStyles}>
                  Twitter
                </button>
              </a>
            </div>
          )
        })
      }
    </>
  )
}

export default App