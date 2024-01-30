// utils.ts
export const handleNavClick = (link: string) => {
    const section = document.getElementById(link.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  