import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => <section className="container mx-auto mt-3 px-2 mb-12">{children}</section>;
export default Container;
