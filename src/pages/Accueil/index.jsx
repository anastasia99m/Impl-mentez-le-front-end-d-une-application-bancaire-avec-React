import './index.css'
import Features from '../../components/Features'
import chat from '../../assets/icon-chat.webp';
import money from '../../assets/icon-money.webp';
import security from '../../assets/icon-security.webp';

function Accueil() {
    return (
    <body>
        <main>
            <div className="hero">
                <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Features
                    icon={chat} 
                    title={'You are our #1 priority'} 
                    description={'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'}
                />
                <Features
                    icon={money} 
                    title={'More savings means higher rates'} 
                    description={'The more you save with us, the higher your interest rate will be!'}
                />
                <Features
                    icon={security} 
                    title={'Security you can trust'} 
                    description={'We use top of the line encryption to make sure your data and money is always safe.'}
                />
            </section>
        </main>
    </body>
    );
  }
export default Accueil