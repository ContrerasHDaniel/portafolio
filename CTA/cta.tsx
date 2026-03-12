import { Link } from "react-router";

export function CTA() {
    return (
        <section>
            <div className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-5">
                <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug">
                    Interested in working together?
                </h1>
                <p className="text-slate-500 text-center">
                    I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out!
                </p>
                <Link
                    to="/contact"
                    className="px-6 py-3 bg-gradient-to-l from-[#8B8BAE] to-[#49BEAA] text-white rounded-lg font-semibold hover:from-[#49BEAA] hover:to-[#8B8BAE] transition-colors duration-300"
                >
                    Contact Me
                </Link>
            </div>
        </section>
    );
}