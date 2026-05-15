export const Footer = () => {
  return (
    <footer className="border-t border-border py-6 flex justify-center items-center">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Julien Joecker · Made with React &
        Tailwind CSS
      </p>
    </footer>
  );
};
