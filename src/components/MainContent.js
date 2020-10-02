import React from 'react'
import ContactCard from './ContactCard'

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
    
    <div className="contacts">
      <ContactCard 
         contact =  {{
          name:"Mr. Whiskerson", 
          imgUrl:"http://placekitten.com/300/200", 
          phone:"(212) 555-1234", 
          email:"mr.whiskaz@catnap.meow"}}
      />
      
      <ContactCard 
        contact =  {{
          name:"Fluffykins", 
          imgUrl:"http://placekitten.com/400/200", 
          phone:"(212) 555-1234", 
          email:"fluff@me.com"}}
      />
      
      <ContactCard 
        contact =  {{
          name:"Destroyer", 
          imgUrl:"http://placekitten.com/400/300", 
          phone:"(212) 555-3456", 
          email:"ofworlds@yahoo.com"}}
      />
      
      <ContactCard 
        contact =  {{
          name:"Felix", 
          imgUrl:"http://placekitten.com/200/100", 
          phone:"(212) 555-4567", 
          email:"thecat@hotmail.com"}}
      />
            
        </div>
  </main>
  )
}

export default MainContent