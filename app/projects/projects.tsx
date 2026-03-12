import { Link } from "react-router";
import { projects } from "../constants";
import arrow from "../assets/icons/arrow.svg";
import { CTA } from "CTA/cta";

export function Projects() {
    return (
        <main className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
            <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
                My{" "}
                <span className="bg-gradient-to-l from-[#8B8BAE] to-[#49BEAA] bg-clip-text text-transparent font-semibold drop-shadow">
                    Projects
                </span>
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    I've been working in numerous and varied projects since I started to work in the software industry
                    and throghout my career I've gathered experience in many technologies and languages, but my favorites are React and Laravel or thechnically speaking, javascript and PHP.
                    Here you will see the projects I'm most proud about, or prototypes of them since some are still in development or are not for public release. I hope you like what you see!
                </p>
            </div>
            <div className="flex flex-wrap my-20 gap-16">
                {projects.map((project) => (
                    <div className="lg:w-[400px] w-full" key={project.name}>
                        <div className="block-container w-12 h-12">
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={project.iconUrl}
                                    alt="Project Icon"
                                    className="w-3/4 h-3/4 object-contain"
                                />
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col">
                            <h4 className="text-xl font-poppins font-semibold">
                                {project.name}
                            </h4>
                            <p className="mt-2 text-slate-500">{project.description}</p>
                            <div className="mt-5 flex font-poppins text-sm">
                                {project.link && (
                                    <div className="flex flex-row gap-2 items-center">
                                        <Link
                                            to={project.link}
                                            target="_blank"
                                            rel="noopener norefer"
                                            className="font-semibold text-blue-600"
                                        >
                                            Live link
                                        </Link>
                                        <img
                                            src={arrow}
                                            alt="arrow"
                                            className="w-4 h-4 object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="mt-5 flex font-poppins text-sm">
                                {project.github && (
                                    <div className="flex flex-row gap-2 items-center">
                                        <Link
                                            to={project.github}
                                            target="_blank"
                                            rel="noopener norefer"
                                            className="font-semibold text-blue-600"
                                        >
                                            GitHub Repository
                                        </Link>
                                        <img
                                            src={arrow}
                                            alt="arrow"
                                            className="w-4 h-4 object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="border-slate-200" />
            <CTA />
        </main>
    );
}