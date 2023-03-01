import html from "../../html/policy";

export const Privacy = () => {
  return (
    <div style={{ padding: 10, textAlign: "left", display: "block" }} dangerouslySetInnerHTML={{ __html: html }}></div>
  );
};
