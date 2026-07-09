const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Redux",
    "Git",
];

export default function SkillsCard() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">
                Skills
            </h2>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full bg-blue-600 px-4 py-2 text-white text-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}