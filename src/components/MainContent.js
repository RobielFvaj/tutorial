import React from 'react'

function MainContent(){

  const date = new Date()
  const hours = date.getHours()
  let timeOfday
  
  const styles ={   
    fontSize:24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontStyle: 'italic'
  }
  if(hours < 12) {
    timeOfday = 'morning'
    styles.color = 'rgb(107, 153, 47)'
  }
  else if(hours >= 12 && hours < 17) {
    timeOfday = 'afternoon'
    styles.color = 'rgb(190, 165, 25)'
  }
  else {
    timeOfday = 'night'
    styles.color = 'rgb(100, 45, 8)'
  }


  return (
  <main>
    <h1>Main Content</h1>
    <p style={styles}>Good {timeOfday}</p>
    <ul>
      <li>football</li>
      <li>Volleyball</li>
      <li>basketball</li>
    </ul>
  </main>
  )
}

export default MainContent