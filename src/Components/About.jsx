import React from 'react'
import { MdKeyboardArrowRight, MdApi } from "react-icons/md";
import { IoLogoCss3 , IoMdLaptop} from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { FaBootstrap, FaHtml5 , } from "react-icons/fa6";
import { SiTailwindcss , SiMongodb, SiNextdotjs, SiJavascript, SiJquery, SiExpress} from "react-icons/si";
import { FaGithub, FaNode } from "react-icons/fa";

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
            <div className='h-max w-full bg-[rgb(247,248,250)] px-20 py-20' id='About'>
                <h1 className='text-[rgb(48,127,128)] font-semibold text-[36px] text-center Font fJ'>About Me</h1>
                <div className='AboutSec flex justify-between'>
                    <div className='Aboutxt w-[60%]'>
                        <p className='mt-14 text-[17px] text-[rgb(48,127,128)] font-medium fJ'>
                            I am a passionate Web Developer based in Lahore, Pakistan, with a strong focus on Frontend technologies and crafting engaging user experiences. With over year of experience, I specialize in building visually stunning websites and dynamic web applications using advanced Frontend frameworks.
                            My expertise revolves around Frontend technologies, particularly React.js, Next.js, and jQuery. I am proficient in leveraging these tools to create responsive and interactive interfaces that enhance user engagement and satisfaction.
                        </p>
                        <p className='text-[17px] text-[rgb(93,185,186)] mt-5 fJ'> Through my projects, I prioritize user-centric design and seamless functionality.
                            In addition to Frontend frameworks, I have a deep understanding of JavaScript and its ecosystem, allowing me to implement complex features and optimize performance. I am dedicated to staying updated with the latest trends and best practices in Frontend development to deliver cutting-edge solutions.
                            My goal is to leverage my skills in Frontend development to contribute to innovative projects and deliver impactful digital experiences that exceed expectations.</p>
                    </div>
                    <div className='w-[32%] details'>
                        <div className='w-[90%] m-auto flex justify-between border-b-2 mt-16'>
                            <p className='text-[rgb(31,79,80)] text-[17px] fJ'>Name:</p>
                            <p className='text-[rgb(66,172,173)] text-[17px] fJ'>Arslan</p>
                        </div>
                        <div className='w-[90%] m-auto  flex justify-between border-b-2 mt-5'>
                            <p className='text-[rgb(31,79,80)] text-[17px] fJ'>Phone:</p>
                            <p className='text-[rgb(66,172,173)] text-[17px] fJ'>+92 309 4009328</p>
                        </div>
                        <div className='w-[90%] m-auto  flex justify-between border-b-2 mt-5'>
                            <p className='text-[rgb(31,79,80)] text-[17px] fJ'>Email:</p>
                            <p className='text-[rgb(66,172,173)] text-[14px] fJ'>abrahum9328@gmail.com</p>
                        </div>
                        <div className='w-[90%] m-auto  flex justify-between border-b-2 mt-5'>
                            <p className='text-[rgb(31,79,80)] text-[17px] fJ'>Location:</p>
                            <p className='text-[rgb(66,172,173)] text-[17px] fJ'>Lahore, Pakistan</p>
                        </div>
                        <button
                            className="w-max mt-16 px-7 py-4 bg-[rgb(31,79,80)] rounded-xl font-semibold flex items-center gap-1 text-white Resume"
                            onClick={handleDownload}>
                            <p className='fJ'>Download CV</p>
                            <div className="text-2xl"><MdKeyboardArrowRight /></div>
                        </button>

                    </div>
                </div>
                <h1 className='text-[rgb(48,127,128)] font-semibold text-[36px] mt-28 Font fJ'>My Skills</h1>
                <div className='flex justify-between mt-16 w-[85%] skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><FaHtml5 className='text-3xl text-[rgb(66,172,173)] ' />HTML5</div>
                            <p className='fJ'>95%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[95%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><IoLogoCss3 className=' text-3xl text-[rgb(66,172,173)]' />CSS3</div>
                            <p className='fJ'>90%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-16 w-[85%] skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><SiJavascript className='text-3xl text-[rgb(66,172,173)] ' />JavaScript</div>
                            <p className='fJ'>80%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[80%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><RiReactjsFill className='text-3xl text-[rgb(66,172,173)] ' />React.js</div>
                            <p className='fJ'>90%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-16 w-[85%]  skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><FaBootstrap className='text-3xl text-[rgb(66,172,173)] ' />Bootstrap</div>
                            <p className='fJ'>90%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><SiTailwindcss className='text-3xl text-[rgb(66,172,173)] ' />Tailwind CSS</div>
                            <p className='fJ'>95%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[95%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-16 w-[85%] skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><SiNextdotjs className='text-3xl text-[rgb(66,172,173)] ' />Next.js</div>
                            <p className='fJ'>80%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[80%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><SiJquery className='text-3xl text-[rgb(66,172,173)] ' />jQuery</div>
                            <p className='fJ'>80%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[80%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-16 w-[85%] skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><FaGithub className='text-3xl text-[rgb(66,172,173)] ' />Github</div>
                            <p className='fJ'>90%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><FaNode className='text-3xl text-[rgb(66,172,173)]' />Node.js</div>
                            <p className='fJ'>85%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[85%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-16 w-[85%] skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><IoMdLaptop className='text-3xl text-[rgb(66,172,173)]' />Responsive Design</div>
                            <p className='fJ'>90%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><SiMongodb className='text-3xl text-[rgb(66,172,173)]' />MongoDB</div>
                            <p className='fJ'>85%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[85%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>
            </div>
            <div className='flex justify-between mt-16 w-[85%] skills'>
                    <div>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'><SiExpress className='text-3xl text-[rgb(66,172,173)]' />Express.js</div>
                            <p className='fJ'>95%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[95%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>

                    <div className='skill-anim'>
                        <div className='w-[350px] flex justify-between moves'>
                            <div className='flex gap-2 fJ'>
                            <img className='w-[25px] colored-svg' src='https://www.svgrepo.com/show/93871/api.svg' />API Integration</div>
                            <p className='fJ'>90%</p>
                        </div>
                        <div className='h-[10px] w-[350px] rounded-lg bg-white mt-2 moves'>
                            <div className='w-[90%] bg-[rgb(31,79,80)] h-full rounded-lg move'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
        }

  

export default About