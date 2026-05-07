import {
    Mail,
    FolderGit2,
    BriefcaseBusiness
} from "lucide-react";

export const contactItems = [
    {
        title: "Email",
        subtitle: "yourmail@example.com",
        href: "mailto:yourmail@example.com",
        icon: <Mail className="text-cyan-500" size={22} />
    },
    {
        title: "GitHub",
        subtitle: "github.com/yourusername",
        href: "https://github.com/",
        icon: <FolderGit2 className="text-cyan-500" size={22} />
    },
    {
        title: "LinkedIn",
        subtitle: "linkedin.com/in/yourprofile",
        href: "https://linkedin.com/",
        icon: <BriefcaseBusiness className="text-cyan-500" size={22} />
    }
];