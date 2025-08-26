declare global {
  interface Window {
    Alpine: any;
    filterByCategory: (categoria: string) => void;
    filterByGenre: (genero: string) => void;
  }
}

declare module 'alpinejs' {
  interface Alpine {
    start(): void;
    data(name: string, callback: () => any): void;
    directive(name: string, callback: (el: Element, { value, modifiers, expression }: any, { Alpine, effect, cleanup }: any) => void): void;
    magic(name: string, callback: (el: Element, { Alpine }: any) => any): void;
    store(name: string, value: any): void;
    bind(el: Element, name: string, value: any): void;
  }

  const Alpine: Alpine;
  export default Alpine;
}
export {};