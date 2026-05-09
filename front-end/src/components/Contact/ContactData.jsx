import {
    Mail,
    FolderGit2,
    BriefcaseBusiness
} from "lucide-react";

export const contactItems = [
    {
        title: "Email",
        subtitle: "neilbanerjee.22.5.2002@gmail.com",
        href: "mailto:neilbanerjee.22.5.2002@gmail.com",
        icon: <Mail className="text-cyan-500" size={22} />
    },
    {
        title: "GitHub",
        subtitle: "github.com/NeilBanerjee2002",
        href: "https://github.com/NeilBanerjee2002",
        icon: <FolderGit2 className="text-cyan-500" size={22} />
    },
    {
        title: "LinkedIn",
        subtitle: "https://www.linkedin.com/in/neil-banerjee-71a83324a/",
        href: "https://www.linkedin.com/in/neil-banerjee-71a83324a/",
        icon: <BriefcaseBusiness className="text-cyan-500" size={22} />
    }
];