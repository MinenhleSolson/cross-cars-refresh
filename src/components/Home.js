import React from 'react'
import HomeCars from './HomeCars'
import '../home.css'

function Home() {
    return (
        <div>

            <img src="https://d1rchlc82i5tbh.cloudfront.net/wp-content/uploads/2019/04/14171323/3-Series-Banner.png" alt=""
                className="homeImage"
            />

      <div className="homeRow">   
        <HomeCars
        id="001"
        title="2015 Mercedes-Benz G-Class G63 AMG For Sale"
        price="14 999 900"
        image="https://img.autotrader.co.za/7684485/Crop800x600"
     
        />

      <HomeCars
        id="001"
        title="2020 Jaguar F-Pace 25d AWD Chequered Flag For Sale"
        price="1 300 000"
        image="https://img.autotrader.co.za/8282960/Crop800x600"
    
        />

       <HomeCars
        id="001"
        title="2017 Volkswagen Golf R For Sale"
        price="579 900"
        image="https://img.autotrader.co.za/9432921/Crop800x600"
    
        />

        <HomeCars
        id="001"
        title="2018 Audi S5 S5 Coupe Quattro For Sale"
        price="789 900"
        image="https://img.autotrader.co.za/9122013/Crop800x600"
    
        />
        
        </div>


        <div className="homeRow">   
        <HomeCars
        id="001"
        title="2021 Audi Q7 45TDI Quattro For Sale"
        price="1 599 990"
        image="https://img.autotrader.co.za/9508855/Crop800x600"
        />


        <HomeCars
        id="001"
        title="2018 BMW i8 eDrive Roadster For Sale"
        price="1 399 990"
        image="https://img.autotrader.co.za/9037000/Crop800x600"
        />

<HomeCars
        id="001"
        title="2016 BMW M4 M4 Coupe Auto For Sale"
        price="799 900"
        image="https://img.autotrader.co.za/9391893/Crop800x600"
        />

<HomeCars
        id="001"
        title="2020 Lexus RC F For Sale"
        price="999 900"
        image="https://img.autotrader.co.za/8709214/Crop800x600"
        />
        </div>

        <div className="homeRow">   
        <HomeCars
        id="001"
        title="2020 Mercedes-Benz GLE GLE300d 4Matic For Sale"
        price="1 599 990"
        image="https://img.autotrader.co.za/8362516/Crop800x600"
        />


        <HomeCars
        id="001"
        title="2019 Aston Martin DBS Superleggera DBS Superleggera Coupe For Sale"
        price="4 999 990"
        image="https://img.autotrader.co.za/9473715/Crop800x600"
        />

<HomeCars
        id="001"
        title="2020 Rolls-Royce Cullinan Cullinan For Sale"
        price="POA"
        image="https://img.autotrader.co.za/8619594/Crop800x600"
        />

<HomeCars
        id="001"
        title="2020 Mercedes-Benz V-Class V300d Exclusive For Sale"
        price="1 299 000"
        image="https://img.autotrader.co.za/9131139/Crop800x600"
        />
        </div>

        <div className="homeRow">   
       



<HomeCars
        id="001"
        title="2018 Mercedes-Benz G-Class G350d Designo For Sale"
        price="2 000 000"
        image="https://img.autotrader.co.za/9585202/Crop800x600"
        />

<HomeCars
        id="001"
        title="2020 Volkswagen Touareg V6 TDI Executive R-Line For Sale"
        price="1 599 990"
        image="https://img.autotrader.co.za/5809520/Crop800x600"
        />

        </div>

        


    



        </div>
        
    )
}

export default Home
