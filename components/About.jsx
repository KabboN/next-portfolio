import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import AboutImg2 from '../public/assets/about2.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4 md:underline'>Who I Am</h2>
          <p className='py-2 text-justify text-gray-600'>
            Hello! I am Tamal Sarker, a highly motivated individual from Gupinathpur, Nayarhat, Ashuliya, Dhaka-1350, Bangladesh. I am holding a Bachelor of Science degree in <b>Computer Science and Engineering</b>from <b>Sonargaon University</b>, where I graduated with a CGPA of 3.72 out of 4. I have an impressive array of skills in various programming languages, including <b>C, C++, HTML, CSS, Python, PHP, Javascript, Next.js, and React.js</b>. In addition, I have earned certifications in <b>Cisco Certified Network Associate (CCNA), Power Supply Network Analysis (PSNA), Computer-Aided Drawing and Solid Works Mechanical Design </b>. 
          </p>
          <p className='py-2 text-justify text-gray-600'>
          Currently, I am working as an Assistant Teacher (Science and ICT) at Holy Kids School and College, but I have my sights set on pursuing a career in the software industry. I am a quick learner, responsible, dependable, self-directed, and self-motivated, making me an excellent candidate for a role in the software industry. While Bengali is my primary language, i am also fluent in English. With My educational qualifications, certifications, and passion for programming, I am ready to take on new challenges and make valuable contributions to the world of software development.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>

      </div>
    </div>
  );
};

export default About;
