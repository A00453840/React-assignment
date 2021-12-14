import React, {Component} from 'react';
import Weather from './Weather';
import Image from 'next/image'
import Typography from '@mui/material/Typography';


class MyTown extends Component
{
    constructor(){
        super();
        this.state = {
            degrees : null,
            isCelsius : true,
        }
    }
    componentDidMount(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&units=metric&appid=ec3eb95aac9bb648292d839d19207cc6')
        .then((res) => res.json())
        .then(weather => this.setState({degrees: weather["main"]["temp"]}))
    }
    changetoOther(item)
    {
        this.setState({
            isCelsius : item,
        })
    }
    render(){
        return(
        <div className="items-center justify-center w-full flex-1 mt-10 text-center">
            <Image src="/Hyderabad.jpg" alt="Hyd" width={160} height={270}/>
            <br/><br/>
           
            <div className="col-start-2 col-end-4">
            <h1 className="text-xl mt-2">I am from a city called Hyderabad</h1>
            </div>
        <div className="mui--text-light mui--text-body2" style={{backgroundColor: '#2424' }}>
            
            <Typography variant="body1" gutterBottom m={6}>
                Hyderabad is the capital of Telangana in Southern India, located on the banks of the Musi River and on the Deccan Plateau. Hyderabad and Secunderabad are "twin cities" near Hussain Sagar Lake (also known as Tank Bund in local parlance) but both cities have grown so much that now they have become one big metropolis. The city and district of Hyderabad are coterminous. Hyderabad district is entirely contained within the Ranga Reddy district of Telangana. Many of the suburbs of Hyderabad were recently merged into the city, now called Greater Hyderabad.
                A city rich with history and tradition, Hyderabad now competes with Bangalore and Chennai for the crown of India's IT capital; Microsoft, Amazon and Google have their India headquarters here.
            </Typography>
        </div>
           <main >
            {this.state.degrees > 18 ? <Image alt="It's Sunny" src = "/sunny.png" width={60} height={60}/> : this.state.degrees < 10 ? <Image alt="It's Cold" src = "/cold.png" width={60} height={60}/> : <Image alt="it's Mild" src = "/mild.png" width={60} height={60}/>} 
            <Weather data = {{isCelsius : this.state.isCelsius, changetoOther:this.changetoOther.bind(this)}} degrees = {this.state.degrees}/>
            </main>
        </div>
        )
    }
}
export default MyTown;