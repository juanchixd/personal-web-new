import React from "react";
import { Icon } from "@iconify/react";

function SocialIcon(props) {
  const { link, icon, label } = props;
  if (icon === "vsco") {
    return (
      <a
        target="_blank"
        aria-label={label}
        rel="noopener noreferrer"
        href={link}
      >
        <Icon icon="simple-icons:vsco" />
      </a>
    );
  } else {
    return (
      <a
        target="_blank"
        aria-label={label}
        rel="noopener noreferrer"
        href={link}
      >
        <i className={icon} aria-hidden="true" />
      </a>
    );
  }
}

export default SocialIcon;
