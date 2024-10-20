import React from "react";
import pp from './assets/pp.jpg'

interface Project {
    name: string;
    link: string;
    rating: string;
}
interface social {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const projects: Project[] = [
    { 
        name: "SyncArt",
        link: "https://sync-art.vercel.app/",
        rating: "4/10" },
    {
        name: "Connectly",
        link: "https://connectly-nine.vercel.app/",
        rating: "3/10",
    },
    {
        name: "Shop App",
        link: "https://shop-soumrnjn.netlify.app/",
        rating: "2/10",
    },
    {
        name: "Soumya's Blog",
        link: "https://blog-soumrnjn.netlify.app/",
        rating: "2/10",
    },
    {
        name: "CGPA Calculator",
        link: "https://cgpacal.vercel.app/",
        rating: "1/10",
    },
    { 
        name: "Portfolio",
        link: "https://sid-t1.vercel.app/",
        rating: "1/10" },
    {
        name: "Tic Tac Toe",
        link: "https://tictactoe-soumrnjn.netlify.app",
        rating: "1/10",
    },
    {
        name: "Weather App",
        link: "http://weatherapp-soumrnjn.netlify.app",
        rating: "1/10",
    },
];

const SocialLink = ({ href, icon, label }: social) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-700 hover:text-gray-900"
    >
        {icon}
        <span className="ml-2">{label}</span>
    </a>
);

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <img
                        src={pp}
                        alt="Soumyaranjan Panda"
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Soumyaranjan Panda
                    </h1>
                    <p className="text-xl text-gray-600">
                        Full Stack Developer | Final Year Student
                    </p>
                    <p className="text-md text-gray-500 mt-2">
                        Odisha University of Technology and Research
                        <br />
                        Electronics and Instrumentation
                    </p>
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-700">
                        I'm a passionate full stack developer in my final year
                        of college, pursuing Electronics and Instrumentation. I
                        love building web applications and solving complex
                        problems.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow"
                            >
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    Rating: {project.rating}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 flex items-center"
                                >
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                    View Project
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Connect with Me
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <SocialLink
                            href="https://github.com/soumyaranjan-panda"
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            }
                            label="GitHub"
                        />
                        <SocialLink
                            href="https://www.linkedin.com/in/soumrnjn/"
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            }
                            label="LinkedIn"
                        />
                        <SocialLink
                            href="https://leetcode.com/u/soumrnjn/"
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                                </svg>
                            }
                            label="LeetCode"
                        />
                        <SocialLink
                            href="https://www.codechef.com/users/soumya_rnjn"
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M11.2574.0039c-.37.0101-.7353.041-1.0953.093C5.9234.5335 2.3584 3.7434 1.2559 8.0234c-.8702 3.4-.2975 7.0746 1.5625 9.9746 2.4299 3.77 7.0769 5.6704 11.4629 4.6954 4.655-1.035 8.0837-5.1346 8.3867-9.8496.3601-5.6099-3.8692-10.5243-9.4492-11.2793C12.5814.0509 11.9174-.0063 11.2574.0039zm1.0059 2.0332c.786.0039 1.5722.0784 2.3438.2227 3.6599.6849 6.5702 3.5292 7.3867 7.1992.9502 4.288-1.297 8.6468-5.3262 10.3008-3.906 1.604-8.3936.079-10.6895-3.636-1.821-2.943-1.7432-6.7705.1992-9.6387 1.6128-2.3792 4.1974-3.8653 7.0742-4.3906.4396-.0798.8798-.1216 1.3184-.1211.0612-.0002.1223-.0009.1836 0zM9.1973 5.9922c-.4103.0006-.8188.022-1.2227.0644-1.8429.1927-3.4961 1.0811-4.4707 2.4024-.8197 1.1105-1.1641 2.4109-1.1641 3.7793 0 .5898.0708 1.1814.2129 1.7598.3852 1.5702 1.3396 2.9808 2.6895 3.9707 1.0999.8066 2.4328 1.2305 3.7871 1.2305.2266 0 .4535-.0116.6797-.0352 1.6422-.1714 3.1477-.9164 4.1347-2.0488.4824-.5547.8808-1.1938  1.1192-1.8633.4443-1.2544.4297-2.4802.4297-3.7793 0-.4915-.0283-.9795-.0859-1.4609-.0247-.2076-.0564-.4139-.0977-.6192-.2923-1.4493-1.1926-2.8384-2.4824-3.7383-.5914-.4135-1.2586-.7159-1.9649-.9043-.4997-.1332-1.0087-.2008-1.5195-.2008-.0083 0-.0166-.0001-.0249 0zm.0644 1.0235h.0059c.3538 0 .7057.0575 1.0449.1699.5607.1867 1.0798.5022 1.5059.9121.4262.4099.7602.9096.9746 1.457.2143.5475.3242 1.1353.3242 1.7266 0 .5914-.11 1.1791-.3242 1.7266-.2144.5474-.5484 1.0472-.9746 1.457-.4261.4099-.9452.7254-1.5059.9121-.5611.1866-1.1572.2305-1.7422.1289-.5849-.1016-1.1436-.3437-1.6347-.7051-.4912-.3614-.8957-.8407-1.1817-1.3945-.2859-.5539-.4375-1.1671-.4375-1.8008 0-.6336.1516-1.2469.4375-1.8008.2859-.5538.6904-1.033 1.1816-1.3945.4912-.3614 1.0499-.6035 1.6348-.7051.2925-.0508.5891-.0723.8848-.0644zM6.0644 9.0097c-.1719.0068-.3416.0548-.4921.1425-.1506.0878-.2773.2131-.3711.3633-.0952.1521-.1523.3285-.166.5097-.0137.1812.0181.3629.0918.5293.0737.1663.1879.3126.332.4238s.3148.1852.4961.2149c.1812.0297.3672.0126.5411-.0508.1738-.0634.3304-.1702.4551-.3106.1247-.1403.2132-.3097.2578-.4922.0446-.1825.0441-.3729-.0015-.5551-.0456-.1822-.1351-.3511-.2607-.4907-.1255-.1397-.2829-.2456-.4572-.3081-.1744-.0626-.3609-.0803-.5425-.0527-.0452.0069-.0904.0169-.1348.0301-.0444.0132-.0877.0296-.1297.0489-.0419.0193-.0822.0418-.1211.0664-.0389.0246-.0759.0515-.1113.0801zm11.1856 3.3925c-.1545.0031-.3071.0355-.4492.0957-.1421.0603-.2708.1474-.3789.2559-.108.1085-.1941.2364-.2539.3779-.0598.1415-.0924.2935-.0957.4473-.0033.1538.0226.3071.0762.4512.0535.1441.1337.2764.2363.3887.1027.1122.2263.2028.3633.2676.137.0648.2853.1024.4356.1094.1502.007.3009-.0149.4414-.0644.1405-.0496.2689-.1258.3789-.2246.11-.0989.1991-.2186.2617-.3516.0626-.133.0974-.2766.1035-.4219.0061-.1453-.0166-.2903-.0664-.4258-.0498-.1355-.1258-.2603-.2226-.3672-.0968-.1069-.2131-.1944-.3418-.2578-.1287-.0635-.2682-.1019-.4102-.1133-.0355-.0029-.0712-.0039-.1074-.0039-.0119.0001-.0238.0005-.0356.002zm-5.5664.0039c-.1545.0031-.3071.0355-.4492.0957-.1421.0603-.2708.1474-.3789.2559-.108.1085-.1941.2364-.2539.3779-.0598.1415-.0924.2935-.0957.4473-.0033.1538.0226.3071.0762.4512.0535.1441.1337.2764.2363.3887.1027.1122.2263.2028.3633.2676.137.0648.2853.1024.4356.1094.1502.007.3009-.0149.4414-.0644.1405-.0496.2689-.1258.3789-.2246.11-.0989.1991-.2186.2617-.3516.0626-.133.0974-.2766.1035-.4219.0061-.1453-.0166-.2903-.0664-.4258-.0498-.1355-.1258-.2603-.2226-.3672-.0968-.1069-.2131-.1944-.3418-.2578-.1287-.0635-.2682-.1019-.4102-.1133-.0355-.0029-.0712-.0039-.1074-.0039-.0119.0001-.0238.0005-.0356.002z" />
                                </svg>
                            }
                            label="CodeChef"
                        />
                        <SocialLink
                            href="https://www.hackerrank.com/profile/soumyaranjanpan5"
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2.5l5 3v5l-5 3-5-3v-5l5-3zm-3.75 5.2L12 11.8l3.75-2.1v2.2L12 14l-3.75-2.1v-2.2zm3.75 4.4l2.5-1.4v2.8L12 17l-2.5-1.4v-2.8l2.5 1.4z" />
                                </svg>
                            }
                            label="HackerRank"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
