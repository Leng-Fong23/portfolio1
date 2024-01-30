// utils.ts
export const handleNavClick = (link: string) => {
    const section = document.getElementById(link.substring(2));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  