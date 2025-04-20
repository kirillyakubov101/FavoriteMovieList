import MovieCard from "../MovieCard";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import * as MovieContext from "../../contexts/MovieContext";

const mockMovie = {
  id: 1,
  title: "Avatar",
  poster_path: "/image.jpg",
  release_date: "2024",
};

describe("MovieCard", () => {
  it("renders movie title, poster, and date", () => {
    vi.spyOn(MovieContext, "useMovieContext").mockReturnValue({
      addToFavorites: vi.fn(),
      removeFromFavorites: vi.fn(),
      isFavorite: () => true,
    });

    render(<MovieCard movie={mockMovie} />);
    expect(screen.getByText(/avatar/i)).toBeInTheDocument();
    expect(screen.getByText(/2024/i)).toBeInTheDocument();
    expect(screen.getByAltText(/avatar/i)).toHaveAttribute(
      "src",
      expect.stringContaining(mockMovie.poster_path)
    );
  });

  it("calls addToFavorites when not already favorite", () => {
    const addToFavorites = vi.fn();
    const removeFromFavorites = vi.fn();

    vi.spyOn(MovieContext, "useMovieContext").mockReturnValue({
      addToFavorites,
      removeFromFavorites,
      isFavorite: () => false,
    });

    render(<MovieCard movie={mockMovie} />);

    const button = screen.getByRole("button", { name: /♥/i });
    fireEvent.click(button);

    expect(addToFavorites).toHaveBeenCalledWith(mockMovie);
    expect(removeFromFavorites).not.toHaveBeenCalled();
  });

  it("calls removeFromFavorites when already favorite", () => {
    const addToFavorites = vi.fn();
    const removeFromFavorites = vi.fn();

    vi.spyOn(MovieContext, "useMovieContext").mockReturnValue({
      addToFavorites,
      removeFromFavorites,
      isFavorite: () => true,
    });

    render(<MovieCard movie={mockMovie} />);

    const button = screen.getByRole("button", { name: /♥/i });
    fireEvent.click(button);

    expect(removeFromFavorites).toHaveBeenCalledWith(mockMovie.id);
    expect(addToFavorites).not.toHaveBeenCalled();
  });
});
