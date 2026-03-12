import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { alsoworked, experiences, skills } from "../constants";
import { CTA } from "CTA/cta";

export function AboutMe() {
    return (
        <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
            <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug">
                Hello I'm{" "}
                <span className="bg-gradient-to-l from-[#8B8BAE] to-[#49BEAA] bg-clip-text text-transparent">Daniel</span>
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    A software engineer based in Aguascalientes, México. I'm specialized on designing, building and
                    mantaining or updating applications with Laravel, React and React Native (with expo).
                </p>
            </div>
            <div className="py-10 flex flex-col">
                <h2 className="font-semibold sm:text-3xl text-xl relative">My Skills</h2>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill, index) => (
                        <div key={index} className="block-container w-20 h-20 group justify-center items-center relative">
                            <div className="btn-back rounded-xl" />
                            <div className="absolute top-full mb-2 hidden group-hover:block text-slate-500 font-bold text-sm px-2 py-1 rounded whitespace-nowrap">
                                {skill.name}
                            </div>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="min-w-2/3 min-h-2/3 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-10 flex flex-col">
                <h2 className="font-semibold sm:text-2xl text-xl relative text-black/60">Also versed in</h2>
                <div className="mt-16 flex flex-wrap gap-12">
                    {alsoworked.map((skill, index) => (
                        <div key={index} className="block-container w-14 h-14 group justify-center items-center relative">
                            <div className="btn-back rounded-xl" />
                            <div className="absolute top-full mb-2 hidden group-hover:block text-slate-500 font-bold text-sm px-2 py-1 rounded whitespace-nowrap">
                                {skill.name}
                            </div>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="min-w-2/3 min-h-2/3 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-16">
                <h3 className="font-semibold sm:text-3xl text-xl relative">Work experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        I've worked in varied projects which involved me in all cycles of software projecs, from gathering requirements to deployment and maintenance, leveling up my skills and
                        allowing me to meet and team up with great and smart people. Here's the rundown:
                    </p>
                </div>
            </div>
            <div className="mt-12 flex">
                <VerticalTimeline lineColor="#49BEAA">
                    {experiences.map((experience, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={experience.date}
                            icon={
                                <div className="flex justify-center items-center w-full h-full">
                                    <img
                                        src={experience.icon}
                                        alt={experience.company}
                                        className="w-[70%] h-[70%] object-contain m-auto"
                                    />
                                </div>
                            }
                            iconStyle={{
                                background: experience.iconBg,
                            }}
                            contentStyle={{
                                borderBottom: "8px",
                                borderStyle: "solid",
                                borderBottomColor: experience.iconBg,
                                boxShadow: "none",
                            }}
                        >
                            <div>
                                <h3 className="text-black text-xl font-semibold">
                                    {experience.position}
                                </h3>
                                <p
                                    className="text-black-500 font-medium font-base"
                                    style={{ margin: 0 }}
                                >
                                    {experience.company}
                                </p>
                            </div>
                            <ul className="my-5 list-disc ml-5 space-y-2">
                                {experience.points.map((point, index) => (
                                    <li
                                        key={index}
                                        className="text-black-500/50 font-normal pl-1 text-sm"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
            <hr className="border-slate-200" />
            <CTA />
        </section>
    );
}