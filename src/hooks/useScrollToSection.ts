const useScrollToSection = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return { scrollToSection, handleScrollToSection };
};

export default useScrollToSection;
