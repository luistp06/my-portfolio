import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/chain_link.jpg", "Twitter")}
${Button("/icons/github_icon.jpg", "GitHub")}
${Button("/icons/linkedin_icon.jpg", "LinkedIn")}
</div>
`;