import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <nav className="footer">
      <a href="https://github.com/patrycja-i-lesniak">
        {" "}
        © 2022 Coded by Patrycja Leśniak <BsGithub className="github" />
      </a>
    </nav>
  );
}
