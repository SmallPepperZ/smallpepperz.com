
export interface Project {
    repo: string;
    name?: string;
    description?: string;
    links?: ProjectLink[];
    tags?: string[];
    
}
export interface ProjectLink {
    text: string;
    url: string;
    icon: string;
    class: string;
}
export interface ProjectTag {
    text: string;
    color: string;
}
type Projects = {[key:string]: Project[]};
type Tags = {[key:string]: ProjectTag};

export const tagStyles:Tags = {
    html: {
        text: "HTML",
        color: "#e34c26"
    },
    python: {
        text: "Python",
        color: "#306998"
    },
    ruby: {
        text: "Ruby",
        color: "#d51f06"
    },
    go: {
        text: "Go",
        color: "#00ADD8"
    },
}

export const projects:Projects={
    active:[
        {
            repo: "smallpepperz/leetcode", 
            description: "My LeetCode solutions",
        }
    ],
    archived:[
        {
            repo: "smallpepperz/sachibotpy",
            description: "A discord bot I created to learn Python"
        },
        {
            repo: "smallpepperz/magicminecraftmodmodernizer",
            description: 'A program for managing minecraft mods, abandoned for <a href="https://github.com/Senth/minecraft-mod-manager">@Senth\'s mod manager</a>'
        }
    ],
    contribution:[
        {
            repo: "minecrafthopper/minecrafthopper",
            description: "A community-run Minecraft knowledgebase",
            links: [
                {
                    text: "My PRs",
                    url: "https://github.com/MinecraftHopper/MinecraftHopper/pulls?q=is%3Apr+author%3ASmallPepperZ",
                    icon: "fa-solid fa-code-pull-request",
                    class: "secondary"
                }
            ]
        },
        {
            repo: "github/explore",
            links: [
                {
                    text: "My PRs",
                    url: "https://github.com/github/explore/pulls?q=is%3Apr+author%3ASmallPepperZ",
                    icon: "fa-solid fa-code-pull-request",
                    class: "secondary"
                }
            ]
        }
    ]
}