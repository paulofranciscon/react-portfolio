import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-p.png';
import './index.scss';
import AnimateLetters from '../AnimatedLetters';

const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','u','l','o',' ']
    const jobArray = [ 'S','o','f', 't','w','a','r','e', ' ', 'D','e','v','e','l','o','p','e','r']

useEffect(() => {
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
}, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                
                <img src={LogoTitle} alt="developer" />
                <AnimateLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={16} />
                <br />
                <AnimateLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={19} />
                <br />
                
                </h1>
                <h2> Full Stack Developer / Senior Infrastructure</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME </Link>
            </div>

        </div>
    );

} 

export default Home