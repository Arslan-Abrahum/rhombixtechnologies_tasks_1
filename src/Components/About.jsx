import React from 'react'
import { MdKeyboardArrowRight, MdApi } from "react-icons/md";
import { IoLogoCss3 , IoMdLaptop} from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { FaBootstrap, FaHtml5 , } from "react-icons/fa6";
import { SiTailwindcss , SiMongodb, SiNextdotjs, SiJavascript, SiJquery, SiExpress} from "react-icons/si";
import { FaGithub, FaNode } from "react-icons/fa";
import { TbApi } from 'react-icons/tb';

const About = () => {
    const handleDownload = () => {
        const cvFileUrl = 'https://drive.google.com/file/d/18GrzcyKHmxQ9Qo-57p4QsPhxPFaQFR61/view?usp=drive_link';
        const link = document.createElement('a');
        link.href = cvFileUrl;
        link.download = 'Arslan Ibrahim F.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className='h-max w-full bg-[#2F4454] px-20 py-20' id='About'>
                <h1 className='text-[#60fcff] font-semibold text-[36px] text-center Font fJ'>About Me</h1>
                <div className='AboutSec flex justify-between'>
                    <div className='Aboutxt w-[60%]'>
                        <p className='mt-14 text-[17px] text-white font-medium fJ'>
                            I am a passionate Web Developer based in Lahore, Pakistan, with a strong focus on Frontend technologies and crafting engaging user experiences. With over year of experience, I specialize in building visually stunning websites and dynamic web applications using advanced Frontend frameworks.
                            My expertise revolves around Frontend technologies, particularly React.js, Next.js, and jQuery. I am proficient in leveraging these tools to create responsive and interactive interfaces that enhance user engagement and satisfaction.
                        </p>
                        <p className='text-[17px] text-white mt-5 fJ'> Through my projects, I prioritize user-centric design and seamless functionality.
                            In addition to Frontend frameworks, I have a deep understanding of JavaScript and its ecosystem, allowing me to implement complex features and optimize performance. I am dedicated to staying updated with the latest trends and best practices in Frontend development to deliver cutting-edge solutions.
                            My goal is to leverage my skills in Frontend development to contribute to innovative projects and deliver impactful digital experiences that exceed expectations.</p>
                    </div>
                    <div className='w-[32%] details'>
                        <div className='w-[90%] m-auto flex justify-between border-b-2 mt-16'>
                            <p className='text-white text-[17px] fJ'>Name:</p>
                            <p className='text-white text-[17px] fJ'>Arslan</p>
                        </div>
                        <div className='w-[90%] m-auto  flex justify-between border-b-2 mt-5'>
                            <p className='text-white text-[17px] fJ'>Phone:</p>
                            <p className='text-white text-[17px] fJ'>+92 309 4009328</p>
                        </div>
                        <div className='w-[90%] m-auto  flex justify-between border-b-2 mt-5'>
                            <p className='text-white text-[17px] fJ'>Email:</p>
                            <p className='text-white text-[14px] fJ'>abrahum9328@gmail.com</p>
                        </div>
                        <div className='w-[90%] m-auto  flex justify-between border-b-2 mt-5'>
                            <p className='text-white text-[17px] fJ'>Location:</p>
                            <p className='text-white text-[17px] fJ'>Lahore, Pakistan</p>
                        </div>
                        <button
                            className="w-max mt-16 px-7 py-4 bg-[#60fcff] rounded-xl font-semibold flex items-center gap-1 Resume"
                            onClick={handleDownload}>
                            <p className='fJ text-[#2F4454]'>Download CV</p>
                            <div className="text-2xl"><MdKeyboardArrowRight /></div>
                        </button>

                    </div>
                </div>
                <h1 className='font-semibold text-[36px] mt-28 Font fJ text-[#60fcff]'>My Skills</h1>
                <div className='flex justify-between mt-16 w-[85%] skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><FaHtml5 className='text-3xl ' />HTML5</div>
                            <p className='fJ text-white'>95%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[95%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><IoLogoCss3 className=' text-3xl' />CSS3</div>
                            <p className='fJ text-white'>90%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-16 w-[85%] skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><SiJavascript className='text-3xl ' />JavaScript</div>
                            <p className='fJ text-white'>80%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[80%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><RiReactjsFill className='text-3xl ' />React.js</div>
                            <p className='fJ text-white'>90%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-16 w-[85%]  skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><FaBootstrap className='text-3xl ' />Bootstrap</div>
                            <p className='fJ text-white'>90%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><SiTailwindcss className='text-3xl ' />Tailwind CSS</div>
                            <p className='fJ text-white'>95%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[95%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-16 w-[85%] skills'>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><SiJquery className='text-3xl ' />jQuery</div>
                            <p className='fJ text-white'>80%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[80%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-16 w-[85%] skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><FaGithub className='text-3xl ' />Github</div>
                            <p className='fJ text-white'>70%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><FaNode className='text-3xl' />Node.js</div>
                            <p className='fJ text-white'>50%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[50%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-16 w-[85%] skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><IoMdLaptop className='text-3xl text-white' />Responsive Design</div>
                            <p className='fJ text-white'>90%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><SiMongodb className='text-3xl text-white' />MongoDB</div>
                            <p className='fJ text-white'>50%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[50%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>
            </div>
            <div className='flex justify-between mt-16 w-[85%] skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'><SiExpress className='text-3xl text-white' />Express.js</div>
                            <p className='fJ text-white'>50%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[50%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ text-white'>
                                <TbApi/> API Integration
                            </div>
                            <p className='fJ text-white'>90%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[#3fabad] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
        }

  

export default About