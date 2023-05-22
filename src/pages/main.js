import React, { useEffect} from 'react';
import logo from './Logo.png'; 
import "./main.css"



function Main(){
    const imageStyles = { minWidth: 10, minHeight: 10 };
    useEffect(() => {
        document.title = "About Page";  
      }, []);

      return (
        <div className="App">
          <h1 style={{fontSize:50, marginBottom: 0}}>Welcome To </h1>
          <img width={900} height={250} src={logo} alt="Logo"/>;
          <div>{""}</div>
          <div>{""}</div>
          <div>{""}</div>
          <div>{""}</div>
          <div>{""}</div>
          <div>{""}</div>
          <div>{""}</div>
          
          <div>
            <h3 style={{fontSize:25, marginTop: 75}}>{"About Us:"}</h3>
            <p style={{textAlign: "center", marginLeft: 350, marginRight: 350, fontSize:20}}>
            From city-dwellers to travel enthusiasts to the common citizen, we all reach a time when we want to explore. We are set free in an area of the world that may be new to us, an area that we want to feel fully immersed in. But how do we know where to go? How do we know what is worth our time and money? Additionally, while finding places to eat is one problem, remembering where we ate and details of our visit is another. TravelTrack was created keeping these everyday problems in mind. We want to make your life easier by helping you create memories and keeping track of them for you!
            </p>
            </div>

        <div className="content-container">
        <div className="row">
            <div className="left-panel box">
                <h4 style={{fontSize:20}}>{"Explore"}</h4>
                <p style={{textAlign: "justify", margin: 30}}>
                Want to explore your area to see if this webpage is for you? Visit the “Explore” tab at the top to navigate a map of your area and locate key restaurants and attractions. These locations will be listed with their ratings, pricing, address, and contact information so that you can explore your world freely with the necessary information! And do not worry, this feature is available to users logged in as well! Click the explore tab at the top of the page to start touring and creating memories!  
                </p>
            </div>
            <div className="middle-panel box">
                <h4 style={{fontSize:20}}>{"Log In"}</h4>
                <p style={{textAlign: "justify", margin: 30}}>
                Have a Google account? Navigate to the "Login" tab at the top of the page in order to access more TravelTrack features free of charge! One of these key features includes keeping track of past locations visited. You will finally be able to give your memory a break by having a travel journal of "Locations Visited" in order to see which locations you liked and didn't like. Navigate to the "Log In" tab and sign in with Google to begin! 
                </p>
            </div>
            <div className="right-panel box">
                <h4 style={{fontSize:20}}>{"Track"}</h4>
                <p style={{textAlign: "justify", margin: 30}}>
                 A key feature open to logged-in TravelTrack users, the tracking feature allows for you to add new locations you have visited to your list. You will be able to easily add location names, descriptions, addresses, and ratings in order to remind of you of your previous explorations. Added Locations will then appear in the "Locations Visited" tab for you to keep track later on. Navigate to the "Add Location" tab to begin!
                </p>
            </div>
       </div>
       </div>
        </div>
      );
   
    
}

export default Main;