import   './Home.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function Home() {
    return(
        <>
         <div className="grid-container">
            <div className="grid-item">
                <Link to="/chinese" >
                    <img src="https://dynamic.brandcrowd.com/preview/logodraft/37a9e9e0-7941-46a7-8fb9-3cca965dec94/image/large.png" alt="Indian Cuisine" />
                </Link>
                <div className="caption">Chinese Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/French">
                    <img src="https://dynamic.brandcrowd.com/preview/logodraft/37a9e9e0-7941-46a7-8fb9-3cca965dec94/image/large.png" alt="Italian Cuisine" />
                </Link>
                <div className="caption">French Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/indian">
                   <img src="https://dynamic.brandcrowd.com/preview/logodraft/37a9e9e0-7941-46a7-8fb9-3cca965dec94/image/large.png" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Indian Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/italian">
                    <img src="https://dynamic.brandcrowd.com/preview/logodraft/37a9e9e0-7941-46a7-8fb9-3cca965dec94/image/large.png" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Italian Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/japanese">
                    <img src="https://dynamic.brandcrowd.com/preview/logodraft/37a9e9e0-7941-46a7-8fb9-3cca965dec94/image/large.png" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Japanese Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/mexican">
                    <img src="https://dynamic.brandcrowd.com/preview/logodraft/37a9e9e0-7941-46a7-8fb9-3cca965dec94/image/large.png" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Mexican Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/middle">
                    <img src="https://dynamic.brandcrowd.com/preview/logodraft/37a9e9e0-7941-46a7-8fb9-3cca965dec94/image/large.png" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Middle-East Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/thai">
                    <img src="https://dynamic.brandcrowd.com/preview/logodraft/37a9e9e0-7941-46a7-8fb9-3cca965dec94/image/large.png" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Thailand Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/italian">
                    <img src="https://dynamic.brandcrowd.com/preview/logodraft/37a9e9e0-7941-46a7-8fb9-3cca965dec94/image/large.png" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Explore Cuisine</div>
            </div>

                      

            
        </div>
     

        </>
    )
    
}
export default Home