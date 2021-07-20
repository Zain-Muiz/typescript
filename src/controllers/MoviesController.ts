import { NextFunction, Request, Response, Router } from 'express';
const MoviesController: Router = Router();

let movies = [
  {
    id: '1',
    name: 'Inception',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Ken Watanabe', 'Marion Cotillard', 'Cillian Murphy'],
  },
  {
    id: '2',
    name: 'The Silence of the Lambs',
    director: 'Jonathan Demme',
    cast: ['Jodie Foster', 'Anthony Hopkins'],
  },
  {
    id: '3',
    name: 'Shutter Island',
    director: 'Martin Scorsese',
    cast: ['Leonardo DiCaprio', 'Mark Ruffalo', 'Ben Kingsley'],
  },
  {
    id: '4',
    name: 'The Pursuit of Happyness',
    director: 'Gabriele Muccino',
    cast: ['Will Smith', 'Thandie Newton', 'Jaden Smith'],
  },
];

MoviesController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ data: movies });
    } catch (e) {
      next(e);
    }
  }
);

MoviesController.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const movie = movies.find((r) => r.id === id);
      if (movie) {
        res.status(200).json({ data: movie });
      } else {
        res.status(404).json({ error: 'Movie not found' });
      }
    } catch (e) {
      next(e);
    }
  }
);

MoviesController.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const movie = req.body;
      movies.push(movie);
      res.status(200).json({ data: movie });
    } catch (e) {
      next(e);
    }
  }
);

MoviesController.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const movie = req.body;
      movies = movies.map((m) => {
        if (m.id === id) {
          return movie;
        } else return m;
      });
      res.status(200).json({ data: movie });
    } catch (e) {
      next(e);
    }
  }
);

MoviesController.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const movie = movies.find((m) => m.id === id);
      if (!movie) {
        res.status(404).json({ error: 'Movie not found' });
      } else {
        movies = movies.filter((m) => m.id !== id);
        res.status(200).end();
      }
    } catch (e) {
      next(e);
    }
  }
);

export default MoviesController;
