import Link from 'next/link';
import Image from 'next/image';
export const Header = () => (
    <header>
      <div>
        <div className='topNav'>
          <Image alt='logo' src={'/images/download.png'} width={100} height={100} />
          <nav>
            <ul>
              <li> <Link href="/">Home</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
            </ul>
            <img />
           
            
            
          </nav>
        </div>
        <p className='title'>Best title EVER</p>
        </div>
        </header>
);