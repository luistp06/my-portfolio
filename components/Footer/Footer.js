import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/chain_link.jpg", "Twitter","https://x.com")}
${Button("/icons/github_icon.jpg", "GitHub","https://github.com/luistp06")}
${Button("/icons/linkedin_icon.jpg", "LinkedIn")}
</div>
`;