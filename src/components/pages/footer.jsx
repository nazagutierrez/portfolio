import { useTranslation } from "react-i18next";

function Footer() {
  const [t] = useTranslation("global");
  const current = new Date();
  const date = `${current.getFullYear()}`;

  return (
    <div className="h-10 text-center px-4 text-gray-main/90 text-xs absolute selectable-yellow bottom-3 xs:bottom-0 flex space-y-2 justify-center align-center w-full gap-4">
      <div className="self-center">
        <span>© Copyright </span>
        <span>{date}.</span>
        <span>
          {t("footer.made")}
          <a
            href="https://www.linkedin.com/in/nazarenogutierrez1/"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-main opacity-90 hover:brightness-125 transition"
          >
            Nazareno Gutierrez
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
