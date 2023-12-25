import buildProviderTree from './build-provider-tree';
import { ThemeProvider } from './theme-provider';

const ProviderTree = buildProviderTree([[ThemeProvider]]);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <ProviderTree>{children}</ProviderTree>;
};

export default ContextProvider;
