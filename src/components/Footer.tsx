export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground">
            © {new Date().getFullYear()} Mayra Gomes. All rights reserved.
          </div>
          
          <div className="flex gap-8 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
