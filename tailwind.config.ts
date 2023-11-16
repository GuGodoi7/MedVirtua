import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            highlight: "#EC3E17",
            text: "#061721",
            medium: "#174856",
            "light-blue": "#84C6BF",
            light: "#FBFBFF",
        },
    },
    plugins: [],
};
export default config;
