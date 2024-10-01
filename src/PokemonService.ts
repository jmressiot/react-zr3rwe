import { Pokemon } from './Pokemon';

export default class ProductService {
  fetch = (): Promise<Pokemon[]> => {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 94,
            name: 'ectoplasma',
            types: 'spectre/poison',
          },
          {
            id: 42,
            name: 'nosferalto',
            types: 'poison/vol',
          },
          {
            id: 74,
            name: 'racaillou',
            types: 'roche/sol',
          },
          {
            id: 24,
            name: 'arbok',
            types: 'poison',
          },
        ]);
      }, 500);
    });
  };
}
